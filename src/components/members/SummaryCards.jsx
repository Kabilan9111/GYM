import { motion } from 'framer-motion';
import { FiUsers, FiTrendingUp } from 'react-icons/fi';

export default function SummaryCards({ members, mode }) {
  const packs = [
    { label: 'Starter', hex: '#00eaff', rgb: '0, 234, 255' },
    { label: 'Silver', hex: '#3b82f6', rgb: '59, 130, 246' },
    { label: 'Gold', hex: '#f59e0b', rgb: '245, 158, 11' },
    { label: 'Elite', hex: '#a855f7', rgb: '168, 85, 247' },
    { label: 'Platinum', hex: '#ff2d2d', rgb: '255, 45, 45' }
  ];
  
  const categories = [
    { label: 'Basic', hex: '#00eaff', rgb: '0, 234, 255' },
    { label: 'Standard', hex: '#3b82f6', rgb: '59, 130, 246' },
    { label: 'Premium', hex: '#ff2d2d', rgb: '255, 45, 45' }
  ];

  const tiers = mode === 'pack' ? packs : categories;

  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 ${mode === 'pack' ? 'lg:grid-cols-5' : 'lg:grid-cols-3'} gap-5 w-full mb-8 z-10 relative`}>
      {tiers.map((tier, i) => {
        const count = members.filter(m => (mode === 'pack' ? m.pack : m.category) === tier.label).length;
        const isPlatinum = tier.label === 'Platinum' || tier.label === 'Premium';

        const bg = isPlatinum 
          ? `radial-gradient(150% 150% at 50% 0%, rgba(${tier.rgb}, 0.1) 0%, rgba(5,5,5,0.98) 100%)`
          : `radial-gradient(120% 120% at 50% -10%, rgba(${tier.rgb}, 0.2) 0%, rgba(${tier.rgb}, 0.05) 40%, rgba(5,5,5,0.95) 100%)`;

        const shadow = `
          0 20px 40px -10px rgba(0,0,0,0.8), 
          0 10px 30px -15px rgba(${tier.rgb}, 0.4), 
          inset 0 0 30px rgba(${tier.rgb}, 0.1), 
          inset 0 1px 0 rgba(255,255,255,0.15), 
          inset 1px 0 0 rgba(255,255,255,0.05), 
          inset -1px 0 0 rgba(255,255,255,0.05)
        `;

        const hoverShadow = `
          0 30px 60px -15px rgba(0,0,0,0.9), 
          0 20px 50px -10px rgba(${tier.rgb}, 0.6), 
          inset 0 0 40px rgba(${tier.rgb}, 0.2), 
          inset 0 1px 0 rgba(255,255,255,0.25), 
          inset 1px 0 0 rgba(255,255,255,0.1), 
          inset -1px 0 0 rgba(255,255,255,0.1)
        `;

        return (
          <motion.div 
            key={tier.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
            className={`group relative p-5 rounded-2xl overflow-hidden cursor-default transition-all duration-500 ease-out z-10 ${isPlatinum ? 'animate-pulse-slow' : ''}`}
            style={{ 
              background: bg,
              boxShadow: shadow,
              backdropFilter: 'blur(20px)'
            }}
            whileHover={{ y: -8, boxShadow: hoverShadow }}
          >
            <div className="absolute inset-0 backdrop-blur-2xl rounded-[inherit] -z-10 pointer-events-none"></div>
            
            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay -z-10 pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}></div>
            
            {/* Additional Color Glow */}
            {!isPlatinum && (
              <div className="absolute inset-0 opacity-40 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none -z-10 mix-blend-screen" style={{ background: `radial-gradient(ellipse at top left, rgba(${tier.rgb}, 0.25) 0%, transparent 70%)` }}></div>
            )}
            
            {/* Glass Reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-white/[0.01] to-transparent opacity-70 group-hover:opacity-100 group-hover:from-white/[0.12] transition-colors duration-500 rounded-[inherit] pointer-events-none -z-10 blur-[2px]"></div>

            <div className="relative z-10 flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: tier.hex, boxShadow: `0 0 10px ${tier.hex}` }}></div>
                <p className="text-[10px] drop-shadow-md text-gray-200 font-bold uppercase tracking-widest">{tier.label}</p>
              </div>
              <div className="p-2 rounded-lg bg-black/40 border border-white/5 text-gray-400 shadow-[inset_0_2px_15px_rgba(0,0,0,0.5)] group-hover:text-white transition-colors">
                <FiUsers size={14}/>
              </div>
            </div>
            
            <div className="relative z-10 flex items-end gap-3 mt-1">
              <h4 className="text-3xl font-black tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">{count}</h4>
              <div className="flex items-center gap-1 text-[10px] font-bold tracking-widest mb-1.5 px-2.5 py-0.5 rounded-full bg-black/40 border border-white/10 shadow-[0_5px_10px_-2px_rgba(0,0,0,0.5)]" style={{ color: tier.hex }}>
                <FiTrendingUp size={12} /> +{(Math.random()*15).toFixed(1)}%
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  );
}

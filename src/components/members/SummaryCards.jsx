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

        return (
          <motion.div 
            key={tier.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
            className="group relative p-5 rounded-2xl overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-1.5"
            style={{ 
              background: `linear-gradient(135deg, rgba(${tier.rgb}, 0.15) 0%, rgba(5,5,5,0.85) 100%)`,
              boxShadow: `0 15px 30px -10px rgba(0,0,0,0.8), inset 0 0 20px rgba(${tier.rgb}, 0.1), inset 1px 1px 0 rgba(255,255,255,0.08)`,
              backdropFilter: 'blur(20px)'
            }}
          >
            {/* Layers */}
            <div className="absolute inset-0 border border-white/5 group-hover:border-white/10 rounded-[inherit] pointer-events-none transition-colors"></div>
            <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}></div>
            <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full blur-[30px] opacity-30 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" style={{ backgroundColor: tier.hex }}></div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 rounded-[inherit] pointer-events-none"></div>

            <div className="relative z-10 flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: tier.hex, boxShadow: `0 0 8px ${tier.hex}` }}></div>
                <p className="text-[11px] text-gray-300 font-bold uppercase tracking-wider">{tier.label}</p>
              </div>
              <div className="p-2 rounded-lg bg-black/40 border border-white/10 text-gray-400 shadow-inner">
                <FiUsers size={14}/>
              </div>
            </div>
            
            <div className="relative z-10 flex items-end gap-3 mt-1">
              <h4 className="text-3xl font-black tracking-tight text-white drop-shadow-md">{count}</h4>
              <div className="flex items-center gap-1 text-[11px] font-bold tracking-wide mb-1.5 px-2 py-0.5 rounded-full bg-black/30 border border-white/5" style={{ color: tier.hex }}>
                <FiTrendingUp size={12} /> +{(Math.random()*15).toFixed(1)}%
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  );
}

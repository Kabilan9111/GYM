import { motion } from 'framer-motion';
import { getTierDetails } from './utils';
import { FloatingParticles, LightStreak, FlowingGradient } from './PremiumEffects';
import { FiMail, FiPhone } from 'react-icons/fi';

export default function MemberCard({ member, mode, onClick, isSelected }) {
  const { tier, isPlatinum, styles } = getTierDetails(mode, member);

  return (
    <motion.div 
      onClick={onClick}
      className={`relative group rounded-3xl p-6 overflow-hidden transition-all duration-500 ease-out cursor-pointer ${isSelected ? 'scale-[1.02] ring-1 ring-white/30' : ''}`}
      style={{
        background: isPlatinum ? 'rgba(5,5,5,0.9)' : `linear-gradient(135deg, rgba(${styles.rgb}, 0.22) 0%, rgba(5,5,5,0.85) 100%)`,
        boxShadow: `
          0 20px 40px -10px rgba(0,0,0,0.7), 
          0 10px 20px -5px rgba(${styles.rgb}, 0.1),
          inset 0 0 30px rgba(${styles.rgb}, 0.15)
        `,
      }}
      whileHover={{
        y: -6,
        boxShadow: `
          0 25px 50px -12px rgba(0,0,0,0.8), 
          0 15px 30px 0px rgba(${styles.rgb}, 0.25),
          inset 0 0 50px rgba(${styles.rgb}, 0.25)
        `
      }}
    >
      {/* 1. Base Layer & Noise */}
      <div className="absolute inset-0 backdrop-blur-2xl rounded-[inherit] -z-10"></div>
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay -z-10 pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}></div>

      {/* 2. Color Bleed Radial Glow INSIDE card */}
      {!isPlatinum && (
        <div className="absolute inset-0 opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" style={{ background: `radial-gradient(circle at top right, rgba(${styles.rgb}, 0.3) 0%, transparent 60%), radial-gradient(circle at bottom left, rgba(${styles.rgb}, 0.15) 0%, transparent 60%)` }}></div>
      )}

      {/* Light Reflection Layer & Edge Light */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-80 rounded-[inherit] pointer-events-none -z-10"></div>
      <div className="absolute inset-0 border border-white/5 group-hover:border-white/20 rounded-[inherit] pointer-events-none -z-10 transition-colors duration-500"></div>
      <div className="absolute inset-0 shadow-[inset_1px_1px_0_rgba(255,255,255,0.15)] rounded-[inherit] pointer-events-none -z-10"></div>

      {/* Platinum Special Layers */}
      {isPlatinum && <FlowingGradient />}
      {isPlatinum && <FloatingParticles />}
      {isPlatinum && <LightStreak />}
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full font-sans">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold text-white shadow-xl transition-all duration-500 overflow-hidden group-hover:scale-105 border border-white/10`} style={{ background: `rgba(${styles.rgb}, 0.2)` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50"></div>
              {member.avatar}
            </div>
            <div>
              <h3 className="text-white font-bold tracking-wide text-base group-hover:text-white transition-colors">{member.name}</h3>
              <div className={`text-[9px] font-bold tracking-wider uppercase mt-1 px-2.5 py-0.5 rounded-full border border-white/10 shadow-[0_0_10px_rgba(${styles.rgb},0.2)] bg-black/30 ${styles.text} inline-flex items-center gap-1.5`}>
                <div className={`w-1.5 h-1.5 rounded-full`} style={{ backgroundColor: styles.hex, boxShadow: `0 0 8px ${styles.hex}` }}></div>
                {tier}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3 mb-6 bg-black/20 backdrop-blur-md p-4 rounded-xl border border-white/5 relative group-hover:bg-black/30 transition-colors shadow-inner">
          <div className="flex items-center gap-3 text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
            <FiMail className={styles.text} style={{ color: styles.hex, textShadow: `0 0 10px ${styles.hex}` }}/>
            <span className="truncate">{member.email}</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
            <FiPhone className={styles.text} style={{ color: styles.hex, textShadow: `0 0 10px ${styles.hex}` }}/>
            <span>{member.phone}</span>
          </div>
        </div>

        <div className="flex justify-between items-end pt-4 mt-auto border-t border-white/10">
          <div>
            <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Joined</p>
            <p className="text-xs text-gray-200 mt-1 font-semibold">{member.joinDate}</p>
          </div>
          <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-md border shadow-md ${
            member.status === 'ACTIVE' ? 'text-green-400 border-green-500/20 bg-green-500/10' : 'text-red-400 border-red-500/20 bg-red-500/10'
          }`}>
            {member.status}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

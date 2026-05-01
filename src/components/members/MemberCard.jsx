import { motion } from 'framer-motion';
import { getTierDetails } from './utils';
import { FloatingParticles, LightStreak, FlowingGradient } from './PremiumEffects';
import { FiMail, FiPhone } from 'react-icons/fi';

export default function MemberCard({ member, mode, onClick, isSelected }) {
  const { tier, isPlatinum, styles } = getTierDetails(mode, member);

  const standardBackground = `radial-gradient(120% 120% at 50% -10%, rgba(${styles.rgb}, 0.2) 0%, rgba(${styles.rgb}, 0.05) 40%, rgba(5,5,5,0.95) 100%)`;
  const platinumBackground = `radial-gradient(150% 150% at 50% 0%, rgba(${styles.rgb}, 0.1) 0%, rgba(5,5,5,0.98) 100%)`;

  const idleBoxShadow = `
    0 20px 40px -10px rgba(0,0,0,0.8), 
    0 10px 30px -15px rgba(${styles.rgb}, 0.4), 
    inset 0 0 30px rgba(${styles.rgb}, 0.1), 
    inset 0 1px 0 rgba(255,255,255,0.15), 
    inset 1px 0 0 rgba(255,255,255,0.05), 
    inset -1px 0 0 rgba(255,255,255,0.05)
  `;

  const hoverBoxShadow = `
    0 30px 60px -15px rgba(0,0,0,0.9), 
    0 20px 50px -10px rgba(${styles.rgb}, 0.6), 
    inset 0 0 40px rgba(${styles.rgb}, 0.2), 
    inset 0 1px 0 rgba(255,255,255,0.25), 
    inset 1px 0 0 rgba(255,255,255,0.1), 
    inset -1px 0 0 rgba(255,255,255,0.1)
  `;

  return (
    <motion.div 
      onClick={onClick}
      className={`relative group rounded-3xl p-6 overflow-hidden transition-all duration-500 ease-out cursor-pointer z-10 ${isSelected ? 'scale-[1.02] ring-1 ring-white/30' : ''} ${isPlatinum ? 'animate-pulse-slow' : ''}`}
      style={{
        background: isPlatinum ? platinumBackground : standardBackground,
        boxShadow: idleBoxShadow,
        backdropFilter: 'blur(20px)'
      }}
      whileHover={{
        y: -10,
        boxShadow: hoverBoxShadow,
      }}
    >
      <div className="absolute inset-0 backdrop-blur-2xl rounded-[inherit] -z-10 pointer-events-none"></div>
      
      {/* NOISE TEXTURE: subtle grain texture (2-4% opacity) */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay -z-10 pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}></div>

      {/* ADDITIONAL COLOR GLOW FOR HIGHER DEPTH */}
      {!isPlatinum && (
        <div className="absolute inset-0 opacity-40 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none -z-10 mix-blend-screen" style={{ background: `radial-gradient(ellipse at top left, rgba(${styles.rgb}, 0.25) 0%, transparent 70%)` }}></div>
      )}

      {/* GLASS REFLECTION: soft white gradient overlay top-left to center, smooth blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-white/[0.01] to-transparent opacity-70 group-hover:opacity-100 group-hover:from-white/[0.12] transition-colors duration-500 rounded-[inherit] pointer-events-none -z-10 blur-[2px]"></div>

      {/* Platinum Spec */}
      {isPlatinum && <FlowingGradient />}
      {isPlatinum && <FloatingParticles />}
      {isPlatinum && <LightStreak />}
      
      {/* Content Layer */}
      <div className="relative z-10 flex flex-col h-full font-sans">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold text-white shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-105 border border-white/10`} style={{ background: `rgba(${styles.rgb}, 0.2)`, boxShadow: `inset 1px 1px 0 rgba(255,255,255,0.2), 0 10px 20px -5px rgba(0,0,0,0.5)` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-60"></div>
              {member.avatar}
            </div>
            <div>
              <h3 className="text-white font-black tracking-wide text-base drop-shadow-md">{member.name}</h3>
              <div className={`text-[9px] font-bold tracking-widest uppercase mt-1 px-2.5 py-0.5 rounded-full border border-white/10 shadow-[0_0_15px_rgba(${styles.rgb},0.3)] bg-black/40 ${styles.text} inline-flex items-center gap-1.5`}>
                <div className={`w-1.5 h-1.5 rounded-full ${isPlatinum ? 'animate-ping' : ''}`} style={{ backgroundColor: styles.hex, boxShadow: `0 0 10px ${styles.hex}` }}></div>
                {tier}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3 mb-6 bg-black/30 backdrop-blur-xl p-4 rounded-xl border border-white/[0.03] shadow-[inset_0_2px_15px_rgba(0,0,0,0.3)] group-hover:bg-black/40 group-hover:border-white/[0.06] transition-colors">
          <div className="flex items-center gap-3 text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
            <FiMail className={styles.text} style={{ color: styles.hex, textShadow: `0 0 10px ${styles.hex}` }}/>
            <span className="truncate">{member.email}</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
            <FiPhone className={styles.text} style={{ color: styles.hex, textShadow: `0 0 10px ${styles.hex}` }}/>
            <span>{member.phone}</span>
          </div>
        </div>

        <div className="flex justify-between items-end pt-4 mt-auto border-t border-white/[0.05]">
          <div>
            <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Joined</p>
            <p className="text-xs text-gray-200 mt-1 font-semibold">{member.joinDate}</p>
          </div>
          <span className={`text-[9px] font-black tracking-widest uppercase px-3 py-1.5 rounded-md border shadow-[0_5px_10px_-2px_rgba(0,0,0,0.5)] ${
            member.status === 'ACTIVE' ? 'text-green-400 border-green-500/30 bg-green-500/10' : 'text-red-400 border-red-500/30 bg-red-500/10'
          }`}>
            {member.status}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

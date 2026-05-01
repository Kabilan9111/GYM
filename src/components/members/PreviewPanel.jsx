import { motion, AnimatePresence } from 'framer-motion';
import { getTierDetails } from './utils';
import { FiX, FiMail, FiPhone, FiActivity, FiMapPin, FiCalendar } from 'react-icons/fi';
import { FlowingGradient, FloatingParticles, LightStreak } from './PremiumEffects';

export default function PreviewPanel({ member, mode, onClose }) {
  if (!member) return null;
  const { tier, isPlatinum, styles } = getTierDetails(mode, member);

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, x: 50, width: 0 }}
        animate={{ opacity: 1, x: 0, width: 420 }}
        exit={{ opacity: 0, x: 50, width: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="hidden lg:flex flex-col relative z-30 shrink-0 overflow-hidden font-sans border-l border-white/5"
        style={{
          background: isPlatinum ? 'rgba(5,5,5,0.95)' : `linear-gradient(180deg, rgba(${styles.rgb}, 0.15) 0%, rgba(5,5,5,0.95) 40%)`,
          boxShadow: `-10px 0 30px rgba(0,0,0,0.8), inset 1px 0 0 rgba(255,255,255,0.05)`,
          backdropFilter: 'blur(30px)'
        }}
      >
        {/* Layer Structure */}
        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}></div>
        
        {!isPlatinum && (
          <div className="absolute top-0 right-0 w-[400px] h-[400px] blur-[150px] pointer-events-none opacity-40 mix-blend-screen" style={{ backgroundColor: styles.hex }}></div>
        )}

        {isPlatinum && (
          <>
            <FlowingGradient />
            <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
            <FloatingParticles />
            <LightStreak />
          </>
        )}

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          <div className="p-8 flex justify-between items-center border-b border-white/5">
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: styles.hex, boxShadow: `0 0 8px ${styles.hex}` }}></div>
              <h3 className="text-[11px] font-bold text-gray-300 tracking-widest uppercase">Entity Inspector</h3>
            </div>
            <button onClick={onClose} className="p-2.5 hover:bg-white/5 rounded-xl text-gray-500 hover:text-white transition-all border border-transparent hover:border-white/10 shadow-inner">
              <FiX size={16} />
            </button>
          </div>

          <div className="p-10 flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden flex flex-col items-center">
            
            {/* Avatar Frame */}
            <div className={`relative w-32 h-32 rounded-full flex items-center justify-center text-5xl font-black text-white mb-8 border border-white/10`} 
                 style={{ 
                   background: `linear-gradient(135deg, rgba(${styles.rgb}, 0.2) 0%, rgba(0,0,0,0.8) 100%)`,
                   boxShadow: `0 15px 35px -10px rgba(0,0,0,0.8), 0 0 25px rgba(${styles.rgb}, 0.2), inset 0 0 20px rgba(${styles.rgb}, 0.3)`
                 }}>
              <div className="absolute inset-0 shadow-[inset_1px_1px_0_rgba(255,255,255,0.2)] rounded-[inherit] pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50 rounded-[inherit]"></div>
              {isPlatinum && <FlowingGradient />}
              <span className="relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">{member.avatar}</span>
            </div>

            <h2 className="text-3xl font-black text-white mb-2 text-center tracking-tight drop-shadow-md">{member.name}</h2>
            <div className={`text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-white/10 shadow-[0_0_15px_rgba(${styles.rgb},0.15)] bg-black/40 mb-10 flex items-center gap-2`} style={{ color: styles.hex }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: styles.hex, boxShadow: `0 0 8px ${styles.hex}` }}></div>
              {tier} {mode === 'pack' ? 'Pack' : 'Category'}
            </div>

            {/* Data Modules */}
            <div className="w-full space-y-4">
              <div className="bg-black/40 p-4 rounded-2xl border border-white/5 flex items-center gap-5 shadow-[inset_0_2px_15px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-1 opacity-50 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: styles.hex }}></div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 shadow-inner"><FiMail className="text-gray-400" /></div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Comm Link</p>
                  <p className="text-sm font-medium text-gray-200">{member.email}</p>
                </div>
              </div>
              
              <div className="bg-black/40 p-4 rounded-2xl border border-white/5 flex items-center gap-5 shadow-[inset_0_2px_15px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-1 opacity-50 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: styles.hex }}></div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 shadow-inner"><FiPhone className="text-gray-400" /></div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Frequency</p>
                  <p className="text-sm font-medium text-gray-200">{member.phone}</p>
                </div>
              </div>

              <div className="bg-black/40 p-4 rounded-2xl border border-white/5 flex items-center gap-5 shadow-[inset_0_2px_15px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-1 opacity-50 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: styles.hex }}></div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 shadow-inner"><FiCalendar className="text-gray-400" /></div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Initialization</p>
                  <p className="text-sm font-medium text-gray-200">{member.joinDate}</p>
                </div>
              </div>

              <div className="bg-black/40 p-4 rounded-2xl border border-white/5 flex items-center gap-5 shadow-[inset_0_2px_15px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-1 opacity-50 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: styles.hex }}></div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 shadow-inner"><FiActivity className="text-gray-400" /></div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Current State</p>
                  <p className={`text-sm font-bold ${member.status === 'ACTIVE' ? 'text-green-400' : 'text-red-400'}`}>{member.status}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 border-t border-white/10 bg-black/40">
            <button className="relative w-full py-4 rounded-xl font-bold tracking-[0.2em] text-[11px] uppercase transition-all overflow-hidden group" style={{ color: styles.hex, borderColor: `${styles.hex}40`, borderWidth: '1px' }}>
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity" style={{ backgroundColor: styles.hex }}></div>
              <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none"></div>
              <span className="relative z-10 drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">Execute Override</span>
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

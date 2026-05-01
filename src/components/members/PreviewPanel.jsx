import { motion, AnimatePresence } from 'framer-motion';
import { getTierDetails } from './utils';
import { FiX, FiMail, FiPhone, FiActivity, FiMapPin, FiCalendar } from 'react-icons/fi';
import { PlatinumAura, FloatingParticles } from './PremiumEffects';

export default function PreviewPanel({ member, mode, onClose }) {
  if (!member) return null;
  const { tier, isPlatinum, styles } = getTierDetails(mode, member);

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, x: 50, width: 0 }}
        animate={{ opacity: 1, x: 0, width: 380 }}
        exit={{ opacity: 0, x: 50, width: 0 }}
        className="hidden lg:flex flex-col border-l border-white/5 bg-[#030303]/90 backdrop-blur-xl relative z-30 shrink-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-transparent pointer-events-none"></div>
        <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-${styles.color}-500/5 blur-[120px] pointer-events-none`}></div>

        <div className="p-6 flex justify-between items-center border-b border-white/5">
          <h3 className="text-xs font-bold text-gray-400 tracking-widest uppercase">Node Inspector</h3>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg text-gray-500 hover:text-white transition-colors">
            <FiX />
          </button>
        </div>

        <div className="p-8 flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden flex flex-col items-center">
          <div className={`relative w-28 h-28 rounded-full flex items-center justify-center text-4xl font-black text-white mb-6 border-2 ${styles.border} ${styles.glow} ${styles.bg}`}>
            {isPlatinum && <PlatinumAura />}
            {isPlatinum && <FloatingParticles />}
            <span className="relative z-10">{member.avatar}</span>
          </div>

          <h2 className="text-2xl font-bold text-white mb-2 text-center">{member.name}</h2>
          <div className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${styles.bg} ${styles.border} ${styles.text} mb-8`}>
            {tier} {mode === 'pack' ? 'Pack' : 'Category'}
          </div>

          <div className="w-full space-y-4">
            <div className="bg-black/40 p-4 rounded-xl border border-white/5 flex items-center gap-4">
              <div className="p-2.5 bg-white/5 rounded-lg"><FiMail className="text-gray-400" /></div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Comm Link</p>
                <p className="text-sm text-gray-200">{member.email}</p>
              </div>
            </div>
            
            <div className="bg-black/40 p-4 rounded-xl border border-white/5 flex items-center gap-4">
              <div className="p-2.5 bg-white/5 rounded-lg"><FiPhone className="text-gray-400" /></div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Frequency</p>
                <p className="text-sm text-gray-200">{member.phone}</p>
              </div>
            </div>

            <div className="bg-black/40 p-4 rounded-xl border border-white/5 flex items-center gap-4">
              <div className="p-2.5 bg-white/5 rounded-lg"><FiCalendar className="text-gray-400" /></div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Initialization</p>
                <p className="text-sm text-gray-200">{member.joinDate}</p>
              </div>
            </div>

            <div className="bg-black/40 p-4 rounded-xl border border-white/5 flex items-center gap-4">
              <div className="p-2.5 bg-white/5 rounded-lg"><FiActivity className="text-gray-400" /></div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Current State</p>
                <p className={`text-sm font-bold ${member.status === 'ACTIVE' ? 'text-green-400' : 'text-red-400'}`}>{member.status}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-white/5 bg-black/20">
          <button className={`w-full py-3.5 rounded-xl font-bold tracking-widest text-[10px] uppercase transition-all bg-${styles.color}-500/10 border ${styles.border} ${styles.text} hover:bg-${styles.color}-500/20`}>
            Execute Override
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

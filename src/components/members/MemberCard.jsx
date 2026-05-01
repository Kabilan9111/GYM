import { motion } from 'framer-motion';
import { getTierDetails } from './utils';
import { FloatingParticles, LightStreak, PlatinumAura } from './PremiumEffects';
import { FiMail, FiPhone } from 'react-icons/fi';

export default function MemberCard({ member, mode, onClick, isSelected }) {
  const { tier, isPlatinum, styles } = getTierDetails(mode, member);

  return (
    <motion.div 
      onClick={onClick}
      className={`relative group rounded-3xl p-6 bg-[#050505]/60 backdrop-blur-md overflow-hidden transition-all duration-300 cursor-pointer border ${styles.border} ${styles.glow} ${styles.hoverGlow} hover:-translate-y-1 ${isSelected ? 'ring-1 ring-white/20 scale-[1.02]' : ''}`}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b ${styles.gradient} to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none`}></div>
      <div className={`absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] pointer-events-none rounded-[inherit]`}></div>

      {isPlatinum && <PlatinumAura />}
      {isPlatinum && <FloatingParticles />}
      {isPlatinum && <LightStreak />}
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-5">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-black text-white shadow-xl transition-all duration-300 border ${styles.border} ${styles.bg}`}>
              {member.avatar}
            </div>
            <div>
              <h3 className="text-white font-bold tracking-wide">{member.name}</h3>
              <div className={`text-[10px] font-bold tracking-widest uppercase mt-1 px-2.5 py-0.5 rounded-full border inline-block ${styles.bg} ${styles.border} ${styles.text}`}>
                {tier}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3 mb-6 bg-black/40 p-4 rounded-xl border border-white/5">
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <FiMail className={styles.text} />
            <span className="truncate">{member.email}</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <FiPhone className={styles.text} />
            <span>{member.phone}</span>
          </div>
        </div>

        <div className="flex justify-between items-end pt-3 mt-auto border-t border-white/5">
          <div>
            <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Joined</p>
            <p className="text-xs text-gray-300 mt-1">{member.joinDate}</p>
          </div>
          <span className={`text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-md border ${
            member.status === 'ACTIVE' ? 'text-green-400 border-green-500/20 bg-green-500/10' : 'text-red-400 border-red-500/20 bg-red-500/10'
          }`}>
            {member.status}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

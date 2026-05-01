import { motion } from 'framer-motion';

export const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[inherit] z-0 mix-blend-screen">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-[2px] h-[2px] md:w-[3px] md:h-[3px] bg-red-400 rounded-full shadow-[0_0_8px_rgba(255,0,0,0.8)]"
        initial={{ y: '100%', x: `${10 + Math.random() * 80}%`, opacity: 0 }}
        animate={{ y: '-20%', opacity: [0, 0.8, 0] }}
        transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 2, ease: "linear" }}
      />
    ))}
  </div>
);

export const LightStreak = () => (
  <motion.div 
    className="absolute inset-0 pointer-events-none overflow-hidden rounded-[inherit] z-0"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <motion.div 
      className="absolute top-0 bottom-0 w-[50px] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
      initial={{ x: '-200%' }}
      animate={{ x: '400%' }}
      transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: "linear" }}
    />
  </motion.div>
);

export const PlatinumAura = () => (
  <motion.div 
    className="absolute inset-0 rounded-[inherit] pointer-events-none p-[1.5px] z-0 opacity-70 bg-gradient-to-b from-red-500 via-red-900/50 to-black shadow-[inset_0_0_30px_rgba(255,0,0,0.2)]"
    animate={{ opacity: [0.5, 0.9, 0.5] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  ></motion.div>
);

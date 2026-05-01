import { motion } from 'framer-motion';

export const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-[2px] h-[2px] bg-[#ff2d2d] rounded-full shadow-[0_0_12px_rgba(255,45,45,1)]"
        initial={{ y: '100%', x: `${10 + Math.random() * 80}%`, opacity: 0 }}
        animate={{ y: '-20%', opacity: [0, 0.8, 0] }}
        transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 2, ease: "linear" }}
      />
    ))}
  </div>
);

export const LightStreak = () => (
  <motion.div className="absolute inset-0 pointer-events-none overflow-hidden z-0 mix-blend-overlay">
    <motion.div 
      className="absolute top-0 bottom-0 w-[60px] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[30deg]"
      initial={{ x: '-400%' }}
      animate={{ x: '600%' }}
      transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
    />
  </motion.div>
);

export const FlowingGradient = () => (
  <motion.div 
    className="absolute inset-0 pointer-events-none z-0 opacity-80"
    style={{
      background: 'linear-gradient(110deg, rgba(255,45,45,0.4) 0%, rgba(5,5,5,0.8) 50%, rgba(255,45,45,0.3) 100%)',
      backgroundSize: '200% 200%'
    }}
    animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
  ></motion.div>
);

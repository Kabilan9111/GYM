import { motion } from 'framer-motion';
import { MdFitnessCenter } from 'react-icons/md';
import { FiCpu } from 'react-icons/fi';

export default function Hologram() {
  return (
    <div className="glass-panel rounded-3xl p-8 h-full flex flex-col relative overflow-hidden group min-h-[460px] shadow-[inset_0_0_50px_rgba(255,0,0,0.03)]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom opacity-40"></div>
      
      <div className="relative z-10 mb-8 flex justify-between items-start">
        <div>
          <h3 className="text-xl font-black text-white tracking-[0.2em] drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] uppercase">AI ENGINE</h3>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(255,0,0,1)]"></span>
            <p className="text-[10px] text-red-500 font-bold uppercase tracking-[0.3em]">Synchronized</p>
          </div>
        </div>
        <FiCpu className="text-2xl text-red-500/50 group-hover:text-red-500 transition-colors" />
      </div>

      <div className="flex-1 flex items-center justify-center relative mt-4">
        <div className="absolute bottom-4 w-64 h-16 bg-red-600/20 rounded-[100%] blur-[30px]"></div>
        <div className="absolute bottom-10 w-56 h-12 border border-red-500/30 rounded-[100%] shadow-[0_0_30px_rgba(255,0,0,0.6),inset_0_0_20px_rgba(255,0,0,0.3)]"></div>
        <div className="absolute bottom-12 w-40 h-8 border-[1.5px] border-red-400/60 rounded-[100%] shadow-[0_0_20px_rgba(255,0,0,0.8)]"></div>
        
        <div className="absolute bottom-10 w-[1.5px] h-64 bg-gradient-to-t from-red-500/80 to-transparent blur-[2px]"></div>
        <div className="absolute bottom-10 w-[1px] h-64 bg-gradient-to-t from-white/50 to-transparent"></div>

        <div className="absolute w-72 h-72 border border-red-500/20 rounded-full animate-[spin_10s_linear_infinite] shadow-[inset_0_0_30px_rgba(255,0,0,0.1)]"></div>
        <div className="absolute w-64 h-64 border-t-2 border-b-2 border-red-500/50 rounded-full animate-[spin_6s_linear_infinite_reverse]"></div>
        <div className="absolute w-80 h-80 border border-dashed border-red-500/20 rounded-full animate-[spin_15s_linear_infinite]"></div>

        <div className="absolute w-48 h-48 border-[1.5px] border-red-500/30 rounded-full rotate-45 [transform:scaleY(0.3)] animate-[spin_5s_linear_infinite] shadow-[0_0_20px_rgba(255,0,0,0.4)]"></div>
        <div className="absolute w-48 h-48 border-[1.5px] border-red-500/30 rounded-full -rotate-45 [transform:scaleY(0.3)] animate-[spin_5s_linear_infinite_reverse] shadow-[0_0_20px_rgba(255,0,0,0.4)]"></div>

        <motion.div 
          className="relative z-10 w-32 h-32 bg-gradient-to-br from-red-500 via-red-800 to-black rounded-full flex items-center justify-center shadow-[0_0_70px_rgba(255,0,0,0.7),inset_0_0_25px_rgba(255,255,255,0.4)] border border-red-400/80"
          animate={{ y: [-15, 15, -15], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <MdFitnessCenter className="text-6xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,1)]" />
          <div className="absolute inset-0 rounded-full bg-white/5 blur-md mix-blend-overlay"></div>
        </motion.div>

        <motion.div 
          className="absolute -left-6 top-1/4 bg-black/80 border border-red-500/40 backdrop-blur-xl px-4 py-2 rounded-md text-[9px] uppercase font-black text-white shadow-[0_0_20px_rgba(255,0,0,0.3)] tracking-[0.2em] block"
          animate={{ y: [-10, 10, -10], x: [-3, 3, -3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-red-500 mr-2">SYS \\</span> Optimal
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-red-500/50 -z-10"></div>
        </motion.div>
        
        <motion.div 
          className="absolute right-0 bottom-1/4 bg-black/80 border border-red-500/40 backdrop-blur-xl px-4 py-2 rounded-md text-[9px] uppercase font-black text-white shadow-[0_0_20px_rgba(255,0,0,0.3)] tracking-[0.2em] block"
          animate={{ y: [10, -10, 10], x: [3, -3, 3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-red-500 mr-2">PWR \\</span> 100%
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-red-500/50 -z-10"></div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute left-0 right-0 h-[2px] bg-white opacity-60 shadow-[0_0_25px_rgba(255,0,0,1),0_0_15px_rgba(255,255,255,1)] z-20 pointer-events-none"
        animate={{ top: ['0%', '100%', '0%'] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-0 pointer-events-none rounded-3xl shadow-[inset_0_0_80px_rgba(0,0,0,0.9)]"></div>
    </div>
  );
}

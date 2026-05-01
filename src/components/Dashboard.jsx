import { motion } from 'framer-motion';
import StatCard from './StatCard';
import Charts from './Charts';
import Hologram from './Hologram';
import { FiTrendingUp, FiUsers, FiCheckCircle, FiAlertCircle, FiTerminal } from 'react-icons/fi';

export default function Dashboard() {
  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };

  return (
    <motion.div className="space-y-8 pb-12" variants={container} initial="hidden" animate="show">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative px-2">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <FiTerminal className="text-red-500 text-xl" />
            <h5 className="text-red-500 text-[10px] font-black tracking-[0.4em] uppercase">Control Protocol / System 9</h5>
          </div>
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] tracking-tight">Main Console</h2>
        </div>
        <div className="flex gap-5 relative z-10">
          <button className="px-7 py-3.5 glass-panel text-[10px] font-black text-white tracking-[0.2em] uppercase rounded-xl hover:border-red-500/60 hover:bg-red-900/20 hover:shadow-[0_0_25px_rgba(255,0,0,0.2)] transition-all duration-300">
            Log Export
          </button>
          <button className="px-7 py-3.5 bg-gradient-to-r from-red-700 to-red-600 text-[10px] font-black text-white tracking-[0.2em] uppercase rounded-xl hover:from-red-600 hover:to-red-500 transition-all duration-300 shadow-[0_0_25px_rgba(220,38,38,0.5)] border border-red-400">
            + New Entity
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Sys Revenue" value="$45.2k" trend="+24%" trendUp={true} icon={FiTrendingUp} delay={0.1} />
        <StatCard title="Active Nodes" value="842" trend="+14%" trendUp={true} icon={FiUsers} delay={0.2} />
        <StatCard title="Daily Access" value="384" trend="+8%" trendUp={true} icon={FiCheckCircle} delay={0.3} />
        <StatCard title="Overdue Logs" value="$12.4k" trend="-5%" trendUp={false} icon={FiAlertCircle} delay={0.4} />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <motion.div className="xl:col-span-2" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}><Charts /></motion.div>
        <motion.div className="xl:col-span-1" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}><Hologram /></motion.div>
      </div>

      <motion.div className="glass-panel rounded-3xl p-8 border-red-500/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}>
        <div className="flex justify-between items-center mb-8 border-b border-red-500/10 pb-6">
          <div>
            <h3 className="text-xl font-black text-white tracking-[0.2em] uppercase">Network Secure Logs</h3>
            <p className="text-[10px] text-red-500 font-black tracking-[0.3em] uppercase mt-2">Latest Array Output</p>
          </div>
          <button className="text-[10px] font-black text-red-500 hover:text-white uppercase tracking-[0.2em] transition-all hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)] bg-red-500/10 px-4 py-2 rounded-lg border border-red-500/20">Expand Array</button>
        </div>
        
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group relative flex flex-col md:flex-row md:items-center justify-between p-5 rounded-2xl bg-[#050000]/80 border border-red-500/5 hover:border-red-500/30 hover:bg-black/50 transition-all duration-400 overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.3)]">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_15px_rgba(255,0,0,1)]"></div>
              
              <div className="flex items-center gap-6 mb-4 md:mb-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-900/40 to-black border border-red-500/20 flex items-center justify-center text-sm font-black text-white shadow-[0_0_15px_rgba(255,0,0,0.1)] group-hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all">
                  N{i}
                </div>
                <div>
                  <p className="text-sm font-black text-white tracking-widest uppercase">Node {i} Verified</p>
                  <p className="text-[9px] text-gray-500 font-bold uppercase tracking-[0.2em] mt-1.5">T-{i * 12}.00 SECONDS AGO</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-red-500/30 hidden md:block"></div>
                <span className="text-[10px] font-black text-green-400 bg-green-900/10 px-5 py-2 rounded-lg border border-green-500/20 tracking-[0.2em] uppercase shadow-[inset_0_0_10px_rgba(7ade80,0.1)]">GRANTED</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

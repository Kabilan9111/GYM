import { motion } from 'framer-motion';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const dummyData = [{value: 10}, {value: 15}, {value: 8}, {value: 20}, {value: 25}, {value: 18}, {value: 30}];

export default function StatCard({ title, value, trend, icon: Icon, trendUp, data = dummyData, delay = 0 }) {
  return (
    <motion.div 
      className="glass-panel glass-panel-hover p-6 rounded-3xl relative overflow-hidden group"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute -inset-1 bg-gradient-to-b from-red-500/0 via-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-red-600/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-all duration-500"></div>
      
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div>
          <p className="text-gray-400 text-[10px] font-black tracking-[0.2em] uppercase mb-2">{title}</p>
          <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">{value}</h3>
        </div>
        <div className="p-3.5 bg-gradient-to-br from-red-900/40 to-[#050000] rounded-xl border border-red-500/20 shadow-[0_0_15px_rgba(255,0,0,0.1)] group-hover:shadow-[0_0_25px_rgba(255,0,0,0.3)] transition-all">
          <Icon className="text-red-500 text-xl group-hover:drop-shadow-[0_0_10px_rgba(255,0,0,1)] transition-all" />
        </div>
      </div>

      <div className="flex items-center gap-3 mb-2 relative z-10">
        <div className={`flex items-center px-2.5 py-1 rounded-md border ${trendUp ? 'border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10'}`}>
          <span className={`text-[10px] font-black tracking-widest ${trendUp ? 'text-green-400 drop-shadow-[0_0_5px_rgba(7ade80,0.8)]' : 'text-red-400 drop-shadow-[0_0_5px_rgba(248,113,113,0.8)]'}`}>
            {trend}
          </span>
        </div>
        <span className="text-[9px] text-gray-500 font-bold uppercase tracking-[0.2em]">vs cycle</span>
      </div>

      <div className="h-16 w-full -mx-1 mt-4 relative z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id={`grad-${title.replace(/\s+/g,'-')}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ef4444" stopOpacity={0.6}/>
                <stop offset="100%" stopColor="#ef4444" stopOpacity={0}/>
              </linearGradient>
              <filter id="glowStat">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <Area type="monotone" dataKey="value" stroke="#ff2222" strokeWidth={2.5} fill={`url(#grad-${title.replace(/\s+/g,'-')})`} filter="url(#glowStat)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

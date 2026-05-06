import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiTrendingDown, FiActivity, FiDollarSign, FiClock, FiShield, FiTarget, FiCreditCard, FiArrowUpRight, FiZap } from 'react-icons/fi';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const pieData = [
  { name: 'Organic', value: 450, color: '#ff2d2d' },
  { name: 'Referral', value: 250, color: '#f59e0b' },
  { name: 'Social', value: 200, color: '#a855f7' },
  { name: 'Direct', value: 150, color: '#3b82f6' },
];

const mockTransactions = [
  { id: 'TRX-1', user: 'Alex T.', plan: 'Platinum', amount: '₹4,500', status: 'PAID' },
  { id: 'TRX-2', user: 'Sarah C.', plan: 'Gold', amount: '₹3,000', status: 'PENDING' },
  { id: 'TRX-3', user: 'Marcus R.', plan: 'Starter', amount: '₹1,500', status: 'PAID' },
  { id: 'TRX-4', user: 'Emma W.', plan: 'Elite', amount: '₹6,000', status: 'FAILED' },
];

const paymentMethods = [
  { method: 'UPI / Scan', percentage: 65, color: '#ff2d2d', amount: '₹18,492' },
  { method: 'Credit Card', percentage: 20, color: '#a855f7', amount: '₹5,690' },
  { method: 'Net Banking', percentage: 10, color: '#3b82f6', amount: '₹2,845' },
  { method: 'Wallet', percentage: 5, color: '#10b981', amount: '₹1,423' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } }
};

// Top KPI Component
const KPICard = ({ title, value, change, isPositive }) => (
  <motion.div variants={itemVariants} className="flex-1 min-w-[200px] flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-red-500/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-md relative overflow-hidden group hover:border-red-500/30 transition-colors">
    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="flex flex-col relative z-10">
      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">{title}</span>
      <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">{value}</span>
    </div>
    <div className="flex flex-col items-end relative z-10">
      <svg width="40" height="20" viewBox="0 0 40 20" className="mb-1 opacity-50 relative top-1">
        <path d={isPositive ? "M0,15 Q10,15 20,8 T40,2" : "M0,5 Q10,5 20,12 T40,18"} fill="none" stroke={isPositive ? "#ff2d2d" : "#ef4444"} strokeWidth="1.5" strokeLinecap="round" className="drop-shadow-[0_0_3px_rgba(255,45,45,0.8)]" />
      </svg>
      <div className={`text-[11px] font-bold flex items-center gap-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {isPositive ? <FiTrendingUp size={12} /> : <FiTrendingDown size={12} />} {change}
      </div>
    </div>
  </motion.div>
);

export default function Revenue() {
  return (
    <motion.div className="min-h-screen w-full bg-[#05070b] font-sans relative flex flex-col items-center pb-20 text-white overflow-hidden" variants={containerVariants} initial="hidden" animate="show">
      
      {/* Ambient Red Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none -z-10 mix-blend-screen"></div>

      <div className="w-full max-w-[1400px] px-6 lg:px-10 mt-8 flex flex-col gap-10 z-10">
        
        {/* 1. TOP SECTION - KPI STRIP */}
        <div className="w-full">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none w-full">
            <KPICard title="Total Revenue" value="₹1.2M" change="+12%" isPositive={true} />
            <KPICard title="Avg Daily Rev" value="₹42K" change="+5%" isPositive={true} />
            <KPICard title="Today Revenue" value="₹18.5K" change="+8%" isPositive={true} />
            <KPICard title="Pending Payments" value="₹24K" change="-2%" isPositive={false} />
            <KPICard title="Refunds" value="₹3.2K" change="-0.5%" isPositive={false} />
          </div>
        </div>

        {/* 2. MIDDLE SECTION - INSIGHTS GRID (3 COLUMNS) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 h-[280px]">
          
          {/* Left: Donut Chart */}
          <motion.div variants={itemVariants} className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 relative flex flex-col items-center justify-center shadow-lg">
            <h3 className="absolute top-6 left-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Revenue by Source</h3>
            <div className="w-full h-full pt-6 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} innerRadius={65} outerRadius={80} paddingAngle={8} dataKey="value" stroke="none">
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} style={{ filter: `drop-shadow(0 0 8px ${entry.color}80)` }} />
                    ))}
                  </Pie>
                  <Tooltip cursor={false} contentStyle={{ backgroundColor: '#000', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pt-5 pointer-events-none">
                <span className="text-xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">₹1.05M</span>
                <span className="text-[9px] uppercase tracking-widest text-gray-400">Total</span>
              </div>
            </div>
          </motion.div>

          {/* Center: Revenue by Plan (Stacked Platforms) */}
          <motion.div variants={itemVariants} className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 relative flex flex-col items-center justify-end shadow-lg pb-10">
             <h3 className="absolute top-6 left-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Plan Tiers</h3>
             <div className="flex flex-col-reverse items-center justify-end gap-2 mt-12 relative z-10 w-[80%] mx-auto h-[150px]">
                {/* Simulated 3D Platforms */}
                <div className="w-full h-10 border-b border-x border-[#ff2d2d]/30 rounded-[100%] absolute bottom-2 opacity-50 shadow-[0_5px_15px_rgba(255,45,45,0.2)]"></div>
                <div className="w-[90%] h-8 bg-gradient-to-t from-gray-800 to-gray-700/50 rounded-lg flex items-center justify-between px-4 border border-white/10 shadow-[0_-5px_15px_rgba(0,0,0,0.5)] z-40">
                  <span className="text-[10px] font-bold text-gray-400">Starter</span>
                  <span className="text-[11px] font-bold">15%</span>
                </div>
                <div className="w-[85%] h-8 bg-gradient-to-t from-gray-700 to-gray-600/50 rounded-lg flex items-center justify-between px-4 border border-white/10 shadow-[0_-5px_15px_rgba(0,0,0,0.5)] z-30">
                  <span className="text-[10px] font-bold text-gray-300">Silver</span>
                  <span className="text-[11px] font-bold">25%</span>
                </div>
                <div className="w-[75%] h-8 bg-gradient-to-t from-yellow-900/50 to-yellow-800/50 rounded-lg flex items-center justify-between px-4 border border-yellow-500/30 shadow-[0_-5px_20px_rgba(234,179,8,0.15)] z-20">
                  <span className="text-[10px] font-bold text-yellow-500">Gold</span>
                  <span className="text-[11px] font-bold text-yellow-500">40%</span>
                </div>
                <div className="w-[60%] h-8 bg-gradient-to-t from-purple-900/50 to-purple-800/50 rounded-lg flex items-center justify-between px-4 border border-purple-500/40 shadow-[0_-10px_25px_rgba(168,85,247,0.25)] z-10">
                  <span className="text-[10px] font-bold text-purple-400">Platinum</span>
                  <span className="text-[11px] font-bold text-purple-400">20%</span>
                </div>
             </div>
          </motion.div>

          {/* Right: Insights Panel */}
          <motion.div variants={itemVariants} className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 relative flex flex-col shadow-lg justify-between">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-6">Key Insights</h3>
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-4 bg-black/40 p-3 rounded-lg border border-white/[0.03]">
                <div className="bg-yellow-500/20 p-2 rounded-md"><FiTarget className="text-yellow-500" size={16} /></div>
                <div className="flex flex-col flex-1">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400">Top Plan</span>
                  <span className="text-sm font-bold text-white">Gold Tier</span>
                </div>
                <span className="text-xs font-bold text-green-400">40%</span>
              </div>
              
              <div className="flex items-center gap-4 bg-black/40 p-3 rounded-lg border border-white/[0.03]">
                <div className="bg-blue-500/20 p-2 rounded-md"><FiActivity className="text-blue-500" size={16} /></div>
                <div className="flex flex-col flex-1">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400">Peak Day</span>
                  <span className="text-sm font-bold text-white">Thursday</span>
                </div>
                <span className="text-xs font-bold text-white">₹52K</span>
              </div>
              
              <div className="flex items-center gap-4 bg-black/40 p-3 rounded-lg border border-white/[0.03]">
                <div className="bg-green-500/20 p-2 rounded-md"><FiTrendingUp className="text-green-500" size={16} /></div>
                <div className="flex flex-col flex-1">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400">Growth Trend</span>
                  <span className="text-sm font-bold text-white">Upward</span>
                </div>
                <span className="text-xs font-bold text-green-400">+14%</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 3. BOTTOM SECTION - HERO MRR CORE & SIDE PANELS */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_500px_1fr] gap-6 items-center mt-12 relative z-20">
          
          {/* Left Panel: Recent Transactions */}
          <motion.div variants={itemVariants} className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 flex flex-col h-full min-h-[300px]">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-6">Recent Transactions</h3>
            <div className="flex flex-col gap-0 w-full">
              {mockTransactions.map((trx, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-white/[0.02] last:border-0 hover:bg-white/[0.01] px-2 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-300 border border-gray-700">
                      {trx.user.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white">{trx.user}</span>
                      <span className="text-[9px] uppercase tracking-widest text-gray-500">{trx.plan}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-sm font-bold text-white">{trx.amount}</span>
                    <span className={`text-[8px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded-sm ${
                      trx.status === 'PAID' ? 'bg-green-500/10 text-green-400' : 
                      trx.status === 'PENDING' ? 'bg-yellow-500/10 text-yellow-400' : 
                      'bg-red-500/10 text-red-500'}`}>{trx.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Center: HERO MRR CORE */}
          <motion.div variants={itemVariants} className="relative flex items-center justify-center h-[400px]">
            {/* Holographic Reactor Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Outer soft glow base */}
              <div className="absolute w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(255,45,45,0.15)_0%,transparent_70%)] rounded-full mix-blend-screen pointer-events-none -z-10"></div>
              
              {/* Spinning Grid Ring */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute w-[380px] h-[380px] border border-red-500/10 rounded-full opacity-60" style={{ backgroundImage: 'repeating-conic-gradient(from 0deg, transparent 0deg 10deg, rgba(255,45,45,0.05) 10deg 20deg)' }}></motion.div>
              
              {/* Inner Glowing Ring */}
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }} className="absolute w-[300px] h-[300px] rounded-full border-[2px] border-transparent border-t-[#ff2d2d] border-b-[#ff2d2d] shadow-[0_0_40px_rgba(255,45,45,0.4)] opacity-80 mix-blend-screen"></motion.div>
              
              {/* Dashed Tech Ring */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} className="absolute w-[340px] h-[340px] rounded-full border border-dashed border-red-500/20"></motion.div>
            </div>

            {/* Core Payload */}
            <div className="relative z-10 flex flex-col items-center justify-center drop-shadow-[0_0_20px_rgba(0,0,0,1)] bg-black/40 w-[240px] h-[240px] rounded-full backdrop-blur-sm border border-red-500/20 shadow-[inset_0_0_30px_rgba(255,45,45,0.1)]">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500/80 mb-2">MRR</span>
              <h1 className="text-[42px] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 tracking-tighter leading-none mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                ₹28,450
              </h1>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                <FiTrendingUp className="text-green-400" size={12} />
                <span className="text-green-400 text-[11px] font-black tracking-widest">+14.8%</span>
              </div>
            </div>
          </motion.div>

          {/* Right Panel: Payment Methods */}
          <motion.div variants={itemVariants} className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 flex flex-col h-full min-h-[300px]">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-6">Payment Methods</h3>
            <div className="flex flex-col gap-5 w-full mt-2">
              {paymentMethods.map((pm, i) => (
                <div key={i} className="flex flex-col gap-2 w-full">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-300">{pm.method}</span>
                    <span className="text-xs font-bold text-white">{pm.amount}</span>
                  </div>
                  <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden border border-white/[0.02]">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${pm.percentage}%` }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 + (i * 0.1) }}
                      className="h-full rounded-full shadow-[0_0_10px_currentcolor]"
                      style={{ backgroundColor: pm.color, color: pm.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </motion.div>
  );
}
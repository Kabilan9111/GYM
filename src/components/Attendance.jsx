import { motion } from 'framer-motion';
import { FiUsers, FiClock, FiXCircle, FiCheckCircle, FiActivity, FiTrendingUp } from 'react-icons/fi';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const mockActivity = [
  { id: 1, name: 'Alex Thompson', avatar: 'AT', time: 'Just now', status: 'ON_TIME', type: 'in' },
  { id: 2, name: 'Sarah Chen', avatar: 'SC', time: '2 min ago', status: 'LATE', type: 'in' },
  { id: 3, name: 'Marcus Rodriguez', avatar: 'MR', time: '15 min ago', status: 'ON_TIME', type: 'in' },
  { id: 4, name: 'Emma Watson', avatar: 'EW', time: '28 min ago', status: 'ON_TIME', type: 'out' },
  { id: 5, name: 'David Kim', avatar: 'DK', time: '45 min ago', status: 'LATE', type: 'in' },
  { id: 6, name: 'James Wilson', avatar: 'JW', time: '1 hr ago', status: 'MISSED', type: 'none' },
];

const mockActive = [
  { id: 1, name: 'Alex Thompson', avatar: 'AT', duration: '2 min', zone: 'Cardio' },
  { id: 2, name: 'Sarah Chen', avatar: 'SC', duration: '15 min', zone: 'Weights' },
  { id: 3, name: 'Marcus Rodriguez', avatar: 'MR', duration: '45 min', zone: 'CrossFit' },
  { id: 7, name: 'John Davis', avatar: 'JD', duration: '1 hr 10 min', zone: 'Yoga' },
  { id: 8, name: 'Lisa Smith', avatar: 'LS', duration: '1 hr 30 min', zone: 'Cardio' },
];

const chartData = [
  { time: '6AM', count: 12 }, { time: '8AM', count: 45 }, { time: '10AM', count: 30 },
  { time: '12PM', count: 25 }, { time: '2PM', count: 35 }, { time: '4PM', count: 20 },
  { time: '6PM', count: 65 }, { time: '8PM', count: 40 }, { time: '10PM', count: 15 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

const StatCard = ({ title, value, icon: Icon, color, delay }) => (
  <motion.div
    variants={itemVariants}
    className="relative group p-6 rounded-3xl overflow-hidden cursor-default transition-all duration-500 ease-out z-10"
    style={{
      background: `radial-gradient(120% 120% at 50% -10%, rgba(${color}, 0.15) 0%, rgba(${color}, 0.05) 40%, rgba(5,5,5,0.95) 100%)`,
      boxShadow: `0 20px 40px -10px rgba(0,0,0,0.8), 0 10px 30px -15px rgba(${color}, 0.3), inset 0 0 30px rgba(${color}, 0.05), inset 0 1px 0 rgba(255,255,255,0.1), inset 1px 0 0 rgba(255,255,255,0.02), inset -1px 0 0 rgba(255,255,255,0.02)`,
      backdropFilter: 'blur(20px)'
    }}
    whileHover={{ y: -5, boxShadow: `0 30px 60px -15px rgba(0,0,0,0.9), 0 20px 50px -10px rgba(${color}, 0.5), inset 0 0 40px rgba(${color}, 0.15), inset 0 1px 0 rgba(255,255,255,0.2), inset 1px 0 0 rgba(255,255,255,0.05), inset -1px 0 0 rgba(255,255,255,0.05)` }}
  >
    <div className="absolute inset-0 backdrop-blur-2xl rounded-[inherit] -z-10 pointer-events-none"></div>
    <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay -z-10 pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}></div>
    <div className="absolute inset-0 opacity-40 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none -z-10 mix-blend-screen" style={{ background: `radial-gradient(ellipse at top left, rgba(${color}, 0.2) 0%, transparent 70%)` }}></div>
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-white/[0.01] to-transparent opacity-70 group-hover:opacity-100 group-hover:from-white/[0.12] transition-colors duration-500 rounded-[inherit] pointer-events-none -z-10 blur-[2px]"></div>

    <div className="relative z-10 flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: `rgb(${color})`, boxShadow: `0 0 10px rgb(${color})` }}></div>
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{title}</p>
      </div>
      <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 text-gray-300 shadow-[inset_0_2px_15px_rgba(0,0,0,0.5)] group-hover:text-white transition-colors">
        <Icon size={16} />
      </div>
    </div>
    
    <div className="relative z-10 flex items-end gap-3 mt-2">
      <h4 className="text-4xl font-black tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">{value}</h4>
    </div>
  </motion.div>
);

export default function Attendance() {
  return (
    <motion.div 
      className="flex flex-col gap-6 md:gap-8 w-full font-sans pb-20 relative"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-red-600/5 blur-[150px] pointer-events-none z-0 rounded-full"></div>
      
      {/* Header */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 relative z-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_12px_rgba(255,0,0,0.8)] animate-pulse"></div>
            <p className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase">Live Surveillance</p>
          </div>
          <h2 className="text-4xl font-black text-white tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">Attendance Hub</h2>
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full relative z-10">
        <StatCard title="Today's Check-ins" value="284" icon={FiUsers} color="0, 234, 255" />
        <StatCard title="Active Now" value="48" icon={FiActivity} color="255, 45, 45" />
        <StatCard title="Late Arrivals" value="12" icon={FiClock} color="245, 158, 11" />
        <StatCard title="Absent" value="3" icon={FiXCircle} color="168, 85, 247" />
      </div>

      {/* Main Sections */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8 relative z-10">
        
        {/* Center: Live Activity Feed */}
        <div className="xl:col-span-2 flex flex-col gap-6 w-full h-full">
          <motion.div variants={itemVariants} className="relative p-6 rounded-3xl overflow-hidden flex flex-col flex-1 min-h-[500px]" style={{
            background: 'radial-gradient(150% 150% at 50% 0%, rgba(20,20,20,0.4) 0%, rgba(5,5,5,0.95) 100%)',
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1), inset 1px 0 0 rgba(255,255,255,0.02), inset -1px 0 0 rgba(255,255,255,0.02)',
            backdropFilter: 'blur(20px)'
          }}>
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay -z-10 pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}></div>
            
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/5">
              <h3 className="text-white font-black text-lg tracking-wide flex items-center gap-3">
                <FiActivity className="text-red-500" /> Activity Stream
              </h3>
              <div className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-bold tracking-widest uppercase flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(255,0,0,0.8)] animate-pulse"></div> Live
              </div>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 space-y-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full">
              {mockActivity.map((activity, i) => (
                <motion.div 
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-4 rounded-2xl bg-black/40 border border-white/5 hover:bg-black/60 hover:border-white/10 transition-all duration-300 shadow-[inset_0_2px_15px_rgba(0,0,0,0.5)] flex items-center justify-between cursor-default"
                  whileHover={{ y: -2, boxShadow: '0 10px 20px -5px rgba(0,0,0,0.8), inset 0 2px 15px rgba(0,0,0,0.5)' }}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-white/10 group-hover:via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center text-white font-black text-sm shadow-lg relative overflow-hidden group-hover:scale-105 transition-transform">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
                      {activity.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm tracking-wide group-hover:text-red-100 transition-colors">{activity.name}</h4>
                      <p className="text-gray-500 text-[11px] font-semibold mt-0.5">{activity.time}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className={`px-3 py-1.5 rounded-lg border text-[10px] font-bold tracking-widest uppercase shadow-md ${
                      activity.status === 'ON_TIME' ? 'text-green-400 bg-green-500/10 border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]' :
                      activity.status === 'LATE' ? 'text-amber-400 bg-amber-500/10 border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]' :
                      'text-red-400 bg-red-500/10 border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)]'
                    }`}>
                      {activity.status.replace('_', ' ')}
                    </div>
                    {activity.type === 'in' ? (
                      <FiCheckCircle className="text-green-500/60" size={18} />
                    ) : activity.type === 'out' ? (
                      <FiXCircle className="text-red-500/60" size={18} />
                    ) : (
                      <div className="w-[18px]"></div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Bottom: Analytics Trend */}
          <motion.div variants={itemVariants} className="relative p-6 rounded-3xl overflow-hidden h-[300px]" style={{
            background: 'radial-gradient(150% 150% at 50% 0%, rgba(20,20,20,0.4) 0%, rgba(5,5,5,0.95) 100%)',
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1), inset 1px 0 0 rgba(255,255,255,0.02), inset -1px 0 0 rgba(255,255,255,0.02)',
            backdropFilter: 'blur(20px)'
          }}>
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay -z-10 pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}></div>
            
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-black text-base tracking-wide flex items-center gap-3">
                <FiTrendingUp className="text-gray-400" /> Attendance Velocity
              </h3>
            </div>
            
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ff2d2d" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#ff2d2d" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: '#666', fontSize: 10 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#666', fontSize: 10 }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(10,10,10,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.8)' }}
                    itemStyle={{ color: '#fff', fontWeight: 'bold' }}
                  />
                  <Area type="monotone" dataKey="count" stroke="#ff2d2d" strokeWidth={3} fillOpacity={1} fill="url(#colorCount)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Right: Active Members Panel */}
        <motion.div variants={itemVariants} className="relative p-6 rounded-3xl overflow-hidden flex flex-col min-h-[500px]" style={{
          background: 'radial-gradient(150% 150% at 50% 0%, rgba(255,45,45,0.08) 0%, rgba(5,5,5,0.95) 100%)',
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.15), inset 1px 0 0 rgba(255,255,255,0.05), inset -1px 0 0 rgba(255,255,255,0.05)',
          backdropFilter: 'blur(20px)'
        }}>
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay -z-10 pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-50 rounded-[inherit] pointer-events-none -z-10"></div>
          
          <div className="flex flex-col mb-6 pb-6 border-b border-white/10">
            <h3 className="text-white font-black text-lg tracking-wide flex items-center justify-between">
              Facility Presence
              <span className="text-[24px] font-black text-red-500 drop-shadow-[0_0_15px_rgba(255,45,45,0.8)]">48</span>
            </h3>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2">{mockActive.length} displayed</p>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 space-y-3 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full">
            {mockActive.map((member, i) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-3.5 rounded-2xl bg-black/50 border border-white/[0.03] hover:bg-black/70 hover:border-white/10 transition-all duration-300 flex items-center justify-between cursor-pointer"
                whileHover={{ x: -2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-900/40 to-black border border-red-500/30 flex items-center justify-center text-red-50 font-bold text-xs shadow-[0_0_15px_rgba(255,45,45,0.15)] group-hover:border-red-500/50 transition-colors">
                      {member.avatar}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-green-500 border-2 border-black animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                  </div>
                  <div>
                    <h4 className="text-gray-200 font-bold text-xs tracking-wide group-hover:text-white transition-colors">{member.name}</h4>
                    <p className="text-red-400/80 text-[10px] font-bold uppercase mt-0.5">{member.zone}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-[10px] text-gray-500 font-black tracking-widest">{member.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <button className="mt-4 w-full py-3.5 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 transition-colors text-[10px] font-bold tracking-widest uppercase text-gray-300 hover:text-white">
            View Complete Manifest
          </button>
        </motion.div>

      </div>
    </motion.div>
  );
}

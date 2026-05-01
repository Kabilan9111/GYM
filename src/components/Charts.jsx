import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const revenueData = [{name:'M',v:4},{name:'T',v:3},{name:'W',v:7},{name:'T',v:4.5},{name:'F',v:6},{name:'S',v:10},{name:'S',v:8.5}].map(d=>({name:d.name, revenue: parseFloat(d.v)*1000}));
const pieData = [{name:'PRO',value:450},{name:'CORE',value:250},{name:'TRIAL',value:100}];
const COLORS = ['#ef4444', '#7f1d1d', '#450a0a'];

export default function Charts() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 h-full">
      <div className="xl:col-span-2 glass-panel rounded-3xl p-8 flex flex-col relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 via-transparent to-transparent"></div>
        <div className="flex justify-between items-start mb-8 relative z-10">
          <div>
            <h3 className="text-xl font-black text-white tracking-[0.2em] drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] uppercase">Revenue Matrix</h3>
            <p className="text-[10px] text-red-500 font-black tracking-[0.3em] uppercase mt-1">Live Data Stream</p>
          </div>
          <select className="bg-[#050000] border border-red-500/20 text-gray-300 text-[10px] font-bold tracking-widest rounded-lg px-4 py-2 focus:outline-none focus:border-red-500/70 focus:shadow-[0_0_15px_rgba(220,38,38,0.3)] transition-all cursor-pointer">
            <option>CURRENT CYCLE</option>
            <option>LAST CYCLE</option>
          </select>
        </div>
        
        <div className="flex-1 w-full min-h-[320px] relative z-10 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRev2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff0000" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ff0000" stopOpacity={0}/>
                </linearGradient>
                <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,0,0,0.1)" vertical={false} />
              <XAxis dataKey="name" stroke="#555" tick={{fill: '#888', fontSize: 10, fontWeight: 'bold'}} axisLine={false} tickLine={false} dy={10} />
              <YAxis stroke="#555" tick={{fill: '#888', fontSize: 10, fontWeight: 'bold'}} axisLine={false} tickLine={false} tickFormatter={(val) => `$${val/1000}k`} />
              <Tooltip 
                cursor={{ stroke: 'rgba(255,0,0,0.3)', strokeWidth: 2, strokeDasharray: '4 4' }}
                contentStyle={{ backgroundColor: 'rgba(5,0,0,0.95)', borderColor: 'rgba(255,0,0,0.4)', borderRadius: '12px', boxShadow: '0 0 30px rgba(255,0,0,0.3)', color: '#fff', fontWeight: 'bold' }}
                itemStyle={{ color: '#ff4444' }}
              />
              <Area type="monotone" dataKey="revenue" stroke="#ff2222" strokeWidth={4} fillOpacity={1} fill="url(#colorRev2)" filter="url(#neonGlow)" activeDot={{ r: 6, fill: '#fff', stroke: '#ff0000', strokeWidth: 3, filter: 'url(#neonGlow)' }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="xl:col-span-1 glass-panel rounded-3xl p-8 flex flex-col justify-between items-center relative group">
        <div className="w-full relative z-10 text-center mb-4">
          <h3 className="text-xl font-black text-white tracking-[0.2em] uppercase">User Base</h3>
          <p className="text-[10px] text-red-500 font-black tracking-[0.3em] mt-1 relative inline-block">
            TIER DISTRIBUTION
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-red-500/80 to-transparent"></span>
          </p>
        </div>
        
        <div className="w-full h-[240px] relative z-10">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <defs>
                <filter id="pieGlow"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
              </defs>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={70} outerRadius={90} paddingAngle={8} dataKey="value" stroke="rgba(0,0,0,0.8)" strokeWidth={4} cornerRadius={5}>
                {pieData.map((e, i) => <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} filter="url(#pieGlow)" />)}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: 'rgba(5,0,0,0.9)', borderColor: 'rgba(255,0,0,0.3)', borderRadius: '12px' }} itemStyle={{ color: '#fff', fontWeight: 'bold' }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center mt-2 flex flex-col items-center">
              <p className="text-3xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">800</p>
              <p className="text-[9px] text-red-500 uppercase tracking-[0.3em] font-black mt-1">Total</p>
            </div>
          </div>
        </div>

        <div className="w-full mt-6 space-y-3 relative z-10 px-2">
          {pieData.map((item, i) => (
            <div key={i} className="flex justify-between items-center group/item hover:bg-red-900/10 p-2.5 rounded-xl transition-all border border-transparent hover:border-red-500/20">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-[3px] shadow-[0_0_8px_rgba(255,0,0,0.4)]" style={{ backgroundColor: COLORS[i] }}></span>
                <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{item.name}</span>
              </div>
              <span className="text-sm font-black text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

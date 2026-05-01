import { motion } from 'framer-motion';
import { FiHome, FiUsers, FiActivity, FiCreditCard, FiPieChart, FiSettings } from 'react-icons/fi';
import { MdFitnessCenter } from 'react-icons/md';

const navItems = [
  { icon: FiHome, label: 'DASHBOARD', id: 'DASHBOARD' },
  { icon: FiUsers, label: 'MEMBERS', id: 'MEMBERS' },
  { icon: FiActivity, label: 'ATTENDANCE', id: 'ATTENDANCE' },
  { icon: FiCreditCard, label: 'REVENUE', id: 'REVENUE' },
  { icon: FiPieChart, label: 'ANALYTICS', id: 'ANALYTICS' },
  { icon: FiSettings, label: 'SETTINGS', id: 'SETTINGS' },
];

export default function Sidebar({ isOpen, setIsOpen, activeTab, setActiveTab }) {
  return (
    <motion.aside
      className="w-72 glass-panel border-r border-red-900/20 hidden md:flex flex-col z-20 relative rounded-none"
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-red-500/50 to-transparent shadow-[0_0_15px_rgba(255,0,0,0.5)]"></div>

      <div className="p-8 flex items-center gap-4 relative z-10">
        <div className="relative p-2.5 bg-black rounded-xl border border-red-500/30 overflow-hidden group shadow-[0_0_15px_rgba(255,0,0,0.2)]">
          <div className="absolute inset-0 bg-red-500/10 group-hover:bg-red-500/20 transition-colors"></div>
          <MdFitnessCenter className="text-red-500 text-2xl drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] relative z-10" />
        </div>
        <h1 className="text-2xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">FITZONE</h1>
      </div>

      <nav className="flex-1 px-5 py-6 space-y-2 relative z-10">
        {navItems.map((item, index) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={index}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-xl transition-all duration-400 relative overflow-hidden group ${
                isActive 
                  ? 'bg-gradient-to-r from-red-600/10 to-black border border-red-500/30 text-white shadow-[0_0_20px_rgba(255,0,0,0.1)]' 
                  : 'text-gray-400 hover:text-white border border-transparent hover:border-red-500/10 hover:bg-white/5'
              }`}
            >
              {isActive && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500 shadow-[0_0_15px_rgba(255,0,0,1)]"></div>
              )}
              <item.icon className={`text-lg transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-red-400 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]' : ''}`} />
              <span className="font-bold tracking-[0.1em] text-[10px]">{item.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="p-5 relative z-10">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a0000] to-black p-6 border border-red-500/20 group cursor-pointer hover:border-red-500/40 transition-all duration-500 shadow-[0_0_20px_rgba(255,0,0,0.1)] hover:shadow-[0_0_30px_rgba(255,0,0,0.2)]">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition-all duration-500"></div>
          <h3 className="text-white font-black mb-1 text-[11px] tracking-[0.2em] relative z-10">PRO SYSTEM <span className="text-red-500">v2.0</span></h3>
          <p className="text-[10px] text-gray-500 mb-5 leading-relaxed tracking-wider relative z-10">Activate AI neuro-tracking algorithms.</p>
          <button className="w-full py-3 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white text-[10px] font-black rounded-xl transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:shadow-[0_0_25px_rgba(220,38,38,0.6)] uppercase tracking-[0.2em] relative z-10">
            Initialize
          </button>
        </div>
      </div>
    </motion.aside>
  );
}

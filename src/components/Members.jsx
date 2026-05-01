import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiGrid, FiList, FiMaximize, FiSearch, FiRefreshCw } from 'react-icons/fi';
import ToggleSwitch from './members/ToggleSwitch';
import MemberCard from './members/MemberCard';
import MemberTable from './members/MemberTable';
import MemberCarousel from './members/MemberCarousel';
import SummaryCards from './members/SummaryCards';
import PreviewPanel from './members/PreviewPanel';
import CategoryCards from './members/CategoryCards';
import { mockMembers } from './members/mockData';

const viewOptions = [
  { id: 'grid', label: 'Grid', icon: FiGrid },
  { id: 'list', label: 'List', icon: FiList },
  { id: 'slide', label: 'Slide', icon: FiMaximize },
];

const modeOptions = [
  { id: 'pack', label: 'Pack Mode' },
  { id: 'category', label: 'Category Mode' },
];

export default function Members() {
  const [view, setView] = useState('grid');
  const [mode, setMode] = useState('pack');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTier, setFilterTier] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);

  const containerParams = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };

  const filteredMembers = useMemo(() => {
    return mockMembers.filter(m => {
      const matchSearch = String(m.name).toLowerCase().includes(searchQuery.toLowerCase()) || 
                          String(m.email).toLowerCase().includes(searchQuery.toLowerCase()) ||
                          String(m.phone).includes(searchQuery);
      const currentTier = mode === 'pack' ? m.pack : m.category;
      const matchTier = filterTier ? currentTier === filterTier : true;
      const matchStatus = filterStatus ? m.status === filterStatus : true;
      return matchSearch && matchTier && matchStatus;
    });
  }, [searchQuery, filterTier, filterStatus, mode]);

  const resetFilters = () => {
    setSearchQuery(''); setFilterTier(''); setFilterStatus('');
  };

  const tierOptions = mode === 'pack' ? ['Starter', 'Silver', 'Gold', 'Elite', 'Platinum'] : ['Basic', 'Standard', 'Premium'];

  return (
    <motion.div className="flex h-[calc(100vh-80px)] w-full overflow-hidden bg-[#050505] relative font-sans" initial="hidden" animate="show" variants={containerParams}>
      
      {/* Global Backgrounds: Radial center, noise, and red ambient bleed */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{ background: 'radial-gradient(circle at center, rgba(20,20,20,1) 0%, rgba(5,5,5,1) 100%)' }}></div>
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-red-600/5 blur-[150px] pointer-events-none z-0 rounded-full"></div>
      
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}></div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-6 md:p-10 [&::-webkit-scrollbar]:hidden relative z-10 w-full">
        
        {/* Top Header & Settings Toggles */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-8 mb-10 max-w-[1800px] mx-auto relative">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white/70 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
              <p className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase">Directory Operations</p>
            </div>
            <h2 className="text-4xl font-black text-white tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">Access Control</h2>
          </div>

          <div className="flex gap-4 relative z-10 bg-[#080808]/80 p-2.5 rounded-2xl border border-white/5 backdrop-blur-2xl shadow-[0_15px_35px_rgba(0,0,0,0.6),inset_1px_1px_0_rgba(255,255,255,0.05)]">
            <ToggleSwitch options={viewOptions} selected={view} onChange={setView} layoutPrefix="view" />
            <div className="w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent my-1"></div>
            <ToggleSwitch options={modeOptions} selected={mode} onChange={setMode} layoutPrefix="mode" />
          </div>
        </div>

        <div className="max-w-[1800px] mx-auto">
          {/* Summary Cards */}
          <SummaryCards members={mockMembers} mode={mode} />

          {/* Advanced Filter Bar */}
          <motion.div className="bg-gradient-to-r from-[#080808]/90 to-[#050505]/95 backdrop-blur-2xl rounded-2xl p-4 border border-white/5 mb-8 flex flex-col xl:flex-row gap-4 shadow-[0_20px_40px_rgba(0,0,0,0.6),inset_1px_1px_0_rgba(255,255,255,0.05)] z-20 relative">
            <div className="relative w-full xl:w-[400px] group">
              <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-white transition-colors" />
              <input 
                type="text" placeholder="Search records..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#050505] border border-white/5 text-white text-[12px] font-semibold tracking-wide rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-white/20 transition-all placeholder-gray-600 shadow-[inset_0_2px_15px_rgba(0,0,0,0.5)] focus:shadow-[0_0_20px_rgba(255,255,255,0.05),inset_0_2px_15px_rgba(0,0,0,0.5)]"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full xl:w-auto">
              <select value={filterTier} onChange={(e) => setFilterTier(e.target.value)} className="w-full sm:w-48 appearance-none bg-[#050505] border border-white/5 text-gray-300 hover:text-white text-[12px] font-semibold tracking-wide rounded-xl px-5 py-3.5 focus:outline-none focus:border-white/20 transition-all cursor-pointer shadow-[inset_0_2px_15px_rgba(0,0,0,0.5)]">
                <option value="">All {mode === 'pack' ? 'Packs' : 'Categories'}</option>
                {tierOptions.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="w-full sm:w-40 appearance-none bg-[#050505] border border-white/5 text-gray-300 hover:text-white text-[12px] font-semibold tracking-wide rounded-xl px-5 py-3.5 focus:outline-none focus:border-white/20 transition-all cursor-pointer shadow-[inset_0_2px_15px_rgba(0,0,0,0.5)]">
                <option value="">Any Status</option>
                <option value="ACTIVE">Active</option>
                <option value="EXPIRED">Expired</option>
              </select>
              <button onClick={resetFilters} className="bg-[#050505] border border-white/5 hover:bg-white/10 text-gray-400 hover:text-white px-5 py-3.5 rounded-xl flex items-center justify-center transition-all shadow-[inset_0_2px_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <FiRefreshCw size={16}/>
              </button>
            </div>
          </motion.div>

          {/* Content Views */}
          <div className="relative min-h-[400px]">
            {view === 'grid' && (
              <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                {filteredMembers.map(m => (
                  <MemberCard key={m.id} member={m} mode={mode} onClick={() => setSelectedMember(m)} isSelected={selectedMember?.id === m.id} />
                ))}
              </motion.div>
            )}
            {view === 'list' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <MemberTable members={filteredMembers} mode={mode} />
              </motion.div>
            )}
            {view === 'slide' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <MemberCarousel members={filteredMembers} mode={mode} />
              </motion.div>
            )}
          </div>
          
          <div className="mt-8">
            <CategoryCards />
          </div>
        </div>
      </div>

      {/* Right Side Preview Panel */}
      <PreviewPanel member={selectedMember} mode={mode} onClose={() => setSelectedMember(null)} />
    </motion.div>
  );
}

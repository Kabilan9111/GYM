import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiGrid, FiList, FiMaximize, FiSearch, FiRefreshCw, FiSliders } from 'react-icons/fi';
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
    <motion.div className="flex h-[calc(100vh-80px)] w-full overflow-hidden bg-[#050505]" initial="hidden" animate="show" variants={containerParams}>
      
      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-8 [&::-webkit-scrollbar]:hidden relative z-10">
        
        {/* Top Header & Settings Toggles */}
        <div className="flex flex-col 2xl:flex-row justify-between items-start 2xl:items-end gap-10 mb-8 max-w-[1600px] mx-auto">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
              <p className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">System Hierarchy</p>
            </div>
            <h2 className="text-4xl font-bold text-white tracking-tight">Members & Roles</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-6 relative z-10 w-full 2xl:w-auto bg-[#030303]/80 p-3 rounded-3xl border border-white/5 backdrop-blur-xl">
            <ToggleSwitch options={viewOptions} selected={view} onChange={setView} layoutPrefix="view" />
            <div className="w-[1px] bg-white/10 hidden md:block my-2"></div>
            <ToggleSwitch options={modeOptions} selected={mode} onChange={setMode} layoutPrefix="mode" />
          </div>
        </div>

        <div className="max-w-[1600px] mx-auto">
          {/* Summary Cards */}
          <SummaryCards members={mockMembers} mode={mode} />

          {/* Advanced Filter Bar */}
          <motion.div className="bg-[#030303]/80 backdrop-blur-md rounded-2xl p-4 border border-white/5 mb-8 flex flex-col xl:flex-row gap-4 shadow-sm z-20 relative">
            <div className="relative w-full xl:w-[400px] group">
              <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" />
              <input 
                type="text" placeholder="Search records..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black/40 border border-white/5 text-gray-200 text-xs font-medium rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-white/20 transition-all placeholder-gray-600"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full xl:w-auto">
              <select value={filterTier} onChange={(e) => setFilterTier(e.target.value)} className="w-full sm:w-48 appearance-none bg-black/40 border border-white/5 text-gray-300 text-xs font-medium rounded-xl px-5 py-3.5 focus:outline-none focus:border-white/20 transition-all cursor-pointer">
                <option value="">All {mode === 'pack' ? 'Packs' : 'Categories'}</option>
                {tierOptions.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="w-full sm:w-40 appearance-none bg-black/40 border border-white/5 text-gray-300 text-xs font-medium rounded-xl px-5 py-3.5 focus:outline-none focus:border-white/20 transition-all cursor-pointer">
                <option value="">Any Status</option>
                <option value="ACTIVE">Active</option>
                <option value="EXPIRED">Expired</option>
              </select>
              <button onClick={resetFilters} className="bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white px-5 py-3.5 rounded-xl flex items-center justify-center transition-all">
                <FiRefreshCw />
              </button>
            </div>
          </motion.div>

          {/* Content Views */}
          <div className="relative min-h-[400px]">
            {view === 'grid' && (
              <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 col-[1600px] gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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

          <CategoryCards />
        </div>
      </div>

      {/* Right Side Preview Panel */}
      <PreviewPanel member={selectedMember} mode={mode} onClose={() => setSelectedMember(null)} />
    </motion.div>
  );
}

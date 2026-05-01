import { FiSearch, FiBell, FiMenu, FiCrosshair } from 'react-icons/fi';

export default function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="h-24 glass-panel border-b border-red-900/20 border-x-0 border-t-0 flex items-center justify-between px-8 z-30 sticky top-0 rounded-none bg-[#030000]/80">
      <div className="flex items-center gap-6 w-full max-w-2xl">
        <button 
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FiMenu className="text-2xl" />
        </button>
        
        <div className="hidden md:flex bg-black/60 border border-red-500/20 rounded-xl px-5 py-3 w-full focus-within:border-red-500/50 focus-within:shadow-[0_0_20px_rgba(255,0,0,0.15)] transition-all group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
          <FiCrosshair className="text-red-500/50 mr-4 my-auto text-lg group-focus-within:text-red-500 group-focus-within:drop-shadow-[0_0_8px_rgba(255,0,0,1)] transition-all relative z-10" />
          <input 
            type="text"
            placeholder="EXECUTE DIRECTIVE OR SEARCH..."
            className="bg-transparent border-none outline-none text-[10px] font-bold tracking-[0.2em] text-white placeholder-gray-600 w-full relative z-10"
          />
        </div>
      </div>

      <div className="flex items-center gap-8">
        <button className="relative p-2 text-gray-500 hover:text-red-400 transition-colors group">
          <div className="absolute inset-0 bg-red-500/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 pointer-events-none"></div>
          <FiBell className="text-2xl group-hover:drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] transition-all" />
          <span className="absolute top-1.5 right-2 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping"></span>
          <span className="absolute top-1.5 right-2 w-2.5 h-2.5 bg-red-500 rounded-full shadow-[0_0_10px_rgba(255,0,0,1)] border border-black"></span>
        </button>

        <div className="h-10 w-[1px] bg-gradient-to-b from-transparent via-red-500/30 to-transparent"></div>

        <div className="flex items-center gap-4 cursor-pointer group">
          <div className="text-right hidden md:block">
            <p className="text-xs font-black text-white tracking-[0.1em] group-hover:text-red-400 transition-colors drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">SYS_ADMIN</p>
            <p className="text-[9px] text-red-500 font-bold uppercase tracking-[0.2em] mt-1">Lvl 9 Clearance</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 via-red-900 to-black p-[2px] shadow-[0_0_15px_rgba(255,0,0,0.3)] group-hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] transition-all relative overflow-hidden">
            <div className="w-full h-full rounded-[10px] bg-[#050000] flex items-center justify-center border border-red-500/30 overflow-hidden relative z-10">
              <span className="text-sm font-black text-white drop-shadow-[0_0_8px_rgba(255,255,255,1)] relative z-10">SA</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

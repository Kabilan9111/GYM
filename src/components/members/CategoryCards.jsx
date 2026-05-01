import { motion } from 'framer-motion';

export default function CategoryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-10">
      {['Network Health', 'Retention Rate', 'Compute Load'].map((title, i) => (
        <div key={title} className="p-6 rounded-3xl bg-[#050505]/60 border border-white/5 flex flex-col relative overflow-hidden group hover:border-white/10 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-t from-white/[0.02] to-transparent pointer-events-none"></div>
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{title}</p>
          <div className="flex items-end gap-3 mt-4">
            <h5 className="text-2xl font-bold text-white">{[98.4, 94.2, 42.1][i]}<span className="text-sm text-gray-500 ml-1">%</span></h5>
            <span className="text-[10px] text-green-400 font-bold tracking-widest uppercase mb-1">+{Math.random().toFixed(1)}%</span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full mt-4 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-gray-600 to-white rounded-full" style={{ width: `${Math.random() * 40 + 40}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  );
}

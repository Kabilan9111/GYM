import { motion } from 'framer-motion';
import { getTierDetails } from './utils';
import { FiEdit2, FiTrash2, FiMoreVertical } from 'react-icons/fi';

export default function MemberTable({ members, mode }) {
  return (
    <motion.div className="glass-panel text-white rounded-3xl border border-red-500/20 shadow-[0_15px_50px_rgba(0,0,0,0.6)] overflow-hidden relative z-10 w-full">
      <div className="overflow-x-auto w-full">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b border-red-500/30 bg-black/80 backdrop-blur-xl">
              <th className="px-6 py-5 text-[9px] font-black text-red-500 tracking-[0.3em] uppercase">Subject Data</th>
              <th className="px-6 py-5 text-[9px] font-black text-red-500 tracking-[0.3em] uppercase">Comms Link</th>
              <th className="px-6 py-5 text-[9px] font-black text-red-500 tracking-[0.3em] uppercase">Auth Tier</th>
              <th className="px-6 py-5 text-[9px] font-black text-red-500 tracking-[0.3em] uppercase">Init Date</th>
              <th className="px-6 py-5 text-[9px] font-black text-red-500 tracking-[0.3em] uppercase">Node Status</th>
              <th className="px-6 py-5 text-[9px] font-black text-red-500 tracking-[0.3em] uppercase text-right">Overrides</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => {
              const { tier, isPremium, colorClass } = getTierDetails(mode, member);
              return (
                <tr key={member.id} className={`border-b border-red-500/10 transition-all duration-400 group relative ${isPremium ? 'bg-gradient-to-r from-red-900/20 via-transparent to-transparent hover:bg-gradient-to-r hover:from-red-900/30 hover:to-red-900/5' : 'hover:bg-[#050000]'}`}>
                  {isPremium && (
                    <td className="absolute left-0 top-0 bottom-0 w-[3px] bg-red-500 shadow-[0_0_20px_rgba(255,0,0,1)] z-10"></td>
                  )}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center text-sm font-black border transition-all duration-500 ${isPremium ? 'bg-gradient-to-br from-red-600 to-black text-white shadow-[0_0_20px_rgba(255,0,0,0.6)] border-red-400' : 'bg-black border-red-500/20 text-white group-hover:border-red-500/50'}`}>
                        {member.avatar}
                      </div>
                      <div>
                        <div className={`text-sm font-black tracking-widest uppercase ${isPremium ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' : 'text-gray-200 group-hover:text-white transition-colors'}`}>{member.name}</div>
                        <div className="text-[9px] text-red-500/60 font-black tracking-[0.2em] mt-1 uppercase">{member.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="text-[10px] font-black text-gray-400 tracking-widest uppercase group-hover:text-gray-200 transition-colors">{member.email}</div>
                    <div className="text-[10px] text-gray-600 font-bold tracking-widest mt-1.5">{member.phone}</div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`text-[9px] font-black tracking-[0.2em] uppercase px-3 py-1.5 rounded-lg border inline-block ${colorClass}`}>
                      {tier}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-[11px] font-black text-gray-500 tracking-widest uppercase">{member.joinDate}</td>
                  <td className="px-6 py-5">
                    <span className={`text-[9px] font-black tracking-[0.2em] uppercase px-3 py-1.5 rounded-lg border ${
                      member.status === 'ACTIVE' 
                        ? 'text-green-400 border-green-500/30 bg-green-500/10 shadow-[inset_0_0_10px_rgba(7ade80,0.1)]'
                        : 'text-red-400 border-red-500/30 bg-red-500/10 shadow-[inset_0_0_10px_rgba(248,113,113,0.2)]'
                    }`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="p-2.5 rounded-xl hover:bg-black border border-transparent hover:border-gray-800 text-gray-400 hover:text-white transition-all shadow-sm"><FiEdit2 size={14}/></button>
                      <button className="p-2.5 rounded-xl hover:bg-red-900/30 border border-transparent hover:border-red-500/40 text-gray-400 hover:text-red-500 transition-all shadow-sm"><FiTrash2 size={14}/></button>
                      <button className="p-2.5 rounded-xl hover:bg-black border border-transparent hover:border-gray-800 text-gray-400 hover:text-white transition-all shadow-sm"><FiMoreVertical size={14}/></button>
                    </div>
                  </td>
                </tr>
              )
            })}
            {members.length === 0 && (
              <tr>
                <td colSpan="6" className="px-6 py-16 text-center text-red-500/50 font-black tracking-[0.3em] uppercase bg-black/20">
                  <span className="animate-pulse">Awaiting Query... Zero Nodes Detected.</span>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

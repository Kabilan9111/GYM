import { motion } from 'framer-motion';

export default function SummaryCards({ members, mode }) {
  const packs = [
    { label: 'Starter', color: 'cyan' },
    { label: 'Silver', color: 'blue' },
    { label: 'Gold', color: 'yellow' },
    { label: 'Elite', color: 'purple' },
    { label: 'Platinum', color: 'red' }
  ];
  
  const categories = [
    { label: 'Basic', color: 'cyan' },
    { label: 'Standard', color: 'blue' },
    { label: 'Premium', color: 'red' }
  ];

  const tiers = mode === 'pack' ? packs : categories;

  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 ${mode === 'pack' ? 'lg:grid-cols-5' : 'lg:grid-cols-3'} gap-4 w-full mb-8 z-10 relative`}>
      {tiers.map((tier, i) => {
        const count = members.filter(m => (mode === 'pack' ? m.pack : m.category) === tier.label).length;
        const cClass = `text-${tier.color}-400`;
        const bClass = `border-${tier.color}-500/20`;
        const bgClass = `bg-${tier.color}-500/5`;
        const glow = `shadow-[0_0_15px_rgba(var(--tw-color-${tier.color}-500),0.1)]`;

        return (
          <motion.div 
            key={tier.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`p-5 rounded-2xl bg-[#050505]/80 backdrop-blur-sm border ${bClass} ${bgClass} hover:bg-white/[0.02] transition-colors overflow-hidden relative`}
          >
            <div className={`absolute -right-4 -top-4 w-20 h-20 bg-${tier.color}-500/10 rounded-full blur-[20px] pointer-events-none`}></div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">{tier.label} Accounts</p>
            <h4 className={`text-3xl font-black ${cClass}`}>{count}</h4>
          </motion.div>
        )
      })}
    </div>
  );
}

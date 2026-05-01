import { motion } from 'framer-motion';

export default function ToggleSwitch({ options, selected, onChange, layoutPrefix }) {
  return (
    <div className="flex p-1.5 rounded-2xl bg-[#050000] border border-gray-800/80 backdrop-blur-md relative z-10 shadow-[inset_0_2px_15px_rgba(0,0,0,0.8)]">
      {options.map(opt => {
        const isActive = selected === opt.id;
        return (
          <button
            key={opt.id}
            onClick={() => onChange(opt.id)}
            className={`relative px-4 sm:px-6 py-2.5 text-[10px] font-black tracking-[0.2em] uppercase transition-colors z-10 flex items-center justify-center gap-2 w-full ${isActive ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
          >
            {isActive && (
              <motion.div
                layoutId={`toggle-bg-${layoutPrefix}`}
                className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-red-900/10 border border-red-500/50 rounded-[10px] shadow-[0_0_15px_rgba(255,0,0,0.3)] pointer-events-none"
                initial={false}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            {opt.icon && <opt.icon className={`text-sm z-10 relative ${isActive ? 'text-red-500 drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]' : ''}`} />}
            <span className="z-10 relative">{opt.label}</span>
          </button>
        )
      })}
    </div>
  );
}

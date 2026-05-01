export const getTierDetails = (mode, member) => {
  const tier = mode === 'pack' ? member.pack : member.category;
  const isPlatinum = (mode === 'pack' && tier === 'Platinum') || (mode === 'category' && tier === 'Premium');
  
  const colors = {
    Starter: { color: 'cyan', text: 'text-cyan-400', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', glow: 'shadow-[0_0_15px_rgba(6,182,212,0.15)]', hoverGlow: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]', gradient: 'from-cyan-900/20' },
    Silver: { color: 'blue', text: 'text-blue-400', border: 'border-blue-500/30', bg: 'bg-blue-500/10', glow: 'shadow-[0_0_15px_rgba(59,130,246,0.15)]', hoverGlow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]', gradient: 'from-blue-900/20' },
    Gold: { color: 'yellow', text: 'text-yellow-400', border: 'border-yellow-500/40', bg: 'bg-yellow-500/10', glow: 'shadow-[0_0_15px_rgba(234,179,8,0.2)]', hoverGlow: 'hover:shadow-[0_0_30px_rgba(234,179,8,0.4)]', gradient: 'from-yellow-900/20' },
    Elite: { color: 'purple', text: 'text-purple-400', border: 'border-purple-500/40', bg: 'bg-purple-500/10', glow: 'shadow-[0_0_15px_rgba(168,85,247,0.2)]', hoverGlow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]', gradient: 'from-purple-900/20' },
    Platinum: { color: 'red', text: 'text-red-500', border: 'border-red-500/50', bg: 'bg-red-500/20', glow: 'shadow-[0_0_20px_rgba(255,0,0,0.3)]', hoverGlow: 'hover:shadow-[0_0_40px_rgba(255,0,0,0.5)]', gradient: 'from-red-900/40' },
    Basic: { color: 'cyan', text: 'text-cyan-400', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', glow: 'shadow-[0_0_15px_rgba(6,182,212,0.15)]', hoverGlow: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]', gradient: 'from-cyan-900/20' },
    Standard: { color: 'blue', text: 'text-blue-400', border: 'border-blue-500/30', bg: 'bg-blue-500/10', glow: 'shadow-[0_0_15px_rgba(59,130,246,0.15)]', hoverGlow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]', gradient: 'from-blue-900/20' },
    Premium: { color: 'red', text: 'text-red-500', border: 'border-red-500/50', bg: 'bg-red-500/20', glow: 'shadow-[0_0_20px_rgba(255,0,0,0.3)]', hoverGlow: 'hover:shadow-[0_0_40px_rgba(255,0,0,0.5)]', gradient: 'from-red-900/40' }
  };
  
  return { tier, isPlatinum, styles: colors[tier] || colors.Starter };
};

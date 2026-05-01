export const getTierDetails = (mode, member) => {
  const tier = mode === 'pack' ? member.pack : member.category;
  const isPlatinum = (mode === 'pack' && tier === 'Platinum') || (mode === 'category' && tier === 'Premium');
  
  const colors = {
    Starter: { hex: '#00eaff', rgb: '0, 234, 255', text: 'text-[#00eaff]', bg: 'bg-[#00eaff]/10' },
    Silver: { hex: '#3b82f6', rgb: '59, 130, 246', text: 'text-[#3b82f6]', bg: 'bg-[#3b82f6]/10' },
    Gold: { hex: '#f59e0b', rgb: '245, 158, 11', text: 'text-[#f59e0b]', bg: 'bg-[#f59e0b]/10' },
    Elite: { hex: '#a855f7', rgb: '168, 85, 247', text: 'text-[#a855f7]', bg: 'bg-[#a855f7]/10' },
    Platinum: { hex: '#ff2d2d', rgb: '255, 45, 45', text: 'text-[#ff2d2d]', bg: 'bg-[#ff2d2d]/10' }
  };
  
  colors.Basic = colors.Starter;
  colors.Standard = colors.Silver;
  colors.Premium = colors.Platinum;
  
  return { tier, isPlatinum, styles: colors[tier] || colors.Starter };
};

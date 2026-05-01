import { motion } from 'framer-motion';
import MemberCard from './MemberCard';

export default function MemberCarousel({ members, mode }) {
  return (
    <div className="relative w-full overflow-hidden py-10 -my-10 z-10 group">
      {/* Edge Fades for deep depth */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#030000] to-transparent z-20 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#030000] to-transparent z-20 pointer-events-none"></div>

      <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-10 px-[10vw] [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {members.map(member => (
          <div key={member.id} className="snap-center shrink-0 w-[350px] md:w-[450px]">
            <MemberCard member={member} mode={mode} />
          </div>
        ))}
        {members.length === 0 && (
          <div className="w-full text-center text-red-500/50 py-16 font-black tracking-[0.3em] uppercase">DATASTREAM EMPTY.</div>
        )}
      </div>
    </div>
  );
}

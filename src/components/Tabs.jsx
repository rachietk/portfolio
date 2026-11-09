import { motion } from 'framer-motion';
export default function Tabs({ id, items, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-0.5 rounded-lg border border-line bg-chip p-0.5">
      {items.map(([k, label]) => (
        <button key={k} onClick={() => onChange(k)} className={`relative rounded-md px-2.5 py-1 text-[11px] transition-colors duration-300 ${value === k ? 'text-bg' : 'text-mute hover:text-ink'}`}>
          {value === k && <motion.span layoutId={id} className="absolute inset-0 rounded-md bg-ink" transition={{ type: 'spring', stiffness: 420, damping: 34 }} />}
          <span className="relative">{label}</span>
        </button>
      ))}
    </div>
  );
}

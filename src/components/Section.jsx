import { motion, useReducedMotion } from 'framer-motion';
export default function Section({ id, title, hint, right, children }) {
  const rm = useReducedMotion();
  return (
    <motion.section id={id} initial={rm ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className="border-t border-line px-6 py-8">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <h2 className="font-serif text-[26px] leading-none tracking-tight">{title}{hint && <span className="ml-2 font-sans text-xs text-mute">{hint}</span>}</h2>
        {right}
      </div>
      {children}
    </motion.section>
  );
}

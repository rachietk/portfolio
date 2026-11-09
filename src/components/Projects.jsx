import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import Section from './Section';
import { projects } from '../data';

/* Card for one project. Fill the `projects` array in src/data.js (a commented template is there). */
function Card({ p, i }) {
  return (
    <motion.article initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06, duration: .45 }} whileHover={{ y: -3 }}
      className="group flex flex-col gap-3 rounded-xl border border-line bg-panel p-4 transition-colors duration-300 hover:border-accent">
      <h3 className="text-[13.5px] font-semibold">{p.title}</h3>
      <p className="text-xs leading-relaxed text-mute">{p.description}</p>
      <div className="flex flex-wrap gap-1">{p.skills?.map(s => <i key={s} className="rounded border border-line bg-chip px-1.5 py-0.5 font-mono text-[10px] not-italic text-mute transition-colors group-hover:text-ink">{s}</i>)}</div>
      <div className="mt-auto flex gap-4 pt-1 text-xs">
        {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="group/l inline-flex items-center gap-1 text-mute transition-colors hover:text-ink">Live demo <ArrowUpRight size={12} className="transition-transform duration-200 group-hover/l:translate-x-0.5 group-hover/l:-translate-y-0.5" /></a>}
        {p.code && <a href={p.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-mute transition-colors hover:text-ink"><FaGithub size={13} />Code</a>}
      </div>
    </motion.article>
  );
}
export default function Projects() {
  return (
    <Section id="projects" title="Projects" hint="things I’ve built">
      {projects.length ? <div className="grid gap-3 sm:grid-cols-2">{projects.map((p, i) => <Card key={p.title} p={p} i={i} />)}</div>
        : <div className="rounded-xl border border-dashed border-line px-4 py-8 text-center text-xs text-mute">New projects are on the way.</div>}
    </Section>
  );
}

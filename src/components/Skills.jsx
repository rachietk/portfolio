import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Section from './Section';
import Tabs from './Tabs';
import { skills } from '../data';
const tabs = [['all', 'All'], ['lang', 'Languages'], ['front', 'Frameworks'], ['db', 'Database'], ['tools', 'Tools']];
export default function Skills() {
  const [f, setF] = useState('all');
  const list = skills.filter(s => f === 'all' || s[1] === f);
  return (
    <Section id="skills" title="Skills" hint="which I use / know how to google" right={<Tabs id="skill-tab" items={tabs} value={f} onChange={setF} />}>
      <p className="-mt-1 mb-4 text-[12.5px] text-mute">Technologies I’ve learned and worked with. The list keeps growing as I do.</p>
      <motion.div layout className="flex flex-wrap gap-2">
        <AnimatePresence mode="popLayout">
          {list.map(([name, , icon, mono], i) => (
            <motion.span layout key={name} initial={{ opacity: 0, y: 8, scale: .94 }} animate={{ opacity: 1, y: 0, scale: 1, transition: { delay: i * .035 } }} exit={{ opacity: 0, scale: .9 }} whileHover={{ y: -2, scale: 1.04 }}
              className="inline-flex cursor-default items-center gap-2 rounded-lg border border-line bg-panel px-3 py-1.5 text-xs font-medium transition-colors duration-200 hover:border-accent">
              <img src={icon} alt="" className={`h-4 w-4 object-contain ${mono ? 'mono-icon' : ''}`} />{name}
            </motion.span>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

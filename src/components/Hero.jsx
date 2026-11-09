import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile, profileImg } from '../data';
export default function Hero() {
  const [r, setR] = useState(0);
  useEffect(() => { const t = setInterval(() => setR(x => (x + 1) % profile.roles.length), 3500); return () => clearInterval(t); }, []);
  return (
    <header className="flex flex-wrap items-center gap-4 px-6 py-6">
      <motion.a href="https://github.com/rachitk29" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05, rotate: -2 }} transition={{ type: 'spring', stiffness: 300, damping: 18 }}
        className="h-20 w-20 flex-none overflow-hidden rounded-full"><img src={profileImg} alt="Rachit" className="h-full w-full object-cover" /></motion.a>
      <div>
        <h1 className="font-serif text-[24px] leading-none tracking-tight">{profile.name}</h1>
        <div className="mt-2 h-4 overflow-hidden font-mono text-xs text-mute"><motion.div key={r} initial={{ y: 14, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .4 }}>{profile.roles[r]}</motion.div></div>
        <div className="mt-1.5 flex items-center gap-3 text-[11px] text-mute"><span className="flex items-center gap-1.5"><i className="h-[7px] w-[7px] rounded-full bg-ok" />Open to work</span><span>India</span></div>
      </div>
      <a href="#contact" className="group inline-flex items-center gap-1.5 rounded-lg bg-ink px-3.5 py-2 text-xs font-medium text-bg transition-transform duration-200 hover:-translate-y-0.5 sm:ml-auto">
        Hire me <ArrowUpRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
    </header>
  );
}

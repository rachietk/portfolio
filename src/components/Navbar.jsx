import { motion } from 'framer-motion';
import { Moon, Search, Sun } from 'lucide-react';
import { SECTIONS, useActive, useTheme } from '../hooks';
const nav = [['top', 'Home'], ['projects', 'Projects'], ['experience', 'Experience'], ['contact', 'Contact']];
export default function Navbar({ onSearch }) {
  const active = useActive();
  const { theme, toggle } = useTheme();
  const cur = nav.map(n => n[0]).filter(id => SECTIONS.indexOf(id) <= SECTIONS.indexOf(active)).pop() || 'top';
  const btn = 'rounded-md p-1.5 text-mute transition-colors duration-200 hover:bg-chip hover:text-ink';
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-line bg-bg/80 px-5 py-3 backdrop-blur-md">
      <a href="#top" className="font-serif text-xl leading-none tracking-tight">Rachit</a>
      <ul className="flex items-center gap-1">
        {nav.map(([id, label]) => (
          <li key={id} className="max-sm:[&:nth-child(n+3)]:hidden">
            <a href={`#${id}`} className={`relative block px-2.5 py-1 text-xs transition-colors duration-200 hover:text-ink ${cur === id ? 'text-ink' : 'text-mute'}`}>
              {label}
              {cur === id && <motion.span layoutId="nav-underline" className="absolute inset-x-2 -bottom-0.5 h-px bg-ink" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />}
            </a>
          </li>
        ))}
        <li><button onClick={onSearch} aria-label="Search (Ctrl K)" className={btn}><Search size={14} /></button></li>
        <li><button onClick={toggle} aria-label="Toggle theme" className={btn}>{theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}</button></li>
      </ul>
    </nav>
  );
}

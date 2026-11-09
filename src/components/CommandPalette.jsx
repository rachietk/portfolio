import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useTheme } from '../hooks';
import { RESUME_URL, GITHUB_USER, profile } from '../data';

export default function CommandPalette({ open, onClose }) {
  const [q, setQ] = useState('');
  const { toggle } = useTheme();
  const go = id => () => { location.hash = id; };
  const items = [
    ['Go to Home', 'Intro', go('top')], ['Go to About', 'Who I am', go('about')], ['Go to Contact', 'Find me online', go('contact')],
    ['Go to Projects', 'Things I build', go('projects')], ['Go to Experience', 'Work history', go('experience')], ['Go to Education', 'Where I studied', go('education')],
    ['Go to Skills', 'Tools I use', go('skills')], ['Go to GitHub activity', 'Contribution graph', go('activity')], ['Go to Writing', 'Blog posts', go('writing')],
    ['Toggle theme', 'Dark / light', toggle], ['Open GitHub', `@${GITHUB_USER}`, () => window.open(`https://github.com/${GITHUB_USER}`, '_blank')],
    ['Send an email', profile.email, () => { location.href = `mailto:${profile.email}`; }], ['Open resume', 'Opens in a new tab', () => window.open(RESUME_URL, '_blank')],
  ].filter(i => (i[0] + i[1]).toLowerCase().includes(q.toLowerCase()));
  const run = it => { onClose(); setTimeout(it[2], 60); };
  useEffect(() => { if (open) setQ(''); }, [open]);
  useEffect(() => { const k = e => e.key === 'Escape' && onClose(); addEventListener('keydown', k); return () => removeEventListener('keydown', k); }, [onClose]);
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/50 p-4 pt-[14vh] backdrop-blur-sm" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div onClick={e => e.stopPropagation()} initial={{ opacity: 0, y: -10, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -6, scale: .98 }} transition={{ duration: .2 }}
            className="w-full max-w-md overflow-hidden rounded-xl border border-line bg-panel shadow-2xl" role="dialog" aria-label="Command palette">
            <div className="flex items-center gap-2 border-b border-line px-4"><Search size={14} className="text-mute" />
              <input autoFocus value={q} onChange={e => setQ(e.target.value)} onKeyDown={e => e.key === 'Enter' && items[0] && run(items[0])} placeholder="Search pages and actions…" className="w-full bg-transparent py-3.5 text-[13px] outline-none placeholder:text-mute" /></div>
            <ul className="max-h-[320px] overflow-auto p-1.5">
              {items.length ? items.map(it => (
                <li key={it[0]}><button onClick={() => run(it)} className="flex w-full flex-col rounded-lg px-3 py-2 text-left text-[12.5px] transition-colors hover:bg-chip focus:bg-chip focus:outline-none">{it[0]}<small className="text-[11px] text-mute">{it[1]}</small></button></li>
              )) : <li className="px-3 py-4 text-xs text-mute">No matches. Try “skills” or “email”.</li>}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

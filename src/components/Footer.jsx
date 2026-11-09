import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Check, Fingerprint } from 'lucide-react';
import { profile } from '../data';
const quotes = [['Programs must be written for people to read, and only incidentally for machines to execute.', 'Harold Abelson'], ['Make it work, make it right, make it fast.', 'Kent Beck'], ['The best way to predict the future is to invent it.', 'Alan Kay']];
export default function Footer() {
  const [now, setNow] = useState(new Date());
  const [q] = useState(() => quotes[Math.floor(Math.random() * quotes.length)]);
  const [left, setLeft] = useState(() => { try { return localStorage.getItem('thumb') === '1'; } catch { return false; } });
  useEffect(() => { const t = setInterval(() => setNow(new Date()), 1000); return () => clearInterval(t); }, []);
  const time = now.toLocaleTimeString('en-IN', { timeZone: profile.timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const thumb = () => { setLeft(true); try { localStorage.setItem('thumb', '1'); } catch { /* ignore */ } };
  return (
    <footer id="end" className="border-t border-line px-6 pb-10 pt-14 text-center">
      <h2 className="font-serif text-[28px] leading-none tracking-tight">Scrolled too far</h2>
      <p className="mx-auto mb-5 mt-2 max-w-xs text-xs text-mute">If you’ve read this far, you might be interested in collaborating or building something great.</p>
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        <a href={`mailto:${profile.email}`} className="group inline-flex items-center gap-1.5 rounded-lg bg-ink px-3.5 py-2 text-xs font-medium text-bg transition-transform duration-200 hover:-translate-y-0.5">
          Let’s talk <ArrowUpRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
        <button onClick={thumb} disabled={left} className="relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border border-line bg-panel px-3.5 py-2 text-xs text-mute transition-colors duration-200 enabled:hover:border-accent enabled:hover:text-ink">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span key={left ? 'done' : 'idle'} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} transition={{ duration: .2 }} className="inline-flex items-center gap-1.5">
              {left ? <><Check size={13} className="text-ok" />Thumbprint left</> : <><Fingerprint size={13} />Leave your thumbprint</>}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>
      <p className="mx-auto mb-2 mt-14 max-w-[440px] font-serif text-[22px] italic leading-snug">“{q[0]}”</p>
      <p className="font-mono text-[10px] uppercase tracking-widest text-mute">— {q[1]}</p>
      <p className="mt-12 text-[11px] leading-relaxed text-mute">Designed &amp; developed by <b className="font-medium text-ink">{profile.name}</b><br />© {now.getFullYear()} · All rights reserved<br />
        <span className="mt-1 inline-flex items-center gap-1.5"><i className="h-[7px] w-[7px] animate-pulse rounded-full bg-ok" />{profile.location} · {time}</span></p>
    </footer>
  );
}

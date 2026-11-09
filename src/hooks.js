import { useEffect, useState, useSyncExternalStore } from 'react';

export const SECTIONS = ['top', 'about', 'contact', 'projects', 'experience', 'education', 'skills', 'activity', 'writing'];

export function useActive() {
  const [active, setActive] = useState('top');
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-40% 0px -55% 0px' });
    SECTIONS.forEach(id => { const el = document.getElementById(id); el && io.observe(el); });
    return () => io.disconnect();
  }, []);
  return active;
}

/* theme store shared by the navbar and the command palette */
const listeners = new Set();
const read = () => document.documentElement.dataset.theme || 'dark';
export function useTheme() {
  const theme = useSyncExternalStore(cb => { listeners.add(cb); return () => listeners.delete(cb); }, read, () => 'dark');
  const toggle = e => {
    const next = read() === 'dark' ? 'light' : 'dark';
    const apply = () => {
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch { /* ignore */ }
      listeners.forEach(l => l());
    };
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!document.startViewTransition || reduce) {
      const root = document.documentElement;
      root.classList.add('theme-anim'); apply(); setTimeout(() => root.classList.remove('theme-anim'), 500); return;
    }
    const x = e?.clientX ?? innerWidth / 2, y = e?.clientY ?? 0;
    const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    document.startViewTransition(apply).ready.then(() =>
      document.documentElement.animate({ clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: 650, easing: 'cubic-bezier(.4,0,.2,1)', pseudoElement: '::view-transition-new(root)' }));
  };
  return { theme, toggle };
}

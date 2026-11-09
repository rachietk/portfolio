import { useEffect, useState } from 'react';
import { BANNERS } from '../data';

const TEXT = '$ whoami\nrachit katariya — full stack developer\n$ cat now.txt\nassociate analyst @ highspring · mca @ iet lucknow\n$ ls skills/\nreact  typescript  tailwind  mongodb  mysql';
function TerminalBanner() {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(TEXT.length); return; }
    const t = setInterval(() => setN(x => (x >= TEXT.length + 60 ? 0 : x + 1)), 38);
    return () => clearInterval(t);
  }, []);
  const lines = TEXT.slice(0, n).split('\n');
  return (
    <div className="h-full bg-panel p-4 font-mono text-[11.5px] leading-6">
      <div className="mb-2 flex gap-1.5">{[0, 1, 2].map(i => <i key={i} className="h-2 w-2 rounded-full bg-line" />)}</div>
      {lines.map((l, i) => <div key={i} className={l.startsWith('$') ? 'text-accent' : 'text-mute'}>{l}{i === lines.length - 1 && <span className="cursor" />}</div>)}
    </div>
  );
}
export default function Banner() {
  const n = BANNERS.length;
  const [i, setI] = useState(0);
  const [hover, setHover] = useState(false);
  useEffect(() => {
    if (n < 2 || hover) return;
    const t = setInterval(() => setI(x => (x + 1) % n), 5000);
    return () => clearInterval(t);
  }, [n, hover]);
  return (
    <div className="relative h-[150px] overflow-hidden border-b border-line" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {n === 0 ? <TerminalBanner /> : (
        <div className="flex h-full transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${i * 100}%)` }}>
          {BANNERS.map(src => <img key={src} src={src} alt="Banner" className="h-full w-full flex-none object-cover" />)}
        </div>
      )}
      {n > 1 && (
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
          {BANNERS.map((_, k) => <button key={k} aria-label={`Slide ${k + 1}`} onClick={() => setI(k)} className={`h-1.5 rounded-full bg-white transition-all duration-300 ${k === i ? 'w-[18px]' : 'w-1.5 opacity-50'}`} />)}
        </div>
      )}
    </div>
  );
}

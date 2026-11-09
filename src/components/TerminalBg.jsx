import { useEffect, useState } from 'react';
const LEFT = ['$ git clone portfolio', 'Cloning into ‘portfolio’… done', '$ npm install', 'added 218 packages in 4s', '$ npm run dev', 'VITE ready in 312 ms', 'Local: http://localhost:5173', '$ whoami', 'rachit katariya', '$ echo $STATUS', 'open to work'];
const RIGHT = ['$ git log --oneline -3', 'a1f9c2e feat: terminal background', '7d3b0a4 feat: theme transition', 'e92c611 chore: first commit', '$ npm run build', '✓ 214 modules transformed', 'dist/index.html  0.9 kB', '✓ built in 1.8s', '$ vercel --prod', 'Production: ready ✓'];

function Pane({ script, style, fade }) {
  const [lines, setLines] = useState([]);
  const [typing, setTyping] = useState('');
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { setLines(script.slice(0, 9)); return; }
    let i = 0, c = 0, t;
    const step = () => {
      const line = script[i % script.length], cmd = line.startsWith('$');
      if (c < line.length) { c++; setTyping(line.slice(0, c)); t = setTimeout(step, cmd ? 55 : 14); }
      else { setLines(l => [...l.slice(-9), line]); setTyping(''); c = 0; i++; t = setTimeout(step, cmd ? 450 : 260); }
    };
    step();
    return () => clearTimeout(t);
  }, [script]);
  const row = (l, k) => <div key={k} className={`truncate ${l.startsWith('$') ? 'text-accent' : 'text-mute'}`}>{l || '\u00a0'}</div>;
  return (
    <div aria-hidden className="pointer-events-none fixed hidden select-none font-mono text-[11px] leading-5 opacity-60 min-[1300px]:block" style={{ ...style, maskImage: `linear-gradient(${fade}, #000 45%, transparent)`, WebkitMaskImage: `linear-gradient(${fade}, #000 45%, transparent)` }}>
      {lines.map(row)}
      <div className={`truncate ${typing.startsWith('$') || !typing ? 'text-accent' : 'text-mute'}`}>{typing}<span className="cursor" /></div>
    </div>
  );
}
export default function TerminalBg() {
  const w = 'min(320px, calc(50vw - 340px - 110px))';
  return (
    <>
      <Pane script={LEFT} fade="to top" style={{ right: 'calc(50% + 340px + 72px)', bottom: 40, width: w }} />
      <Pane script={RIGHT} fade="to bottom" style={{ left: 'calc(50% + 340px + 72px)', top: 96, width: w }} />
    </>
  );
}

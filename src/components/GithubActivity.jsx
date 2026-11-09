import { useEffect, useMemo, useState } from 'react';
import Section from './Section';
import { GITHUB_USER } from '../data';
const M = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function sample() { // shown only when GitHub can't be reached
  let s = 11; const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;
  const out = [], d = new Date(); d.setDate(d.getDate() - 364);
  for (let i = 0; i < 365; i++, d.setDate(d.getDate() + 1)) out.push({ date: d.toISOString().slice(0, 10), count: rnd() < .5 ? Math.floor(rnd() * rnd() * 12) : 0 });
  return out;
}
const lvl = n => (n === 0 ? 0 : n < 3 ? 1 : n < 6 ? 2 : n < 9 ? 3 : 4);
export default function GithubActivity() {
  const [days, setDays] = useState(null);
  const [live, setLive] = useState(true);
  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`).then(r => (r.ok ? r.json() : Promise.reject()))
      .then(j => setDays(j.contributions)).catch(() => { setDays(sample()); setLive(false); });
  }, []);
  const { cells, months, total } = useMemo(() => {
    if (!days) return { cells: [], months: [], total: 0 };
    const lead = new Date(days[0].date + 'T00:00:00').getDay();
    const months = []; let last = -1;
    days.forEach((d, i) => { const m = new Date(d.date + 'T00:00:00').getMonth(); if (m !== last && ((i + lead) % 7 === 0 || i === 0)) { last = m; months.push([Math.floor((i + lead) / 7), M[m]]); } });
    return { cells: [...Array(lead).fill(null), ...days], months, total: days.reduce((a, d) => a + d.count, 0) };
  }, [days]);
  return (
    <Section id="activity" title="GitHub activity" right={<a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noopener noreferrer" className="font-mono text-[10.5px] text-mute transition-colors hover:text-ink">@{GITHUB_USER} ↗</a>}>
      {!days ? <div className="h-[100px] animate-pulse rounded-lg bg-chip" /> : (
        <>
          <div className="overflow-x-auto pb-1.5">
            <div className="relative h-3.5 min-w-max font-mono text-[10px] text-mute">{months.map(([w, m]) => <span key={w + m} className="absolute top-0" style={{ left: w * 13 }}>{m}</span>)}</div>
            <div className="mt-1 grid min-w-max auto-cols-[10px] grid-flow-col grid-rows-7 gap-[3px]">
              {cells.map((d, i) => d ? (
                <i key={d.date} title={`${d.count} contribution${d.count === 1 ? '' : 's'} on ${d.date}`} className={`block h-2.5 w-2.5 rounded-sm transition-transform duration-150 hover:scale-150 ${lvl(d.count) ? 'lv' + lvl(d.count) : 'bg-chip'}`}
                  style={{ animation: 'cell .5s cubic-bezier(.2,.8,.2,1) both', animationDelay: `${Math.floor(i / 7) * 14 + (i % 7) * 18}ms` }} />
              ) : <i key={'x' + i} />)}
            </div>
          </div>
          <div className="mt-2.5 flex flex-wrap items-center justify-between gap-3 font-mono text-[10.5px] text-mute">
            <span>{total} contributions in the last year{live ? '' : ' (sample data, could not reach GitHub)'}</span>
            <span className="flex items-center gap-1">Less {[0, 1, 2, 3, 4].map(l => <i key={l} className={`mx-px h-2.5 w-2.5 rounded-sm ${l ? 'lv' + l : 'bg-chip'}`} />)} More</span>
          </div>
        </>
      )}
    </Section>
  );
}

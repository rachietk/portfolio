import Section from './Section';
import { education, experience } from '../data';
const Row = ({ title, sub, note, when }) => (
  <div className="-mx-3 mb-2 flex flex-col justify-between gap-1 rounded-lg px-3 py-2.5 transition-colors duration-200 last:mb-0 hover:bg-chip sm:flex-row sm:gap-3">
    <div><h3 className="text-[13.5px] font-semibold">{title}</h3><p className="mt-1 text-[12.5px] leading-relaxed text-mute">{sub}{note && <><br />{note}</>}</p></div>
    <time className="whitespace-nowrap font-mono text-[10.5px] text-mute">{when}</time>
  </div>
);
export function Experience() {
  return <Section id="experience" title="Experience" hint="here is my work experience">{experience.map(e => <Row key={e.company} title={e.company} sub={e.role} note={e.place} when={e.when} />)}</Section>;
}
export function Education() {
  return <Section id="education" title="Education">{education.map(e => <Row key={e.school} title={e.school} sub={e.degree} when={e.when} />)}</Section>;
}

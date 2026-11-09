import Section from './Section';
import { profile } from '../data';
const B = ({ children }) => <b className="font-medium text-ink">{children}</b>;
export default function About() {
  return (
    <Section id="about" title="About">
      <div className="space-y-3 text-mute">
        <p>I’m <B>Rachit</B>, a 20yo developer living in Meerut, India. I love to code and make (<B>break</B>) things.</p>
        <p>I love both <B>Development</B> &amp; <B>Design</B>. So yes, I can make things look good and actually work. When I’m <B>not busy</B>, you’ll usually find me watching movies or web shows, listening to music, playing cricket, or just catching up on some much needed sleep.</p>
        <p>okay let’s be real, I’m always chasing new things to learn, new problems to solve, and if I’m lucky maybe one day my parents will finally understand <B>what I actually do!</B></p>
      </div>
      <div className="mt-5 rounded-xl border border-line bg-panel p-4 font-mono text-[11px] leading-8 transition-colors duration-200 hover:border-mute">
        <b className="mb-1 block font-medium">Developer snapshot</b>
        <div className="grid gap-x-4 sm:grid-cols-2">{profile.snapshot.map(s => <span key={s} className="flex items-center gap-2 text-mute"><i className="h-1.5 w-1.5 rounded-full bg-ok" />{s}</span>)}</div>
      </div>
    </Section>
  );
}

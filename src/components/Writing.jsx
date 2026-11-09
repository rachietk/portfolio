import { ArrowUpRight } from 'lucide-react';
import Section from './Section';
import { blogs } from '../data';
export default function Writing() {
  return (
    <Section id="writing" title="Writing" hint="blogs I’ve written">
      <div className="space-y-2.5">
        {blogs.map(b => (
          <a key={b.href} href={b.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-3 rounded-xl border border-line px-4 py-3 text-[13px] text-mute transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-panel hover:text-ink">
            <span>{b.title}</span><ArrowUpRight size={15} className="flex-none transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        ))}
      </div>
    </Section>
  );
}

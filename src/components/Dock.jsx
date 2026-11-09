import { Activity, Briefcase, Code2, FolderOpen, GraduationCap, Home, Mail, PenLine, User } from 'lucide-react';
import { useActive } from '../hooks';
const items = [['top', 'Home', Home], ['about', 'About', User], ['contact', 'Contact', Mail], ['projects', 'Projects', FolderOpen], ['experience', 'Experience', Briefcase], ['education', 'Education', GraduationCap], ['skills', 'Skills', Code2], ['activity', 'Activity', Activity], ['writing', 'Writing', PenLine]];
export default function Dock() {
  const active = useActive();
  return (
    <div className="fixed top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-1.5 min-[1100px]:flex" style={{ left: 'calc(50% + 340px + 12px)' }}>
      {items.map(([id, label, Icon]) => (
        <a key={id} href={`#${id}`} aria-label={label} className={`group relative grid h-[30px] w-[30px] place-items-center rounded-lg border transition-all duration-200 ${active === id ? 'border-line bg-chip text-ink' : 'border-transparent text-mute hover:bg-chip hover:text-ink'}`}>
          <Icon size={14} />
          <span className="pointer-events-none absolute left-[38px] -translate-x-1 whitespace-nowrap rounded-md bg-ink px-2 py-0.5 text-[11px] font-medium text-bg opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100">{label}</span>
        </a>
      ))}
    </div>
  );
}

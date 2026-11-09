import { useEffect, useState } from 'react';
import TerminalBg from './components/TerminalBg';
import HireMe from './components/HireMe';
import Dock from './components/Dock';
import Navbar from './components/Navbar';
import CommandPalette from './components/CommandPalette';
import Banner from './components/Banner';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { Education, Experience } from './components/Experience';
import Skills from './components/Skills';
import GithubActivity from './components/GithubActivity';
import Writing from './components/Writing';
import Footer from './components/Footer';

export default function App() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const k = e => { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setOpen(o => !o); } };
    addEventListener('keydown', k); return () => removeEventListener('keydown', k);
  }, []);
  return (
    <>
      <TerminalBg /><HireMe /><Dock />
      <main id="top" className="mx-auto min-h-screen max-w-[680px] border-x border-line bg-bg">
        <Navbar onSearch={() => setOpen(true)} /><Banner /><Hero /><About /><Contact /><Projects />
        <Experience /><Education /><Skills /><GithubActivity /><Writing /><Footer />
      </main>
      <CommandPalette open={open} onClose={() => setOpen(false)} />
    </>
  );
}

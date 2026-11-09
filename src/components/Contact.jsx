import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaFileAlt, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Section from './Section';
import { socials } from '../data';
const icons = { mail: FaEnvelope, twitter: FaTwitter, github: FaGithub, linkedin: FaLinkedin, instagram: FaInstagram, resume: FaFileAlt };
export default function Contact() {
  return (
    <Section id="contact" title="Contact" hint="where to find me (digitally)">
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {socials.map(s => { const I = icons[s.id]; return (
          <motion.a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 400, damping: 24 }}
            className="group flex items-center justify-between rounded-xl border border-line bg-panel px-3 py-2.5 text-xs text-mute transition-colors duration-200 hover:border-accent hover:text-ink">
            <span className="flex items-center gap-2"><I size={13} />{s.label}</span>
            <ArrowUpRight size={12} className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
          </motion.a>); })}
      </div>
      <p className="mt-5 text-xs text-mute">Capturing photographs or scribbling a few poems…{' '}
        <a href="https://www.instagram.com/rachitkframes/" target="_blank" rel="noopener noreferrer" className="text-accent underline-offset-4 hover:underline">click me to see</a></p>
    </Section>
  );
}

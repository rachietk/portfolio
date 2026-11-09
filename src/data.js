import cIcon from './assets/skills/c.svg';
import cppIcon from './assets/skills/cpp.svg';
import htmlIcon from './assets/skills/html.svg';
import cssIcon from './assets/skills/css.svg';
import jsIcon from './assets/skills/javascript.svg';
import tsIcon from './assets/skills/typescript.svg';
import reactIcon from './assets/skills/reactjs.svg';
import tailwindIcon from './assets/skills/tailwind.svg';
import mysqlIcon from './assets/skills/mysql.svg';
import mongoIcon from './assets/skills/mongodb.svg';
import gitIcon from './assets/skills/git.svg';
import githubIcon from './assets/skills/github2.svg';
import vscodeIcon from './assets/skills/vscode.svg';
import vercelIcon from './assets/skills/vercel.svg';
import postmanIcon from './assets/skills/postman.svg';
import profileImg from './assets/profile.png';

export { profileImg };
export const RESUME_URL = import.meta.env.VITE_RESUME_URL || '#'; // set VITE_RESUME_URL in .env
export const GITHUB_USER = 'rachitk29';
export const BANNERS = []; // e.g. ['/banners/1.jpg']. Empty = animated terminal banner. 1 image = static, 2+ = slider every 5s.

export const profile = {
  name: 'Rachit Katariya', location: 'Meerut (UP), India', timeZone: 'Asia/Kolkata', email: 'rachitkumar2953@gmail.com',
  roles: ['Full Stack Developer', 'Associate Analyst @ Highspring', 'MCA Student'],
  snapshot: ['Building full-stack products', 'Exploring backend engineering', 'Building AI-powered apps', 'Learning system design'],
};

export const socials = [
  { id: 'mail', label: 'Email Me', href: `mailto:${profile.email}` },
  { id: 'twitter', label: 'Twitter', href: 'https://twitter.com/rachitk29' },
  { id: 'github', label: 'GitHub', href: 'https://github.com/rachitk29' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/rachitk29/' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/rachitk.29/' },
  { id: 'resume', label: 'Resume', href: RESUME_URL },
];

/* ───────────── PROJECTS ─────────────
   Add a project by copying the template below, removing the comment markers and filling it in.

   {
     title: 'Project name',
     description: 'One or two short lines: what it does and why it is useful.',
     skills: ['React', 'Tailwind CSS', 'Node.js'],            // tech used
     demo: 'https://your-project.vercel.app',                  // live demo (optional)
     code: 'https://github.com/rachitk29/your-repo',          // source code (optional)
   },
*/
export const projects = [];

export const experience = [
  { company: 'Highspring India', role: 'Associate Analyst @Highspring (Google xWF & Walmart)', place: 'Meerut · Hybrid', when: 'Sep 2025 – Sep 2026' },
];
export const education = [
  { school: 'Institute of Engineering and Technology, Lucknow', degree: 'MCA', when: '2026 – Present' },
  { school: 'Dewan Institute of Management Studies', degree: 'BCA', when: '2022 – 2025' },
];
// [name, category, icon, mono (white icon that needs inverting in light mode)]
export const skills = [
  ['C', 'lang', cIcon], ['C++', 'lang', cppIcon], ['HTML', 'lang', htmlIcon], ['CSS', 'lang', cssIcon], ['JavaScript', 'lang', jsIcon], ['TypeScript', 'lang', tsIcon],
  ['React', 'front', reactIcon], ['Tailwind CSS', 'front', tailwindIcon],
  ['MySQL', 'db', mysqlIcon], ['MongoDB', 'db', mongoIcon],
  ['Git', 'tools', gitIcon], ['GitHub', 'tools', githubIcon, true], ['VS Code', 'tools', vscodeIcon], ['Vercel', 'tools', vercelIcon, true], ['Postman', 'tools', postmanIcon],
];
export const blogs = [
  { title: 'Dangerous site on Github Pages', href: 'https://medium.com/@rachitk29/dangerous-site-on-git-pages-d81d119fe796' },
  { title: 'Discrimination in the 21st Century: A Harsh Truth We Still Ignore', href: 'https://rachitk29.medium.com/discrimination-in-the-21st-century-a-harsh-truth-we-still-ignore-8730c007de0a' },
];

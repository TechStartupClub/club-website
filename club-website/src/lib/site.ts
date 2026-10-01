export const DISCORD_INVITE_CODE = 'TvS2tvAb2h';
export const DISCORD_URL = `https://discord.gg/${DISCORD_INVITE_CODE}`;
export const GITHUB_URL = 'https://github.com/TechStartupClub';

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#members', label: 'Members' },
  { href: '#faq', label: 'FAQ' },
];

export interface Member {
  name: string;
  role: string;
  company: string;
  quote?: string;
}

export const MEMBERS: Member[] = [
  {
    name: 'Celestin Ryf',
    role: 'SWE Intern',
    company: 'UiPath',
    quote:
      'Having this experience has helped me strengthen my resume to the point that recruiters now message me directly for positions.',
  },
  { name: 'Matthew Francini', role: 'SWE', company: 'Stoke Space' },
  {
    name: 'Nicholas Jordan',
    role: 'SWE Intern',
    company: 'Atlassian',
    quote:
      'It’s easy to use the club as a talking point in any interview or screening. Recruiters love it!',
  },
  {
    name: 'Jacob Klymenko',
    role: 'SWE',
    company: 'Junt Industries',
    quote:
      'Leading the Backend team for 2 quarters helped me develop my leadership skills, but also learn and practice new languages, frameworks, and other tools.',
  },
  { name: 'Thien Tran', role: 'Product Design', company: 'Typeface' },
  {
    name: 'Quienten Miller',
    role: 'SWE',
    company: 'Stoke Space',
    quote:
      'Being able to get real experience while on my job search post graduation is one of the biggest reasons I was able to land my full-time role.',
  },
];

// The "Members now at" bar: spotlight companies plus others members work at.
export const MEMBER_COMPANIES = [
  ...new Set([
    ...MEMBERS.map((member) => member.company),
    'King County',
    'FAST Enterprises',
    'Expedia',
    'Amazon',
    'LTM',
    'Adobe',
  ]),
];

export interface Project {
  name: string;
  when: string;
  status?: string;
  blurb: string;
  tags: string[];
  href?: string;
  linkLabel?: string;
}

export const PROJECTS: Project[] = [
  {
    name: 'SETlib',
    when: '2025 – now',
    status: 'In development',
    blurb:
      'A worksheet creation and storage tool built for the SET CSS facilitators at UW Tacoma. Our longest-running project, and one with a real client on campus.',
    tags: ['TypeScript', 'Go', 'PostgreSQL', 'Docker'],
  },
  {
    name: 'UMarket',
    when: '2025',
    blurb:
      'A marketplace where UW students buy and sell secondhand stuff, from dorm furniture to laptops.',
    tags: ['TypeScript', 'Docker'],
    href: 'https://github.com/TechStartupClub/UMarket',
  },
  {
    name: 'UWealth',
    when: '2024 – 25',
    blurb:
      'A stock and crypto tracker with live charts, analyst recommendations, and personal watchlists. Built by a team of eight.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    href: 'https://github.com/TechStartupClub/UWealth',
  },
  {
    name: 'UHackathon',
    when: '2025 – 26',
    blurb:
      'UW Tacoma’s hackathon, which we organize alongside other student clubs. The first one, in May 2025, drew more than 100 competitors, and it came back in May 2026.',
    tags: ['Hackathon', '100+ competitors', 'Two years running'],
    href: 'https://uhackathon-8rth.vercel.app',
    linkLabel: 'Visit the site',
  },
];

export const PILLARS = [
  {
    title: 'Build in teams',
    body: 'Members split into frontend, backend, and design teams and build one product together, from the first commit to the deploy.',
  },
  {
    title: 'Work for real users',
    body: 'Our projects are for people outside the club: tools for UW Tacoma staff, apps for fellow students, and work for small companies and non-profits.',
  },
  {
    title: 'Leave with proof',
    body: 'You walk away with shipped work, teammates who can vouch for you, and something concrete to talk about in interviews.',
  },
];

export const JOIN_STEPS = [
  {
    title: 'Join the Discord',
    body: 'It takes ten seconds. Everything the club does runs through the server.',
  },
  {
    title: 'Say hi',
    body: 'Introduce yourself and watch the announcements for meeting times and project kickoffs.',
  },
  {
    title: 'Pick a team',
    body: 'Jump on a project as a developer or designer and start building.',
  },
];

export const FAQ = [
  {
    q: 'Do I need experience to join?',
    a: 'No. Everyone is welcome, whether you have shipped apps before or are just starting out. You learn by building with a team.',
  },
  {
    q: 'Is it only for computer science majors?',
    a: 'No. Projects need designers and communicators as much as programmers. Our members have gone into product design and communications as well as software engineering.',
  },
  {
    q: 'When and where do you meet?',
    a: 'We post meeting times and locations in Discord. Join the server and check the announcements.',
  },
  {
    q: 'How do I get on a project?',
    a: 'Join the Discord and introduce yourself. That is where teams form and where new projects get announced.',
  },
];

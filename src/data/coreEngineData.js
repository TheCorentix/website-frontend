// Content source for the /core-engine page.
// Replace these placeholder names, roles, and bios with your real people.

export const CORE_STATS = [
  { value: '4', label: 'Core Team' },
  { value: '3+', label: 'Years Combined' },
  { value: '20+', label: 'Projects Shipped' },
  { value: '5', label: 'Disciplines' },
];

export const VISION_MISSION = [
  {
    icon: 'compass',
    title: 'Our Vision',
    text: 'To become the engine behind the next generation of digital-first businesses — building the brands, products, and systems that define how modern companies operate and grow.',
  },
  {
    icon: 'target',
    title: 'Our Mission',
    text: 'We combine engineering, design, and growth strategy into one team, so founders get a single, accountable partner who ships fast without cutting corners.',
  },
];

// TEAM[0] is treated as the founder and gets the large hero card.
// The rest render as compact rows in the right-hand column.
export const TEAM = [
  {
    name: 'Arjun Mehta',
    role: 'Founder & CEO',
    bio: 'Leads product vision, client strategy, and overall direction across every engagement — the single point of accountability for every project that ships.',
    quote: 'We don\u2019t hand clients off between teams. One founder-led unit, start to finish.',
    focus: 'Product & Strategy',
    years: '6+ yrs',
    location: 'Remote / Global',
  },
  {
    name: 'Rohan Iyer',
    role: 'Head of Engineering',
    bio: 'Owns technical architecture, code quality, and delivery across all builds.',
    focus: 'Architecture & Delivery',
    years: '5+ yrs',
    location: 'Remote',
  },
  {
    name: 'Sanya Kapoor',
    role: 'Head of Design',
    bio: 'Drives UI/UX systems, brand identity, and creative direction across projects.',
    focus: 'UI/UX & Brand',
    years: '4+ yrs',
    location: 'Remote',
  },
  {
    name: 'Devika Rao',
    role: 'Head of Growth',
    bio: 'Runs performance marketing, SEO, and automation systems for client growth.',
    focus: 'Growth & Automation',
    years: '3+ yrs',
    location: 'Remote',
  },
];

// Ties the team directly to the delivery pipeline — one named owner per stage.
export const PROCESS_OWNERS = [
  {
    n: '01',
    title: 'Discover',
    desc: 'Goals, timeline, and budget mapped before a single line of code is written.',
    owner: 'Founder & CEO',
  },
  {
    n: '02',
    title: 'Design',
    desc: 'UI systems and brand direction locked in with clear, reviewable milestones.',
    owner: 'Head of Design',
  },
  {
    n: '03',
    title: 'Build',
    desc: 'Iterative sprints with architecture, code quality, and delivery fully owned.',
    owner: 'Head of Engineering',
  },
  {
    n: '04',
    title: 'Grow',
    desc: 'Performance marketing and automation kick in the moment you launch.',
    owner: 'Head of Growth',
  },
];

export const CTA_INFO = {
  email: 'corentixlabs@gmail.com',
  responseTime: 'Reply within 24h',
  availability: '2 project slots open for Q1',
};

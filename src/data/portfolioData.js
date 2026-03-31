export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

export const stats = [
  { label: 'Years of Experience', value: '2+' },
  { label: 'Production Projects', value: '14+' },
  { label: 'Core Technologies', value: '12+' },
  { label: 'Avg Lighthouse Score', value: '92+' }
];

export const companyLogos = ['Enigmatix', 'SaaS Product Team', 'E-Commerce Client', 'B2B Dashboard'];

export const skillGroups = [
  {
    title: 'Frontend',
    description: 'Building performant, scalable interfaces.',
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS']
  },
  {
    title: 'State Management',
    description: 'Predictable state and async data handling.',
    skills: ['MobX', 'React Query', 'Context API']
  },
  {
    title: 'Tools',
    description: 'Reliable workflows and integrations.',
    skills: ['Git', 'Firebase', 'Cloudinary', 'Vite']
  },
  {
    title: 'Bonus',
    description: 'Cross-platform UI delivery.',
    skills: ['React Native']
  }
];

export const projects = [
  {
    title: 'Bitemate Ordering Platform',
    category: 'Food-Tech',
    problem: 'The product had slow menus and low mobile conversion during checkout.',
    solution:
      'Rebuilt UI flows with React components, optimized render paths, and introduced API caching for faster menu interactions.',
    impact: 'Reduced first interaction delay by 38% and improved mobile checkout completion by 21%.',
    stack: ['React', 'JavaScript', 'React Query', 'Tailwind CSS'],
    imageAlt: 'Bitemate dashboard and ordering interface preview',
    demo: 'https://example.com/demo-bitemate',
    repo: 'https://github.com/example/bitemate',
    badge: 'Performance'
  },
  {
    title: 'Office Management Suite',
    category: 'Enterprise',
    problem: 'Operations teams struggled with fragmented workflows and unreadable tables on small screens.',
    solution:
      'Designed responsive data views, reusable table components, and role-based dashboard widgets connected to REST APIs.',
    impact: 'Cut manual task time by 30% and reduced support tickets tied to UI confusion.',
    stack: ['React', 'CSS', 'REST API', 'MobX'],
    imageAlt: 'Office management admin panel with analytics cards',
    demo: 'https://example.com/demo-oms',
    repo: 'https://github.com/example/oms',
    badge: 'UX Upgrade'
  },
  {
    title: 'LinkGraph Marketing SaaS',
    category: 'SaaS',
    problem: 'Legacy frontend had frequent state bugs and inconsistent behavior across breakpoints.',
    solution:
      'Debugged state race conditions, modularized shared components, and improved responsive layout rules with media-query audits.',
    impact: 'Resolved 40+ reported bugs and improved feature release speed by 25%.',
    stack: ['React', 'MobX', 'TypeScript', 'SCSS'],
    imageAlt: 'LinkGraph analytics and campaign UI screens',
    demo: 'https://example.com/demo-linkgraph',
    repo: 'https://github.com/example/linkgraph',
    badge: 'Debugging'
  },
  {
    title: 'SAMS Asset Management',
    category: 'B2B',
    problem: 'Asset teams needed a faster way to track inventory movement and status updates.',
    solution:
      'Implemented React Query data syncing, reusable status modules, and optimized list rendering for large datasets.',
    impact: 'Improved dashboard load performance by 34% and increased data update accuracy.',
    stack: ['React', 'React Query', 'Tailwind CSS', 'Firebase'],
    imageAlt: 'Asset management system inventory and activity timeline',
    demo: 'https://example.com/demo-sams',
    repo: 'https://github.com/example/sams',
    badge: 'Data Flow'
  }
];

export const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Enigmatix PVT LTD',
    duration: 'Mar 2024 - Present',
    points: [
      'Fixed critical production bugs and reduced UI regression issues by building reusable component patterns.',
      'Built responsive interfaces using CSS, Tailwind, and media-query strategies across desktop, tablet, and mobile.',
      'Integrated APIs with React Query and MobX to deliver predictable async data flows and reliable state updates.',
      'Partnered with backend and QA teams to ship features faster while maintaining accessibility and performance standards.'
    ]
  },
  {
    role: 'BS Computer Science',
    company: 'Islamia University of Bahawalpur',
    duration: '2022 - Expected 2026',
    points: [
      'Applied software engineering fundamentals directly to production-grade product work.',
      'Strengthened problem-solving through algorithmic thinking, debugging practice, and architecture-focused coursework.'
    ]
  }
];

export const testimonials = [
  {
    quote:
      'Salman consistently turned rough product ideas into polished frontend experiences with measurable results and very low rework.',
    name: 'Product Manager',
    title: 'Enigmatix PVT LTD'
  },
  {
    quote:
      'Strong ownership, clean React structure, and excellent debugging discipline. He improved delivery speed while improving quality.',
    name: 'Tech Lead',
    title: 'SaaS Project Team'
  }
];

export const contacts = {
  email: 'salmanmalikwork@gmail.com',
  linkedin: 'https://www.linkedin.com/in/salmanmalik409/',
  github: 'https://github.com/salmanmalik',
  phone: '+92 304 5255409',
  location: 'Bahawalpur, Pakistan (Open to Remote)'
};

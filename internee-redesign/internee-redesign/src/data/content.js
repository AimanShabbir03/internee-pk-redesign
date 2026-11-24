import { Hammer, BadgeCheck, Workflow, Route, Upload, Coins, UserRound, Share2, Mic, MessageSquareText, Users, BarChart3, FileText, Mail, ClipboardCheck, TrendingUp, Compass, Target, Code2, Megaphone, Palette, GraduationCap, Award, Sparkles, Briefcase, LineChart } from 'lucide-react';

export const SITE = 'https://www.internee.pk';
export const SIGN_IN = '/sign-in';
export const LEARN = '/apply-instructor';

export const routes = [
  { path: '/task-portal', section: 'task', label: 'Task Portal' },
  { path: '/instructors', section: 'instructor', label: 'Instructor Portal' },
  { path: '/career-growth', section: 'career', label: 'Career Growth' },
  { path: '/ai-interview', section: 'interview', label: 'AI Mock Interview' },
  { path: '/ai-career-coach', section: 'coach', label: 'AI Career Coach' },
];

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Internships', to: '/internship' },
  { label: 'Programs', menu: [['Task Portal', '/task-portal'], ['Instructor Portal', '/instructors'], ['Career Growth', '/career-growth'], ['How It Works', '/#how']] },
  { label: 'AI Tools', menu: [['AI Mock Interview', '/ai-interview'], ['AI Career Coach', '/ai-career-coach']] },
  { label: 'More', menu: [['Graduate Program', '/graduate-program'], ['Student Ambassador', '/student-ambassador'], ['Startup Journey', '/startup-journey'], ['Partner With Us', '/partner-with-us'], ['Blog', '/blog'], ['Webinars', '/webinars']] },
  { label: 'Job Portal', to: '/jobs' },
  { label: 'Contact', to: '/contact' },
];

// Public partner logos hosted on the official site.
export const partners = [['Cloud', 'cloud.png'], ['See', 'see.png'], ['Collaborator', 'collab%201.png'], ['Partner', 'logo1%201.png'], ['NICs', 'nics.png'], ['PITB', 'pitb.png']]
  .map(([n, f]) => ({ name: n, src: `${SITE}/internee-pics/${f}` }));

import tracksJson from './tracks.json';
import { iconMap } from './icons.js';
export const categories = tracksJson.map((t) => ({ ...t, icon: iconMap[t.icon] }));

export const sections = {
  task: {
    id: 'portal', tag: 'Task Management Platform', title: 'Turn learning into proof with the Task Portal',
    text: 'Complete real tasks, get structured feedback and build a portfolio employers can trust. Every milestone moves you closer to job-ready.',
    cta: { label: 'Start your journey', href: SIGN_IN },
    items: [
      { icon: Hammer, title: 'Hands-on industry projects', text: 'Practice with projects that mirror real workflows.', list: ['Project-based learning', 'Industry-standard practices', 'Portfolio building'] },
      { icon: BadgeCheck, title: 'Skill verification system', text: 'Each finished task adds verified proof to your profile.', list: ['Skill verification', 'Progress tracking', 'Achievement badges'] },
      { icon: Workflow, title: 'SDLC through real tasks', text: 'Experience the full software development life cycle through structured milestones.' },
      { icon: Route, title: 'Guided learning path', text: 'A structured path for both beginners and advanced learners.' },
    ],
  },
  instructor: {
    id: 'instructors', alt: true, tag: 'Instructor Portal', title: 'Tech instructor or content creator?',
    text: 'Create in your own language, reach more learners and earn from your expertise.',
    cta: { label: 'Start teaching today', href: LEARN },
    pills: ['Upload content', 'Earn income', 'Grow profile', 'Reach learners'],
    items: [
      { icon: Upload, title: 'Upload tutorials & exercises', text: 'Share tutorials, exercises and projects with the community.' },
      { icon: Coins, title: 'Earn from your expertise', text: 'Turn what you know into income by sharing it.' },
      { icon: UserRound, title: 'Build your instructor profile', text: 'Grow a trusted personal brand in online learning.' },
      { icon: Share2, title: 'Fair revenue sharing', text: 'A transparent model so instructors are rewarded fairly.' },
    ],
  },
  career: {
    id: 'career', tag: 'Professional Development', title: 'Launch your career with Internee.pk',
    text: 'Career growth and professional development through virtual internships and practical experience.',
    cta: { label: 'Join the community', href: '/internship' },
    items: [
      { icon: Target, title: 'Targeted learning', text: 'Industry-specific internships built around practical skills.', list: ['Web Development', 'Digital Marketing', 'UI/UX Design'] },
      { icon: Users, title: 'Mentorship program', text: 'Learn from industry experts with guided weekly sessions.', list: ['One-on-one guidance', 'Project reviews', 'Career planning'] },
      { icon: Award, title: 'Certification track', text: 'Earn certificates and a portfolio employers value.', list: ['Skill verification', 'Performance badges', 'Digital certificates'] },
    ],
    stats: [['1000+', 'Active internships'], ['500+', 'Partner companies'], ['10,000+', 'Success stories'], ['50+', 'Industry sectors']],
    journey: [['Phase 1: Foundation', 75], ['Phase 2: Practical skills', 60], ['Phase 3: Industry projects', 85]],
    resources: ['Resume templates', 'Mock interviews', 'Skill analysis', 'Learning paths', 'Goal tracking', 'Peer feedback'],
  },
  interview: {
    id: 'interview', alt: true, tag: 'AI Mock Interviews', title: 'Ace your internship interviews with AI practice',
    text: 'Role-specific mock interviews for tech, marketing and business, with instant feedback so you walk in confident.',
    cta: { label: 'Apply now', href: SIGN_IN },
    items: [
      { icon: Mic, title: 'Realistic AI simulations', text: 'Practice in an interview-like setting powered by AI.' },
      { icon: MessageSquareText, title: 'Smart feedback', text: 'Get quick analysis of your answers, tone and relevance.' },
      { icon: Briefcase, title: 'Role-based practice', text: 'Software engineering, product management, business and digital marketing roles.' },
      { icon: TrendingUp, title: 'Build confidence', text: 'Repeat sessions to reduce anxiety and improve results.' },
      { icon: ClipboardCheck, title: 'Become job-ready', text: 'Structured preparation for real-world interview scenarios.' },
      { icon: LineChart, title: 'Progress reports', text: 'Detailed reports you can share with mentors and hiring managers.' },
    ],
  },
  coach: {
    id: 'coach', tag: 'Your AI Career Journey', title: 'Master the AI career path',
    text: 'An AI career coach for resumes, cover letters, interview prep, quizzes and industry insights.',
    cta: { label: 'Explore tools', href: LEARN },
    pills: ['AI resume building', 'Cover letters', 'Interview prep', 'Industry insights', 'Career growth', 'Personalised path'],
    items: [
      { icon: FileText, title: 'AI resume building', text: 'Highlight your AI skills and achievements for top employers.' },
      { icon: Mail, title: 'Cover letter creation', text: 'Write letters that show your passion and value.' },
      { icon: GraduationCap, title: 'Interview preparation', text: 'Practice questions, strategies and technical answer tips.' },
      { icon: Compass, title: 'Industry insights', text: 'Stay current with AI trends and market demand.' },
    ],
  },
};

export const steps = [
  ['Sign up & choose a domain', 'Explore internships across industries that fit your skills.'],
  ['Complete your application', 'Submit a short form and secure your opportunity in minutes.'],
  ['Earn your certificate', 'Finish the internship, gain real experience and get a verified certificate.'],
];

export const testimonials = [
  { name: 'Kashan Soomro', place: 'Karachi, Pakistan', text: 'Thanks to Internee.pk, I grew my skills here and now I am working as a Flutter Developer in a US company.' },
  { name: 'Sample Intern', place: 'Sample', sample: true, text: 'Sample testimonial: the task portal helped me practise real projects and build a portfolio.' },
  { name: 'Sample Graduate', place: 'Sample', sample: true, text: 'Sample testimonial: mock interviews made me far more confident before applying.' },
];

export const social = [
  ['Facebook', 'https://www.facebook.com/people/Interneepk/100093222249320/'],
  ['Twitter', 'https://twitter.com/interneepk'],
  ['LinkedIn', 'https://www.linkedin.com/company/internee-pk/'],
  ['Instagram', 'https://www.instagram.com/internee.pk/'],
];

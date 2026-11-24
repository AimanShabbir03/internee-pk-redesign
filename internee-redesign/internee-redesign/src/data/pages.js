import { Megaphone, Users, Rocket, Lightbulb, Handshake, Building2, GraduationCap, FolderKanban, Award, LifeBuoy, BookOpen, Newspaper, Video, CalendarDays, Target, Globe, HeartHandshake, UserCheck, Briefcase, Mic } from 'lucide-react';
import { categories } from './content.js';

const trackOptions = categories.map((c) => c.name);
const f = (name, label, type = 'text', extra = {}) => ({ name, label, type, ...extra });

export const forms = {
  apply: { title: 'Apply for an internship', submit: 'Submit application', fields: [f('name', 'Full name'), f('email', 'Email', 'email'), f('phone', 'Mobile number', 'tel'), f('track', 'Track', 'select', { options: trackOptions }), f('about', 'Tell us about yourself', 'textarea')] },
  graduate: { title: 'Register your interest', submit: 'Register', fields: [f('name', 'Full name'), f('email', 'Email', 'email'), f('degree', 'Degree / university'), f('about', 'What do you want to achieve?', 'textarea')] },
  ambassador: { title: 'Become a student ambassador', submit: 'Apply', fields: [f('name', 'Full name'), f('email', 'Email', 'email'), f('university', 'University'), f('about', 'Why do you want to represent Internee.pk?', 'textarea')] },
  startup: { title: 'Share your startup idea', submit: 'Submit idea', fields: [f('name', 'Your name'), f('email', 'Email', 'email'), f('idea', 'Describe your idea', 'textarea')] },
  partner: { title: 'Partner with us', submit: 'Send enquiry', fields: [f('company', 'Company name'), f('name', 'Contact person'), f('email', 'Work email', 'email'), f('about', 'How would you like to collaborate?', 'textarea')] },
  instructor: { title: 'Apply as an instructor', submit: 'Apply', fields: [f('name', 'Full name'), f('email', 'Email', 'email'), f('topic', 'Topic you teach'), f('about', 'Tell us about your content', 'textarea')] },
  signin: { title: 'Welcome back', submit: 'Login', auth: 'login', successMsg: 'Login successful! Welcome back.', demo: 'Demo mode: any valid email and an 8+ character password will work.', fields: [f('email', 'Email', 'email'), f('password', 'Password', 'password')] },
  signup: { title: 'Create your account', submit: 'Sign up', auth: 'signup', successMsg: 'Signup successful! Your account is ready.', demo: 'Demo mode: nothing is sent to a server and your password is not stored.', fields: [f('name', 'Full name'), f('email', 'Email', 'email'), f('password', 'Password (8+ characters)', 'password')] },
};

// Draft page content. Replace with official wording where needed.
export const pages = {
  internship: { tag: 'Internships', title: 'Find your internship track', text: 'Choose a track, apply in a few minutes and learn through real tasks.', board: 'internships' },
  'graduate-program': { tag: 'Graduate Program', title: 'From graduation to your first tech role', text: 'A structured path for fresh graduates who want practical experience.', form: 'graduate', blocks: [
    { icon: FolderKanban, title: 'Structured projects', text: 'Work through guided, industry-style tasks.' }, { icon: Users, title: 'Mentor guidance', text: 'Get feedback and direction from experienced people.' },
    { icon: Briefcase, title: 'Career support', text: 'Resume, interview and job-search preparation.' }, { icon: Award, title: 'Certification', text: 'Finish the program with verified proof of your work.' }] },
  'student-ambassador': { tag: 'Student Ambassador', title: 'Represent Internee.pk at your campus', text: 'Help your classmates discover practical learning and grow your leadership skills.', form: 'ambassador', blocks: [
    { icon: Megaphone, title: 'Spread the word', text: 'Introduce internships and learning resources on campus.' }, { icon: Users, title: 'Build a community', text: 'Connect peers who want to grow together.' }, { icon: Target, title: 'Grow as a leader', text: 'Practice communication, organising and teamwork.' }] },
  'startup-journey': { tag: 'Startup Journey', title: 'Turn an idea into a real product', text: 'Support for students and young founders who want to build something of their own.', form: 'startup', blocks: [
    { icon: Lightbulb, title: 'Shape your idea', text: 'Validate the problem and define a clear plan.' }, { icon: Rocket, title: 'Build a prototype', text: 'Move from concept to a working first version.' }, { icon: HeartHandshake, title: 'Learn from mentors', text: 'Get guidance on product, team and growth.' }] },
  'partner-with-us': { tag: 'Partner With Us', title: 'Collaborate with Pakistan’s young tech talent', text: 'Companies and organisations can work with Internee.pk to support learners and discover talent.', form: 'partner', blocks: [
    { icon: Building2, title: 'Discover talent', text: 'Meet learners with verified, project-based work.' }, { icon: Handshake, title: 'Co-create programs', text: 'Design tasks and tracks around real needs.' }, { icon: Globe, title: 'Support the ecosystem', text: 'Help close the gap between education and industry.' }] },
  about: { tag: 'About Us', title: 'Turbocharging the IT sector in Pakistan', text: 'Internee.pk exists to connect talented people with the growing IT industry.', blocks: [
    { icon: Target, title: 'Our mission', text: 'Bridge the gap between skilled individuals and the industry.' }, { icon: GraduationCap, title: 'What we offer', text: 'Virtual internships, a task portal, AI career tools and mentorship.' }, { icon: Users, title: 'Our community', text: 'Learners, instructors and partners growing together.' }] },
  'intern-profiles': { tag: 'Intern Profiles', title: 'Verified portfolios of our interns', text: 'Profiles showcase completed tasks, badges and certificates.', board: 'profiles', blocks: [
    { icon: UserCheck, title: 'Verified work', text: 'Every task is reviewed before it is added.' }, { icon: Award, title: 'Badges & certificates', text: 'Achievements appear on the profile.' }, { icon: FolderKanban, title: 'Portfolio', text: 'Share your profile with employers.' }] },
  blog: { tag: 'Blog', title: 'Insights and articles', text: 'Career tips, technical guides and stories from our community.', board: 'blog', blocks: [
    { icon: BookOpen, title: 'Tech guides', text: 'Practical how-to content.' }, { icon: Newspaper, title: 'Announcements', text: 'News from Internee.pk.' }, { icon: LifeBuoy, title: 'Career tips', text: 'Resume and interview advice.' }] },
  webinars: { tag: 'Webinars', title: 'Expert-led sessions and masterclasses', text: 'Join live sessions with people working in the industry.', board: 'webinars', blocks: [
    { icon: Video, title: 'Live sessions', text: 'Ask questions in real time.' }, { icon: CalendarDays, title: 'Upcoming events', text: 'Dates will be listed here.' }, { icon: Mic, title: 'Masterclasses', text: 'Deep dives with experts.' }] },
  contact: { tag: 'Contact', title: 'Get in touch', text: 'Questions about internships or partnerships? Send us a message.', contact: true },
  jobs: { tag: 'Job Portal', title: 'Search jobs and opportunities', text: 'Look for roles that match your skills.', jobs: true },
  terms: { tag: 'Legal', title: 'Terms of Use', text: 'Draft placeholder text. Replace with the official terms.', legal: [['Use of the platform', 'You agree to use the platform lawfully and respectfully.'], ['Accounts', 'Keep your credentials secure and your information accurate.'], ['Content', 'You remain responsible for the content you submit.']] },
  privacy: { tag: 'Legal', title: 'Privacy Policy', text: 'Draft placeholder text. Replace with the official policy.', legal: [['Information we collect', 'Details you provide, such as name and email.'], ['How it is used', 'To run the platform and communicate with you.'], ['Your choices', 'You can ask to update or delete your information.']] },
  'sign-in': { tag: 'Account', title: 'Sign in', text: 'Access your dashboard, tasks and certificates.', form: 'signin', alt: '/sign-up' },
  'sign-up': { tag: 'Account', title: 'Join Internee.pk', text: 'Create an account to apply and start learning.', form: 'signup', alt: '/sign-in' },
  'apply-instructor': { tag: 'Instructors', title: 'Teach on Internee.pk', text: 'Share tutorials and projects with learners.', form: 'instructor' },
};

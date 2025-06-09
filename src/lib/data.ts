import type { Project } from '@/components/ui/ProjectCard';
import type { SkillCategory } from '@/components/sections/SkillsSection';
import type { TimelineEvent } from '@/components/ui/TimelineEvent';
import { Briefcase, GraduationCap, CodeXml, Server, Settings2, Database, Cloud, Container, Brain, GitMerge, SlidersHorizontal, Palette, BarChart3, Zap, Users, ShieldCheck, Search, Github, Coffee } from 'lucide-react';

export const projectsData: Project[] = [
  {
    name: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with user authentication, product listings, cart, and payment integration.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ecommerce website',
    techStack: ['React', 'Next.js', 'Spring Boot', 'PostgreSQL', 'Stripe'],
    githubUrl: 'https://github.com/yourusername/e-commerce-platform',
    liveUrl: '#',
  },
  {
    name: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates, boards, and progress tracking.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'task manager',
    techStack: ['Vue.js', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    githubUrl: 'https://github.com/yourusername/task-manager',
    liveUrl: '#',
  },
  {
    name: 'AI Powered Blog Generator',
    description: 'A content creation tool that uses AI to generate blog posts based on user prompts and keywords.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ai application',
    techStack: ['Python', 'Flask', 'OpenAI API', 'React'],
    githubUrl: 'https://github.com/yourusername/ai-blog-generator',
  },
  {
    name: 'Cloud File Storage Service',
    description: 'A secure cloud file storage and sharing service similar to Dropbox, built with scalability in mind.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'cloud storage',
    techStack: ['Java', 'AWS S3', 'DynamoDB', 'Docker', 'Kubernetes'],
    liveUrl: '#',
  },
];

export const skillsData: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: CodeXml,
    skills: [
      { name: 'HTML5 & CSS3', level: 95, icon: Palette },
      { name: 'JavaScript (ES6+)', level: 90, icon: Zap },
      { name: 'TypeScript', level: 85, icon: ShieldCheck },
      { name: 'React & Next.js', level: 90, icon: CodeXml },
      { name: 'Vue.js', level: 75, icon: CodeXml },
      { name: 'Tailwind CSS', level: 88, icon: SlidersHorizontal },
      { name: 'Responsive Design', level: 92, icon: BarChart3 },
    ],
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'Node.js & Express.js', level: 85, icon: Server },
      { name: 'Java & Spring Boot', level: 90, icon: Coffee },
      { name: 'Python (Flask/Django)', level: 80, icon: Brain },
      { name: 'RESTful APIs & GraphQL', level: 88, icon: GitMerge },
      { name: 'Microservices', level: 75, icon: Users },
      { name: 'Database Management (SQL & NoSQL)', level: 85, icon: Database },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: Settings2,
    skills: [
      { name: 'Docker & Kubernetes', level: 80, icon: Container },
      { name: 'AWS (EC2, S3, Lambda, RDS)', level: 78, icon: Cloud },
      { name: 'CI/CD (Jenkins, GitHub Actions)', level: 82, icon: GitMerge },
      { name: 'Git & GitHub', level: 95, icon: Github },
      { name: 'Agile Methodologies', level: 90, icon: Users },
      { name: 'Testing (Unit, Integration)', level: 85, icon: ShieldCheck },
      { name: 'Monitoring & Logging (Prometheus, ELK)', level: 70, icon: Search},
    ],
  },
];


export const experienceData: TimelineEvent[] = [
  {
    year: '2021 - Present',
    title: 'Senior Full-Stack Developer',
    institution: 'Tech Solutions Inc.',
    description: 'Led development of key product features, mentored junior developers, and contributed to architectural decisions. Specialized in microservices and cloud deployment.',
    icon: Briefcase,
  },
  {
    year: '2019 - 2021',
    title: 'Software Engineer',
    institution: 'Web Innovators LLC',
    description: 'Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software.',
    icon: Briefcase,
  },
  {
    year: '2018',
    title: 'Software Development Intern',
    institution: 'Startup X',
    description: 'Assisted in the development of a mobile application, gaining experience in agile methodologies and version control.',
    icon: Briefcase,
  },
];

export const educationData: TimelineEvent[] = [
  {
    year: '2015 - 2019',
    title: 'B.S. in Computer Science',
    institution: 'University of Technology',
    description: 'Graduated with honors. Focused on software engineering, algorithms, and database systems. Active member of the coding club.',
    icon: GraduationCap,
  },
  {
    year: '2018',
    title: 'Cloud Practitioner Certification',
    institution: 'Amazon Web Services',
    description: 'Completed AWS Certified Cloud Practitioner exam, demonstrating foundational knowledge of AWS Cloud concepts.',
    icon: Cloud,
  }
];


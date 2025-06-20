import type { Project } from '@/components/ui/ProjectCard';
import type { SkillCategory } from '@/components/sections/SkillsSection';
import type { TimelineEvent } from '@/components/ui/TimelineEvent';
import { Briefcase, GraduationCap, CodeXml, Server, Settings2, Database, Github, Zap, Users, ShieldCheck, Palette, Cloud, Coffee } from 'lucide-react';

export const name = 'Raju Kumar';
export const contact = {
  phone: '+91-9798118939',
  email: 'rajukumarnitian@gmail.com',
  linkedin: 'https://linkedin.com/in/raju-kumar',
  github: 'https://github.com/your-github', // Replace with your GitHub username
  twitter: 'https://twitter.com/your-twitter', // Replace with your Twitter username
};

export const projectsData: Project[] = [
  {
    name: 'Food Delivery System (MERN Stack)',
    description: 'Engineered a full-stack food delivery application featuring robust user authentication, real-time order tracking, and an intuitive cart management system. Integrated multiple APIs to streamline the food ordering process from selection to delivery.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'food delivery app',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs'],
    githubUrl: 'https://github.com/your-github/food-delivery', // Add your GitHub link
    liveUrl: 'https://your-live-link.com/food-delivery', // Add your live link
  },
  {
    name: 'Real-Time Chat Application',
    description: 'Developed a dynamic, real-time messaging platform enabling seamless and scalable user-to-user interactions. The system supports instant chat capabilities with dynamic user lists, built on a resilient and low-latency architecture.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'chat application interface',
    techStack: ['HTML5', 'CSS3', 'Node.js', 'Socket.io', 'WebSocket'],
    githubUrl: 'https://github.com/your-github/chat-app', // Add your GitHub link
    liveUrl: 'https://your-live-link.com/chat-app', // Add your live link
  },
];

export const skillsData: SkillCategory[] = [
  {
    title: 'Languages & Databases',
    icon: CodeXml,
    skills: [
      { name: 'C++', level: 85 },
      { name: 'JavaScript (ES6+)', level: 80 },
      { name: 'SQL (PostgreSQL)', level: 75 },
      { name: 'MongoDB', level: 80 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Server,
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 85 },
      { name: 'Spring Boot', level: 70, icon: Coffee },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: Settings2,
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS (EC2, S3)', level: 65, icon: Cloud },
      { name: 'Postman', level: 95 },
    ],
  },
  {
    title: 'Core Competencies',
    icon: ShieldCheck,
    skills: [
      { name: 'Data Structures & Algorithms', level: 88 },
      { name: 'Object-Oriented Programming', level: 85 },
      { name: 'Operating Systems', level: 75 },
      { name: 'Database Management Systems', level: 78 },
    ],
  },
];

export const experienceData: TimelineEvent[] = [
  {
    year: '4 years',
    title: 'Teaching Experience',
    institution: 'Private Tutoring',
    description: 'Developed and implemented a unique, result-oriented teaching methodology for computer science subjects, leading to significant improvements in student performance and comprehension over four years.',
    icon: Briefcase,
  },
];

export const educationData: TimelineEvent[] = [
  {
    year: '2021 - Present',
    title: 'Master of Computer Application',
    institution: 'National Institute of Technology Jamshedpur',
    description: 'CGPA: 8.10',
    icon: GraduationCap,
  },
  {
    year: '2017 - 2020',
    title: 'BSc in Information Technology',
    institution: 'Doranda College, Ranchi',
    description: 'Percentage: 84.67%',
    icon: GraduationCap,
  },
];

export const achievementsData: string[] = [
  'CODEWALKERZ: Scored 9th rank out of 2500+ Student conducted by Coding Ninja',
  'Solved 500+ Problems on: Leetcode , Codeforces , GFG, Hackerrank',
  'NIMCET Entrance Exam (2021): Secured Rank AIR 549',
];

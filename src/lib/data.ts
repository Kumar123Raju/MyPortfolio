import type { Project } from '@/components/ui/ProjectCard';
import type { SkillCategory } from '@/components/sections/SkillsSection';
import type { TimelineEvent } from '@/components/ui/TimelineEvent';
import { Briefcase, GraduationCap, CodeXml, Server, Settings2, Database, Github, Zap, Users } from 'lucide-react';

export const name = 'Raju Kumasr';
export const contact = {
  phone: '+91-9798118939',
  email: 'rajukumarnitian@gmail.com',
  linkedin: 'https://linkedin.com/in/raju-kumar',
};

export const projectsData: Project[] = [
  {
    name: 'Food Delivery System Using MERN Stack',
    description: 'Developed features including User Authentication, Authorization, Login/Logout pages, My Cart, and My Order functionalities. Enabled account creation and login, integrated APIs for seamless food ordering processes.',
    imageUrl: '', // Add a relevant image URL if you have one
    imageHint: 'Food delivery application built with MERN stack',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    githubUrl: 'YOUR_GITHUB_LINK_HERE', // Add your GitHub link
    liveUrl: 'YOUR_LIVE_LINK_HERE', // Add your live link
    startDate: 'Mar 2023',
    endDate: 'Aug 2023',
  },
  {
    name: 'Real-Time Chat App',
    description: 'Designed real-time messaging system for seamless, scalable user-to-user interactions. Allowed instant chat capabilities upon username entry with dynamically users.',
    imageUrl: '', // Add a relevant image URL if you have one
    imageHint: 'Real-time chat application',
    techStack: ['HTML5', 'CSS3', 'Node.js', 'Socket.io'],
    githubUrl: 'YOUR_GITHUB_LINK_HERE', // Add your GitHub link
    liveUrl: 'YOUR_LIVE_LINK_HERE', // Add your live link
    startDate: 'Jan 2023',
    endDate: 'Mar 2023',
  },
];

export const skillsData: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: CodeXml,
    skills: [
      { name: 'C++', level: 85, icon: CodeXml }, // Adjust level based on your proficiency
      { name: 'JavaScript', level: 80, icon: Zap }, // Adjust level
      { name: 'SQL', level: 75, icon: Database }, // Adjust level
    ],
  },
  {
    title: 'Technology/Frameworks',
    icon: Server,
    skills: [
      { name: 'GitHub', level: 90, icon: Github }, // Adjust level
      { name: 'React', level: 85, icon: CodeXml }, // Adjust level
      { name: 'Node.JS', level: 80, icon: Server }, // Adjust level
      { name: 'MongoDB', level: 80, icon: Database }, // Adjust level
    ],
  },
  {
    title: 'Coursework/Skills',
    icon: CodeXml, // Using CodeXml as a generic icon, replace if you have a better one
    skills: [
      { name: 'Data Structure & Algorithms', level: 88, icon: CodeXml }, // Adjust level
      { name: 'OOPs Concepts', level: 85, icon: CodeXml }, // Adjust level
      { name: 'Operating System', level: 75, icon: Users }, // Adjust level
      { name: 'DBMS', level: 78, icon: Database }, // Adjust level
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: Settings2,
    skills: [
      { name: 'Docker & Kubernetes', level: 80, icon: Server }, // Using Server as a generic icon, replace if you have a better one
      // You can add other relevant DevOps and tools skills here if you have them.
      // Examples: CI/CD, Cloud Platforms (AWS, Azure, GCP), etc.
    ],
  },
];

export const experienceData: TimelineEvent[] = [
  {
    year: '4 years',
    title: 'Teaching Experience',
    institution: '', // You can add the institution name if applicable
    description: 'Possess four years of teaching experience during which I have created and implemented my unique approach. This innovative teaching method has consistently yielded exceptional results, as evidenced by the success and satisfaction of my students.',
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
    title: 'BSc (IT)',
    institution: 'Doranda College, Ranchi',
    description: 'Percentage: 84.67',
    icon: GraduationCap,
  },
];

export const achievementsData: string[] = [
  'CODEWALKERZ: Scored 9th rank out of 2500+ Student conducted by Coding Ninja',
  'Solved 500+ Problems on: Leetcode , Codeforces , GFG, Hackerrank',
  'NIMCET Entrance Exam (2021): Secured Rank AIR 549',
];


"use client";

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { adaptAboutMeContent, type AdaptAboutMeContentInput } from '@/ai/flows/adaptive-content-flow';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CodeXml, Server, Coffee, Database, Container, Cloud, Github, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Skeleton } from '../ui/skeleton';
import { name } from '@/lib/data';

interface TechStackItem {
  name: string;
  icon: LucideIcon;
}

const techStack: TechStackItem[] = [
  { name: 'React / Next.js', icon: CodeXml },
  { name: 'Node.js / Express', icon: Server },
  { name: 'Java / Spring Boot', icon: Coffee },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Docker', icon: Container },
  { name: 'AWS', icon: Cloud },
  { name: 'Git', icon: Github },
];

const initialBio = `
  Hello! I'm a passionate Full-Stack Developer with a knack for building robust and scalable web applications. 
  My journey in tech has been driven by a curiosity to solve complex problems and a love for creating intuitive user experiences. 
  I thrive in collaborative environments and I'm always eager to learn new technologies.
  <br/><br/>
  With a strong foundation in both front-end and back-end development, I enjoy bringing ideas to life from concept to deployment. 
  I'm proficient in a range of technologies and I'm particularly interested in cloud computing and microservices architecture.
  <br/><br/>
  When I'm not coding, you can find me exploring new hiking trails, reading tech blogs, or experimenting with new recipes in the kitchen.
`;

export default function AboutSection() {
  const [bio, setBio] = useState(initialBio);
  const [isLoadingBio, setIsLoadingBio] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const interactionTracked = useRef(false); // To ensure AI call happens once or based on specific triggers

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !interactionTracked.current) {
          // Consider user has "navigated" to this section and spent some initial time
          // For a more complex navigationPattern, you'd track scroll depth, clicks, etc.
          const navigationPattern = "User scrolled to About Me section."; 
          
          // Trigger AI adaptation after, say, 5 seconds of viewing the section
          // Or if the user has been on the page for a longer cumulative time
          if (timeSpent > 5 || (timeSpent > 2 && Math.random() > 0.5)) { // Added some randomness for demo
            interactionTracked.current = true; // Mark as tracked to prevent multiple calls
            setIsLoadingBio(true);
            const input: AdaptAboutMeContentInput = {
              timeSpentOnPage: timeSpent,
              navigationPattern: navigationPattern,
              currentContent: initialBio.replace(/<br\/><br\/>/g, '\n\n'), // AI might prefer newline formatting
            };
            
            adaptAboutMeContent(input)
              .then(output => {
                setBio(output.adaptedContent.replace(/\n\n/g, '<br/><br/>'));
              })
              .catch(error => {
                console.error("Failed to adapt content:", error);
                // Fallback to initialBio or show an error message
                setBio(initialBio); 
              })
              .finally(() => {
                setIsLoadingBio(false);
              });
          }
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [timeSpent]); // Re-run effect if timeSpent changes, to allow AI call after sufficient time

  return (
    <section id="about" ref={sectionRef} className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="animate-fade-in">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            About Me
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col items-center md:items-start md:col-span-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Avatar className="h-48 w-48 md:h-64 md:w-64 mb-6 border-4 border-accent shadow-lg">
              <AvatarImage src="https://placehold.co/300x300.png" alt={name} data-ai-hint="professional portrait" />
              <AvatarFallback>RK</AvatarFallback>
            </Avatar>
            <h3 className="text-2xl font-semibold mb-2 text-center md:text-left font-headline">{name}</h3>
            <p className="text-muted-foreground text-center md:text-left">Full-Stack Developer</p>
             <Button asChild variant="link" className="mt-4 text-accent p-0 h-auto">
              <Link href="#contact">
                Let&apos;s connect <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="md:col-span-2 space-y-8">
            <Card className="shadow-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-primary">My Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/90">
                {isLoadingBio ? (
                  <>
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-full mt-4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-1/2" />
                  </>
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: bio }} className="prose prose-sm dark:prose-invert max-w-none leading-relaxed" />
                )}
              </CardContent>
            </Card>
            
            <Card className="shadow-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-primary">Core Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
                  {techStack.map((tech) => (
                    <li key={tech.name} className="flex items-center space-x-3">
                      <tech.icon className="h-6 w-6 text-accent flex-shrink-0" />
                      <span className="text-foreground/90">{tech.name}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

export interface Project {
  name: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full transform flex-col overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={project.imageUrl}
            alt={project.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
            data-ai-hint={project.imageHint || "project screenshot"}
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col p-6">
        <CardTitle className="mb-2 text-xl font-headline">{project.name}</CardTitle>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-accent/20 text-accent-foreground hover:bg-accent/30">
              {tech}
            </Badge>
          ))}
        </div>
        <CardDescription className="flex-grow text-sm text-muted-foreground">{project.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end gap-2 p-6 pt-0">
        {project.githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
        )}
        {project.liveUrl && (
          <Button variant="default" size="sm" asChild className="bg-primary hover:bg-primary/90">
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

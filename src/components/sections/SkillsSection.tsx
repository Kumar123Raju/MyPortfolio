import SkillItem, { type Skill } from '@/components/ui/SkillItem';
import { skillsData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((category, index) => (
            <Card key={category.title} className="shadow-lg animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader className="flex flex-row items-center space-x-3 pb-4">
                <category.icon className="h-8 w-8 text-accent" />
                <CardTitle className="text-xl font-headline">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {category.skills.map((skill) => (
                  <SkillItem key={skill.name} skill={skill} />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

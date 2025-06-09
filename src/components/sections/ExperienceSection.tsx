import TimelineEvent from '@/components/ui/TimelineEvent';
import { experienceData, educationData } from '@/lib/data';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
          My Journey
        </h2>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <h3 className="mb-8 flex items-center text-2xl font-semibold text-foreground font-headline">
              <Briefcase className="mr-3 h-7 w-7 text-accent" />
              Experience
            </h3>
            <ol className="relative">
              {experienceData.map((event, index) => (
                 <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.15}s`}}>
                    <TimelineEvent event={event} isLast={index === experienceData.length - 1} />
                 </div>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="mb-8 flex items-center text-2xl font-semibold text-foreground font-headline">
              <GraduationCap className="mr-3 h-7 w-7 text-accent" />
              Education
            </h3>
            <ol className="relative">
              {educationData.map((event, index) => (
                <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.15}s`}}>
                    <TimelineEvent event={event} isLast={index === educationData.length - 1} />
                </div>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

import ProjectCard from '@/components/ui/ProjectCard';
import { projectsData } from '@/lib/data';

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
          My Projects
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {projectsData.map((project) => (
            <div key={project.name} className="animate-fade-in" style={{animationDelay: `${projectsData.indexOf(project) * 0.1}s`}}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

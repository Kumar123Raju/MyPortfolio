import { Button } from "@/components/ui/button";
import Link from "next/link";
import ResumeButton from "@/components/ResumeButton";
import { name } from "@/lib/data";

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 z-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/20 animate-pulse"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl font-headline text-glow">
            {name}
          </h1>
          <p className="mt-4 text-2xl text-primary sm:text-3xl font-medium">
            Full-Stack Developer
          </p>
          <p className="mt-6 text-lg leading-8 text-foreground/90 sm:text-xl">
            Crafting scalable web applications with precision and passion.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="default">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <ResumeButton className="bg-accent hover:bg-accent/90 text-accent-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}

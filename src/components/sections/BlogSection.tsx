import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const placeholderArticles = [
  {
    id: 1,
    title: "Understanding Microservices Architecture",
    date: "October 26, 2023",
    excerpt: "A deep dive into the world of microservices, their benefits, challenges, and best practices for implementation...",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "tech architecture",
    slug: "/blog/understanding-microservices"
  },
  {
    id: 2,
    title: "Getting Started with Next.js 14",
    date: "November 05, 2023",
    excerpt: "Explore the new features in Next.js 14 and learn how to build high-performance React applications...",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "code editor",
    slug: "/blog/getting-started-nextjs-14"
  },
  {
    id: 3,
    title: "The Power of Server Components in Modern Web Dev",
    date: "November 15, 2023",
    excerpt: "Discover how React Server Components are changing the game for web development, improving performance and developer experience...",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "server components",
    slug: "/blog/power-of-server-components"
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {placeholderArticles.map((article, index) => (
            <Card key={article.id} className="flex flex-col overflow-hidden shadow-lg animate-fade-in transition-all duration-300 hover:shadow-xl" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={article.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <p className="mb-1 text-xs text-muted-foreground">{article.date}</p>
                <CardTitle className="mb-2 text-xl font-headline leading-tight">
                  <Link href={article.slug} className="hover:text-primary transition-colors">
                    {article.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{article.excerpt}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="link" asChild className="p-0 text-accent hover:text-accent/80">
                  <Link href={article.slug}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/blog">
              View All Articles
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

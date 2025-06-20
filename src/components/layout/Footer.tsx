import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { name, contact } from '@/lib/data';

const socialLinks = [
  { name: 'GitHub', href: contact.github, icon: Github },
  { name: 'LinkedIn', href: contact.linkedin, icon: Linkedin },
  { name: 'Twitter', href: contact.twitter, icon: Twitter },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="ghost" size="icon" asChild>
                <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <link.icon className="h-5 w-5 text-accent transition-colors hover:text-accent/80" />
                </Link>
              </Button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

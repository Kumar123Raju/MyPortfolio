"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/ThemeToggle';
import { cn } from '@/lib/utils';
import { name } from '@/lib/data';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
  { label: 'Blog', href: '#blog' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      let currentSection = '';
      navItems.forEach(item => {
        const section = document.getElementById(item.href.substring(1));
        if (section && section.offsetTop <= window.scrollY + 100) {
          currentSection = item.href;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, children, mobile = false, onClick }: { href: string; children: React.ReactNode; mobile?: boolean, onClick?: () => void }) => (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        activeSection === href ? "text-primary" : "text-foreground/80",
        mobile && "block w-full p-3 hover:bg-accent rounded-md"
      )}
    >
      {children}
    </Link>
  );
  

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="text-2xl font-bold text-primary font-headline">
          {name}
        </Link>
        <nav className="hidden items-center space-x-6 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-4">
              <div className="mb-6 flex items-center justify-between">
                 <Link href="#home" className="text-xl font-bold text-primary font-headline">
                  {name}
                </Link>
                <SheetClose asChild>
                   <Button variant="ghost" size="icon">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <NavLink href={item.href} mobile>
                        {item.label}
                    </NavLink>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

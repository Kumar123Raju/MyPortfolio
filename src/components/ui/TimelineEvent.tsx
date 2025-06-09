import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export interface TimelineEvent {
  year: string;
  title: string;
  institution: string;
  description: string;
  icon?: LucideIcon;
}

interface TimelineEventProps {
  event: TimelineEvent;
  isLast?: boolean;
}

export default function TimelineEvent({ event, isLast = false }: TimelineEventProps) {
  const Icon = event.icon;
  return (
    <li className="relative pl-10 pb-8 group">
      <div className="absolute left-[11px] top-1.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground ring-8 ring-background group-hover:bg-accent transition-colors duration-300">
        {Icon ? <Icon className="h-3.5 w-3.5" /> : <span className="text-xs font-bold"></span>}
      </div>
      {!isLast && (
        <div className="absolute left-4 top-8 h-full w-0.5 bg-border group-hover:bg-accent/50 transition-colors duration-300"></div>
      )}
      <Card className="ml-4 shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="pb-2">
          <p className="text-xs text-muted-foreground">{event.year}</p>
          <CardTitle className="text-lg font-semibold text-primary font-headline">{event.title}</CardTitle>
          <p className="text-sm font-medium text-foreground/80">{event.institution}</p>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm text-muted-foreground">{event.description}</CardDescription>
        </CardContent>
      </Card>
    </li>
  );
}

import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-4">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
        <p className="text-lg font-medium text-foreground">Loading Devfolio...</p>
      </div>
    </div>
  );
}

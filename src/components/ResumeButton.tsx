import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function ResumeButton({ className }: { className?: string }) {
  return (
    <Button asChild className={className} size="lg">
      <a href="/placeholder-resume.pdf" download="YourName_Resume.pdf">
        <Download className="mr-2 h-5 w-5" />
        Download Resume
      </a>
    </Button>
  );
}

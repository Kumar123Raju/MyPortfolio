import { Progress } from "@/components/ui/progress";
import type { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  level: number;
  icon?: LucideIcon;
}

interface SkillItemProps {
  skill: Skill;
}

export default function SkillItem({ skill }: SkillItemProps) {
  const Icon = skill.icon;
  return (
    <div className="mb-4">
      <div className="mb-1 flex items-center justify-between">
        <div className="flex items-center">
          {Icon && <Icon className="mr-2 h-5 w-5 text-accent" />}
          <span className="text-sm font-medium text-foreground/90">{skill.name}</span>
        </div>
        <span className="text-xs font-medium text-primary">{skill.level}%</span>
      </div>
      <Progress value={skill.level} className="h-2 [&>div]:bg-primary" aria-label={`${skill.name} progress ${skill.level}%`} />
    </div>
  );
}

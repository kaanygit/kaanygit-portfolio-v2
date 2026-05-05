'use client';

interface SkillBadgeProps {
  name: string;
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-card px-3.5 py-1.5 text-[12px] font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-soft-sm">
      {name}
    </span>
  );
}

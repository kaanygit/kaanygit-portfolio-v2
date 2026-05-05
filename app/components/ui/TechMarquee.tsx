'use client';

import clsx from 'clsx';

const items = [
  'Next.js',
  'Node.js',
  'TypeScript',
  'React',
  'Flutter',
  'Python',
  'Django',
  'PostgreSQL',
  'MongoDB',
  'Firebase',
  'Docker',
  'AWS',
  'Google Cloud',
  'REST API',
  'GraphQL',
];

interface TechMarqueeProps {
  label?: string;
  className?: string;
}

export default function TechMarquee({ label, className }: TechMarqueeProps) {
  return (
    <div className={clsx('relative w-full select-none', className)}>
      {label && (
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-6 bg-border" />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground-subtle">
            {label}
          </span>
        </div>
      )}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap py-1">
          {[...items, ...items].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="inline-flex items-center gap-3 font-display text-base font-medium tracking-tight text-foreground-muted md:text-lg"
            >
              <span
                aria-hidden
                className="h-1 w-1 rounded-full bg-accent/70"
              />
              {tech}
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        .marquee-track {
          animation: marquee 38s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
        @keyframes marquee {
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

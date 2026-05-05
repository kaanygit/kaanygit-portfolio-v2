'use client';

import clsx from 'clsx';
import AnimatedText from './AnimatedText';
import Reveal from './Reveal';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={clsx(
        'mb-16 md:mb-20',
        align === 'center' && 'mx-auto max-w-3xl text-center',
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <div
            className={clsx(
              'mb-5 flex items-center gap-3',
              align === 'center' && 'justify-center'
            )}
          >
            <span className="h-px w-8 bg-accent/60" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              {eyebrow}
            </span>
          </div>
        </Reveal>
      )}
      <AnimatedText
        as="h2"
        text={title}
        trigger="scroll"
        splitBy="word"
        stagger={0.05}
        className="font-display text-4xl font-medium tracking-tightest text-foreground md:text-6xl"
      />
      {subtitle && (
        <Reveal delay={0.15} className="mt-5">
          <p
            className={clsx(
              'max-w-2xl text-balance text-base leading-relaxed text-foreground-muted md:text-lg',
              align === 'center' && 'mx-auto'
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

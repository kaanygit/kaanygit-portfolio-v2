'use client';

import clsx from 'clsx';
import SplitLines from './SplitLines';
import Reveal from './Reveal';

interface SectionHeaderProps {
  /** Editorial index, e.g. '01'. */
  index?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({
  index,
  eyebrow,
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <div className={clsx('mb-14 md:mb-20', className)}>
      {(index || eyebrow) && (
        <Reveal y={12}>
          <div className="mono-label flex items-baseline gap-3 text-gray-1">
            {index && <span className="text-foreground">{index}</span>}
            {index && eyebrow && <span aria-hidden>/</span>}
            {eyebrow && <span>{eyebrow}</span>}
          </div>
        </Reveal>
      )}
      <SplitLines
        as="h2"
        className="display-huge mt-5 break-words text-[clamp(40px,7vw,104px)] text-foreground"
      >
        {title}
      </SplitLines>
      {subtitle && (
        <Reveal delay={0.15} className="mt-6">
          <p className="max-w-2xl text-pretty text-base font-medium leading-relaxed text-gray-1 md:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

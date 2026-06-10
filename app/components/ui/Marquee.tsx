'use client';

import { useRef } from 'react';
import clsx from 'clsx';
import { useGSAP } from '@gsap/react';
import { gsap, PREFERS_MOTION } from '../../lib/gsap';

interface MarqueeProps {
  items: string[];
  label?: string;
  separator?: string;
  className?: string;
  /** Seconds per half-loop. */
  speed?: number;
}

export default function Marquee({
  items,
  label,
  separator = '—',
  className,
  speed = 28,
}: MarqueeProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      const mm = gsap.matchMedia();
      mm.add(PREFERS_MOTION, () => {
        gsap.to(track, {
          xPercent: -50,
          duration: speed,
          ease: 'none',
          repeat: -1,
        });
      });

      return () => mm.revert();
    },
    { scope: rootRef as React.RefObject<HTMLElement> }
  );

  return (
    <div
      ref={rootRef}
      className={clsx('hairline-t hairline-b w-full select-none', className)}
      aria-hidden
    >
      {label && (
        <div className="mono-label hairline-b px-5 py-3 text-gray-1 md:px-10">
          {label}
        </div>
      )}
      <div className="overflow-hidden py-5 md:py-6">
        <div ref={trackRef} className="flex w-max whitespace-nowrap">
          {[0, 1].map((half) => (
            <div key={half} className="flex shrink-0 items-center">
              {items.map((item, i) => (
                <span
                  key={`${half}-${i}`}
                  className="flex items-center font-display text-xl font-semibold uppercase tracking-tight text-foreground md:text-2xl"
                >
                  <span className="px-5 text-gray-2 md:px-8">{separator}</span>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

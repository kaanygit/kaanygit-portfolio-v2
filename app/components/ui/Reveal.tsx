'use client';

import { useRef, type ReactNode } from 'react';
import clsx from 'clsx';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../lib/gsap';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Stagger child elements (selector). When set, children matching the selector animate in sequence. */
  childSelector?: string;
  childStagger?: number;
}

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 36,
  childSelector,
  childStagger = 0.08,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        if (childSelector) {
          const targets = el.querySelectorAll<HTMLElement>(childSelector);
          if (!targets.length) return;
          gsap.set(targets, { y, opacity: 0 });
          gsap.to(targets, {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power4.out',
            stagger: childStagger,
            delay,
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          });
        } else {
          gsap.set(el, { y, opacity: 0 });
          gsap.to(el, {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power4.out',
            delay,
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          });
        }
      });

      mm.add('(prefers-reduced-motion: reduce)', () => {
        if (childSelector) {
          gsap.set(el.querySelectorAll(childSelector), { y: 0, opacity: 1 });
        } else {
          gsap.set(el, { y: 0, opacity: 1 });
        }
      });

      return () => mm.revert();
    },
    { scope: ref as React.RefObject<HTMLElement> }
  );

  return (
    <div ref={ref} className={clsx(className)}>
      {children}
    </div>
  );
}

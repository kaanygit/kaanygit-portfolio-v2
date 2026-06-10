'use client';

import { useRef, type ReactNode, type ElementType } from 'react';
import clsx from 'clsx';
import { useGSAP } from '@gsap/react';
import { gsap, SplitText, PREFERS_MOTION } from '../../lib/gsap';

interface SplitLinesProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** 'lines' for paragraphs/headings, 'chars' for short display words. */
  split?: 'lines' | 'chars';
  /** 'scroll' reveals when entering viewport, 'load' on mount. */
  trigger?: 'scroll' | 'load';
  delay?: number;
  stagger?: number;
}

export default function SplitLines({
  children,
  as: Tag = 'div',
  className,
  split = 'lines',
  trigger = 'scroll',
  delay = 0,
  stagger,
}: SplitLinesProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add(PREFERS_MOTION, () => {
        const instance = SplitText.create(el, {
          type: split,
          mask: split,
          autoSplit: true,
          onSplit: (self) => {
            const targets = split === 'chars' ? self.chars : self.lines;
            return gsap.from(targets, {
              yPercent: 110,
              duration: 0.9,
              ease: 'power4.out',
              stagger: stagger ?? (split === 'chars' ? 0.025 : 0.08),
              delay,
              ...(trigger === 'scroll'
                ? {
                    scrollTrigger: {
                      trigger: el,
                      start: 'top 80%',
                      once: true,
                    },
                  }
                : {}),
            });
          },
        });
        return () => instance.revert();
      });

      return () => mm.revert();
    },
    { scope: ref as React.RefObject<HTMLElement>, dependencies: [children] }
  );

  return (
    <Tag ref={ref} className={clsx(className)}>
      {children}
    </Tag>
  );
}

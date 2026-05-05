'use client';

import { useRef, type ElementType, type ReactNode } from 'react';
import clsx from 'clsx';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../lib/gsap';

interface AnimatedTextProps {
  text: string;
  as?: ElementType;
  className?: string;
  splitBy?: 'word' | 'char';
  stagger?: number;
  delay?: number;
  trigger?: 'mount' | 'scroll';
  /** Render extra content (e.g. an inline accent span) after the split text. */
  children?: ReactNode;
}

export default function AnimatedText({
  text,
  as: Tag = 'span',
  className,
  splitBy = 'word',
  stagger = 0.06,
  delay = 0,
  trigger = 'mount',
  children,
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLElement>(null);

  const tokens =
    splitBy === 'word' ? text.split(/(\s+)/) : Array.from(text);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      const targets = el.querySelectorAll<HTMLElement>('[data-anim-token]');
      if (!targets.length) return;

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.set(targets, { yPercent: 110, opacity: 0 });

        const tween = () =>
          gsap.to(targets, {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power4.out',
            stagger,
            delay,
          });

        if (trigger === 'scroll') {
          gsap.to(targets, {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power4.out',
            stagger,
            delay,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true,
            },
          });
        } else {
          tween();
        }
      });

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(targets, { yPercent: 0, opacity: 1 });
      });

      return () => mm.revert();
    },
    { scope: containerRef as React.RefObject<HTMLElement>, dependencies: [text] }
  );

  return (
    <Tag ref={containerRef} className={clsx('block', className)}>
      {tokens.map((token, i) => {
        if (/^\s+$/.test(token)) return <span key={`s-${i}`}>{token}</span>;
        return (
          <span
            key={`t-${i}`}
            className="text-reveal-mask"
            aria-hidden={false}
          >
            <span data-anim-token>{token}</span>
          </span>
        );
      })}
      {children}
    </Tag>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight } from 'lucide-react';
import clsx from 'clsx';
import { gsap } from '../../lib/gsap';

interface CardSpec {
  key: 'lawantra' | 'dreeys' | 'coachun';
  imageUrl: string;
  imageInvertOnDark?: boolean;
  href: string;
}

const cards: CardSpec[] = [
  {
    key: 'lawantra',
    imageUrl: '/lawantra-logo.svg',
    href: 'https://lawantra.com',
  },
  {
    key: 'dreeys',
    imageUrl: '/dreeys-logo.png',
    href: 'https://dreeys.com/en',
  },
  {
    key: 'coachun',
    imageUrl: '/coachun-logo.svg',
    imageInvertOnDark: true,
    href: 'https://coachun.com',
  },
];

const ROTATION_MS = 3800;

interface SlotStyle {
  rotate: number;
  x: number;
  y: number;
  z: number;
  scale: number;
  opacity: number;
}

// Slot 0 = front (active), 1 = back-right, 2 = back-left
const slots: SlotStyle[] = [
  { rotate: 0, x: 0, y: 0, z: 30, scale: 1.04, opacity: 1 },
  { rotate: 7, x: 56, y: 28, z: 20, scale: 0.94, opacity: 0.85 },
  { rotate: -8, x: -56, y: 26, z: 10, scale: 0.92, opacity: 0.75 },
];

export default function HeroProjectStack() {
  const t = useTranslations('hero.cards');
  const tProjects = useTranslations('projects.items');
  const root = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-rotate
  useEffect(() => {
    if (paused) return;
    if (typeof window !== 'undefined') {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) return;
    }
    const id = setInterval(() => {
      setActive((a) => (a + 1) % cards.length);
    }, ROTATION_MS);
    return () => clearInterval(id);
  }, [paused]);

  // Pause when tab hidden
  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference) and (min-width: 1024px)', () => {
        gsap.to(el.querySelectorAll('[data-stack-card]'), {
          y: (i) => -8 - i * 4,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top top+=120',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: root as React.RefObject<HTMLElement> }
  );

  return (
    <div
      ref={root}
      className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center md:h-[480px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Backplate glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-8 top-12 h-72 rounded-[40px] bg-radial-glow opacity-50 blur-2xl"
      />

      {cards.map((card, i) => {
        // distance from active in cyclic order — 0 (front), 1 (right back), 2 (left back)
        const slotIndex = (i - active + cards.length) % cards.length;
        const slot = slots[slotIndex];
        const isFront = slotIndex === 0;

        return (
          <Link
            key={card.key}
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            data-stack-card
            tabIndex={isFront ? 0 : -1}
            aria-hidden={!isFront}
            onFocus={() => setActive(i)}
            onMouseEnter={() => setActive(i)}
            className="group absolute flex h-[260px] w-[220px] flex-col justify-between overflow-hidden rounded-[28px] border border-border bg-card p-5 shadow-soft-lg backdrop-blur transition-[transform,opacity] duration-700 ease-smooth md:h-[300px] md:w-[260px]"
            style={{
              zIndex: slot.z,
              opacity: slot.opacity,
              transform: `translate3d(${slot.x}px, ${slot.y}px, 0) rotate(${slot.rotate}deg) scale(${slot.scale})`,
              willChange: 'transform, opacity',
            }}
          >
            <div
              aria-hidden
              className={clsx(
                'pointer-events-none absolute inset-0 bg-gradient-to-br from-foreground/[0.04] to-transparent transition-opacity duration-500',
                isFront ? 'opacity-100' : 'opacity-50'
              )}
            />

            <div className="relative flex items-start justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground-subtle">
                {String(i + 1).padStart(2, '0')} · {t(`${card.key}.tag`)}
              </span>
              <span className="grid h-7 w-7 place-items-center rounded-full border border-border bg-card/80 text-foreground-muted transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                <ArrowUpRight size={12} strokeWidth={2} />
              </span>
            </div>

            <div className="relative flex flex-1 items-center justify-center py-4">
              <div className="relative flex h-20 w-20 items-center justify-center">
                <Image
                  src={card.imageUrl}
                  alt={tProjects(`${card.key}.title`)}
                  fill
                  sizes="80px"
                  className={clsx(
                    'object-contain transition-transform duration-700 ease-out group-hover:scale-110',
                    card.imageInvertOnDark && 'dark:invert'
                  )}
                />
              </div>
            </div>

            <div className="relative">
              <div className="font-display text-base font-medium tracking-tight text-foreground">
                {tProjects(`${card.key}.title`).split('·')[0].trim()}
              </div>
              <div className="mt-1 line-clamp-2 text-[12px] leading-relaxed text-foreground-muted">
                {tProjects(`${card.key}.description`)}
              </div>
            </div>
          </Link>
        );
      })}

      {/* Slot indicator dots */}
      <div className="pointer-events-none absolute -bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
        {cards.map((c, i) => (
          <span
            key={c.key}
            className={clsx(
              'h-1 rounded-full transition-all duration-500',
              i === active ? 'w-6 bg-foreground' : 'w-1.5 bg-foreground/20'
            )}
          />
        ))}
      </div>
    </div>
  );
}

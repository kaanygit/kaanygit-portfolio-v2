'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';
import SectionWrapper from './ui/SectionWrapper';
import SectionHeader from './ui/SectionHeader';
import ProjectRow from './ui/ProjectRow';
import { PortfolioData } from '../models/PortfolioData';

const data = PortfolioData.getInstance();

export default function Projects() {
  const t = useTranslations('projects');
  const projects = data.getProjects();

  const rootRef = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const quickX = useRef<((v: number) => void) | null>(null);
  const quickY = useRef<((v: number) => void) | null>(null);
  const [previewKey, setPreviewKey] = useState<string | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        '(pointer: fine) and (prefers-reduced-motion: no-preference)',
        () => {
          const el = previewRef.current;
          if (!el) return;
          gsap.set(el, { xPercent: 8, yPercent: 8, scale: 0 });
          quickX.current = gsap.quickTo(el, 'x', {
            duration: 0.4,
            ease: 'power3.out',
          });
          quickY.current = gsap.quickTo(el, 'y', {
            duration: 0.4,
            ease: 'power3.out',
          });
          return () => {
            quickX.current = null;
            quickY.current = null;
          };
        }
      );
      return () => mm.revert();
    },
    { scope: rootRef as React.RefObject<HTMLElement> }
  );

  const { contextSafe } = useGSAP({
    scope: rootRef as React.RefObject<HTMLElement>,
  });

  const onMove = contextSafe((e: React.PointerEvent) => {
    quickX.current?.(e.clientX);
    quickY.current?.(e.clientY);
  });

  const showPreview = contextSafe((key: string) => {
    if (!quickX.current) return;
    setPreviewKey(key);
    gsap.to(previewRef.current, {
      scale: 1,
      duration: 0.35,
      ease: 'power3.out',
    });
  });

  const hidePreview = contextSafe(() => {
    if (!quickX.current) return;
    gsap.to(previewRef.current, {
      scale: 0,
      duration: 0.3,
      ease: 'power3.in',
    });
  });


  return (
    <SectionWrapper ref={rootRef} id="projects">
      <SectionHeader
        index="03"
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <div onPointerMove={onMove} className="hairline-b -mx-5 px-4 md:mx-0 md:px-0">
        {projects.map((p, i) => (
          <ProjectRow
            key={p.key}
            project={p}
            index={i}
            onEnter={() => showPreview(p.key)}
            onLeave={hidePreview}
          />
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <a
          href="https://github.com/kaanygit"
          target="_blank"
          rel="noopener noreferrer"
          className="link-draw focus-ring group inline-flex items-center gap-2 font-display text-lg font-semibold uppercase tracking-tight text-foreground md:text-xl"
        >
          {t('ctaMore')}
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          >
            ↗
          </span>
        </a>
      </div>

      {/* Floating preview tile (fine pointers only) */}
      <div
        ref={previewRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-30 flex h-40 w-40 items-center justify-center border border-hairline bg-background p-6"
        style={{ transform: 'scale(0)' }}
      >
        {projects.map(
          (p) =>
            p.imageUrl && (
              <Image
                key={p.key}
                src={p.imageUrl}
                alt=""
                width={112}
                height={112}
                loading="eager"
                className={clsx(
                  'absolute h-[112px] w-[112px] object-contain transition-opacity duration-150',
                  p.imageInvertOnDark && 'dark:invert',
                  previewKey === p.key ? 'opacity-100' : 'opacity-0'
                )}
              />
            )
        )}
      </div>
    </SectionWrapper>
  );
}

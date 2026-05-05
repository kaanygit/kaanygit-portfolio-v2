'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ExternalLink, Briefcase } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import SectionWrapper from './ui/SectionWrapper';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import { gsap } from '../lib/gsap';
import { PortfolioData } from '../models/PortfolioData';

const data = PortfolioData.getInstance();

export default function Experience() {
  const t = useTranslations('experience');
  const experiences = data.getExperiences();
  const stats = data.getExperienceStats();
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference) and (min-width: 768px)', () => {
        const line = el.querySelector<HTMLElement>('[data-timeline-line]');
        if (!line) return;
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top 70%',
              end: 'bottom 80%',
              scrub: true,
            },
          }
        );
      });

      return () => mm.revert();
    },
    { scope: root as React.RefObject<HTMLElement> }
  );

  return (
    <SectionWrapper id="experience">
      <SectionHeader eyebrow={t('eyebrow')} title={t('title')} />

      <div ref={root} className="relative">
        <div
          aria-hidden
          data-timeline-line
          className="absolute left-[15px] top-2 hidden h-full w-px origin-top bg-gradient-to-b from-accent/60 via-border to-transparent md:block md:left-[19px]"
        />

        <ol className="space-y-14 md:space-y-16">
          {experiences.map((exp, i) => (
            <li key={exp.key}>
              <Reveal delay={i * 0.05}>
                <article className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
                  <div className="md:col-span-3">
                    <div className="relative md:pl-12">
                      <span
                        aria-hidden
                        className="absolute left-0 top-1.5 hidden h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-accent/15 md:block md:left-3.5"
                      />
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground-muted">
                        {t(`items.${exp.key}.period`)}
                      </span>
                      <div className="mt-2 hidden gap-2 text-[11px] text-foreground-subtle md:flex md:flex-col">
                        <span>{t(`items.${exp.key}.type`)}</span>
                        <span>{t(`items.${exp.key}.location`)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-9">
                    <div className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur transition-all duration-500 hover:border-border-strong hover:shadow-soft-md md:p-8">
                      <div className="flex items-start gap-4">
                        {exp.logoUrl ? (
                          <div className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-xl border border-border bg-surface">
                            <Image
                              src={exp.logoUrl}
                              alt={t(`items.${exp.key}.company`)}
                              width={32}
                              height={32}
                              className="h-8 w-8 object-contain"
                            />
                          </div>
                        ) : (
                          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-border bg-surface text-foreground-muted">
                            <Briefcase size={16} strokeWidth={1.75} />
                          </div>
                        )}
                        <div className="flex-1">
                          <h3 className="font-display text-lg font-medium tracking-tight text-foreground md:text-xl">
                            {t(`items.${exp.key}.title`)}
                          </h3>
                          <div className="mt-1.5 flex flex-wrap items-center gap-2">
                            {exp.link ? (
                              <a
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                              >
                                {t(`items.${exp.key}.company`)}
                                <ExternalLink size={11} strokeWidth={2} />
                              </a>
                            ) : (
                              <span className="text-sm font-medium text-accent">
                                {t(`items.${exp.key}.company`)}
                              </span>
                            )}
                            <span className="text-foreground-subtle">·</span>
                            <span className="text-xs text-foreground-muted md:hidden">
                              {t(`items.${exp.key}.period`)}
                            </span>
                            <span className="hidden text-xs text-foreground-muted md:inline">
                              {t(`items.${exp.key}.location`)}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 space-y-3 text-sm leading-relaxed text-foreground-muted md:text-[15px]">
                        {t
                          .raw(`items.${exp.key}.descriptionParagraphs`)
                          .map((p: string, idx: number) => (
                            <p key={idx}>{p}</p>
                          ))}
                      </div>

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-foreground-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-20 grid grid-cols-2 gap-6 border-t border-border pt-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.key}>
              <div className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                {s.value}
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground-subtle">
                {t(`stats.${s.key}`)}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </SectionWrapper>
  );
}

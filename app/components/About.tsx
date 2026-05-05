'use client';

import { useTranslations } from 'next-intl';
import { GraduationCap, Globe2 } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import { PortfolioData } from '../models/PortfolioData';

const data = PortfolioData.getInstance();

export default function About() {
  const t = useTranslations('about');
  const education = data.getEducation();
  const langKeys = data.getLanguageKeys();

  return (
    <SectionWrapper id="about">
      <SectionHeader eyebrow={t('eyebrow')} title={t('title')} />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-7" delay={0.05}>
          <div className="space-y-6">
            <p className="text-balance text-xl font-medium leading-relaxed tracking-tight text-foreground md:text-2xl">
              {t('paragraph1')}
            </p>
            <p className="text-pretty text-base leading-relaxed text-foreground-muted md:text-lg">
              {t('paragraph2')}
            </p>
          </div>

          <div className="mt-12">
            <div className="mb-5 flex items-center gap-2.5">
              <Globe2 size={14} strokeWidth={1.75} className="text-accent" />
              <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground-muted">
                {t('languagesTitle')}
              </h3>
            </div>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {langKeys.map((key) => (
                <li
                  key={key}
                  className="rounded-2xl border border-border bg-card/50 p-4 backdrop-blur"
                >
                  <div className="font-display text-base font-medium text-foreground">
                    {t(`languages.${key}.name`)}
                  </div>
                  <div className="mt-1 text-sm text-foreground-muted">
                    {t(`languages.${key}.level`)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={0.15}>
          <div className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur md:p-8">
            <div className="mb-6 flex items-center gap-2.5">
              <GraduationCap size={14} strokeWidth={1.75} className="text-accent" />
              <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground-muted">
                {t('educationTitle')}
              </h3>
            </div>
            <div className="space-y-7">
              {education.map((edu, i) => (
                <div
                  key={edu.key}
                  className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-accent/70"
                >
                  <h4 className="font-display text-base font-medium text-foreground">
                    {t(`education.${edu.key}.degree`)}
                  </h4>
                  <p className="mt-1 text-sm text-foreground-muted">
                    {t(`education.${edu.key}.institution`)}
                  </p>
                  <span className="mt-1 block font-mono text-[11px] uppercase tracking-wider text-foreground-subtle">
                    {t(`education.${edu.key}.period`)}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                    {t(`education.${edu.key}.description`)}
                  </p>
                  {i < education.length - 1 && (
                    <div className="mt-7 border-t border-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}

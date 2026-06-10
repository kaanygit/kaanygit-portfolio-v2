'use client';

import { useTranslations } from 'next-intl';
import SectionWrapper from './ui/SectionWrapper';
import SectionHeader from './ui/SectionHeader';
import SplitLines from './ui/SplitLines';
import Reveal from './ui/Reveal';
import { PortfolioData } from '../models/PortfolioData';

const data = PortfolioData.getInstance();

export default function About() {
  const t = useTranslations('about');
  const education = data.getEducation();
  const langKeys = data.getLanguageKeys();

  return (
    <SectionWrapper id="about">
      <SectionHeader index="01" eyebrow={t('eyebrow')} title={t('title')} />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Sticky meta column */}
        <div className="lg:col-span-3">
          <div className="lg:sticky lg:top-24">
            <Reveal>
              <h3 className="mono-label text-gray-1">{t('languagesTitle')}</h3>
              <ul className="mt-4 space-y-3">
                {langKeys.map((key) => (
                  <li key={key} className="flex items-baseline justify-between gap-4">
                    <span className="font-display text-base font-semibold uppercase tracking-tight text-foreground">
                      {t(`languages.${key}.name`)}
                    </span>
                    <span className="mono-label text-gray-1">
                      {t(`languages.${key}.level`)}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Body */}
        <div className="lg:col-span-8 lg:col-start-5">
          <SplitLines
            as="p"
            className="font-display text-[clamp(24px,3vw,44px)] font-semibold leading-[1.15] tracking-tight text-foreground"
          >
            {t('paragraph1')}
          </SplitLines>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-gray-1 md:text-lg">
              {t('paragraph2')}
            </p>
          </Reveal>

          {/* Education table */}
          <div className="mt-16">
            <Reveal>
              <h3 className="mono-label mb-2 text-gray-1">{t('educationTitle')}</h3>
            </Reveal>
            <div className="hairline-b">
              {education.map((edu) => (
                <Reveal key={edu.key}>
                  <div className="group hairline-t grid grid-cols-1 gap-3 py-6 transition-colors duration-300 hover:bg-foreground hover:text-background md:grid-cols-12 md:gap-8 md:px-4">
                    <span className="mono-label pt-1 text-gray-1 transition-colors group-hover:text-background/60 md:col-span-3">
                      {t(`education.${edu.key}.period`)}
                    </span>
                    <div className="md:col-span-9">
                      <h4 className="font-display text-xl font-bold uppercase tracking-tight md:text-2xl">
                        {t(`education.${edu.key}.degree`)}
                      </h4>
                      <p className="mt-1 text-sm text-gray-1 transition-colors group-hover:text-background/70">
                        {t(`education.${edu.key}.institution`)}
                      </p>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-1 transition-colors group-hover:text-background/70">
                        {t(`education.${edu.key}.description`)}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

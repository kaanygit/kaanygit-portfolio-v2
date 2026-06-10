'use client';

import { useTranslations } from 'next-intl';
import SectionWrapper from './ui/SectionWrapper';
import SectionHeader from './ui/SectionHeader';
import SplitLines from './ui/SplitLines';
import Reveal from './ui/Reveal';
import { PortfolioData } from '../models/PortfolioData';

const data = PortfolioData.getInstance();

export default function Experience() {
  const t = useTranslations('experience');
  const experiences = data.getExperiences();
  const stats = data.getExperienceStats();

  return (
    <SectionWrapper id="experience">
      <SectionHeader index="02" eyebrow={t('eyebrow')} title={t('title')} />

      <div className="hairline-b">
        {experiences.map((exp, i) => (
          <article
            key={exp.key}
            className="group hairline-t relative grid grid-cols-1 gap-6 py-10 transition-colors duration-300 hover:bg-foreground hover:text-background md:grid-cols-12 md:gap-8 md:px-4 md:py-14"
          >
            <span className="mono-label pt-2 text-gray-1 transition-colors group-hover:text-background/60 md:col-span-1">
              0{i + 1}
            </span>

            <div className="md:col-span-7">
              <SplitLines
                as="h3"
                className="display-huge break-words text-[clamp(26px,3.8vw,56px)]"
              >
                {t(`items.${exp.key}.company`)}
              </SplitLines>
              <p className="mt-2 font-display text-base font-semibold uppercase tracking-tight text-gray-1 transition-colors group-hover:text-background/70 md:text-lg">
                {exp.link ? (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw focus-ring"
                  >
                    {t(`items.${exp.key}.title`)} ↗
                  </a>
                ) : (
                  t(`items.${exp.key}.title`)
                )}
              </p>

              <div className="mt-6 max-w-prose space-y-3 text-sm leading-relaxed text-gray-1 transition-colors group-hover:text-background/70 md:text-[15px]">
                {t
                  .raw(`items.${exp.key}.descriptionParagraphs`)
                  .map((p: string, idx: number) => (
                    <p key={idx}>{p}</p>
                  ))}
              </div>

              <p className="mono-label mt-6 text-gray-1 transition-colors group-hover:text-background/60">
                {exp.technologies.join(' / ')}
              </p>
            </div>

            <div className="mono-label flex flex-row flex-wrap gap-x-6 gap-y-1 text-gray-1 transition-colors group-hover:text-background/60 md:col-span-4 md:flex-col md:items-end md:pt-3">
              <span className="text-foreground transition-colors group-hover:text-background">
                {t(`items.${exp.key}.period`)}
              </span>
              <span>{t(`items.${exp.key}.type`)}</span>
              <span>{t(`items.${exp.key}.location`)}</span>
            </div>
          </article>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-16 grid grid-cols-2 gap-y-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.key}>
              <div className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {s.value}
              </div>
              <div className="mono-label mt-2 text-gray-1">
                {t(`stats.${s.key}`)}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </SectionWrapper>
  );
}

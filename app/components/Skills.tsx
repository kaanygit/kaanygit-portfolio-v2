'use client';

import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import SectionWrapper from './ui/SectionWrapper';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import { PortfolioData } from '../models/PortfolioData';
import type { SkillCategory } from '../types';

const data = PortfolioData.getInstance();

const categoryOrder: SkillCategory[] = [
  'mobile',
  'frontend',
  'backend',
  'database',
  'ai',
  'tools',
];

export default function Skills() {
  const t = useTranslations('skills');
  const skills = data.getSkills();

  const grouped = skills.reduce<Record<SkillCategory, typeof skills>>(
    (acc, s) => {
      (acc[s.category] ||= []).push(s);
      return acc;
    },
    {} as Record<SkillCategory, typeof skills>
  );

  return (
    <SectionWrapper id="skills">
      <SectionHeader
        index="04"
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
      />

      {/* Legend */}
      <Reveal>
        <p className="mono-label mb-2 text-gray-1">
          <span className="font-bold text-foreground">{t('legend.expert')}</span>
          {' · '}
          <span className="text-foreground">{t('legend.advanced')}</span>
          {' · '}
          {t('legend.intermediate')}
        </p>
      </Reveal>

      <div className="hairline-b">
        {categoryOrder.map((cat) => {
          const list = grouped[cat];
          if (!list?.length) return null;
          return (
            <Reveal key={cat}>
              <div className="hairline-t grid grid-cols-1 gap-4 py-8 md:grid-cols-12 md:gap-8 md:py-10">
                <div className="mono-label flex items-baseline gap-3 text-gray-1 md:col-span-3 md:pt-2">
                  <span className="text-foreground">{t(`categories.${cat}`)}</span>
                  <span>({String(list.length).padStart(2, '0')})</span>
                </div>
                <p className="md:col-span-9">
                  {list.map((s, i) => (
                    <span key={s.id}>
                      <span
                        className={clsx(
                          'font-display text-xl uppercase tracking-tight md:text-2xl',
                          s.level === 'expert' && 'font-bold text-foreground',
                          s.level === 'advanced' && 'font-medium text-foreground',
                          s.level === 'intermediate' && 'font-medium text-gray-1'
                        )}
                      >
                        {s.name}
                      </span>
                      {i < list.length - 1 && (
                        <span aria-hidden className="px-2 text-xl text-gray-2 md:px-3 md:text-2xl">
                          /
                        </span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

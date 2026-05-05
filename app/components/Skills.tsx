'use client';

import { useTranslations } from 'next-intl';
import { Smartphone, Globe, Server, Database, Wrench, Brain } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import SkillBadge from './ui/SkillBadge';
import { PortfolioData } from '../models/PortfolioData';
import type { SkillCategory } from '../types';

const data = PortfolioData.getInstance();

const categoryIcon: Record<SkillCategory, React.ReactNode> = {
  mobile: <Smartphone size={15} strokeWidth={1.75} />,
  frontend: <Globe size={15} strokeWidth={1.75} />,
  backend: <Server size={15} strokeWidth={1.75} />,
  database: <Database size={15} strokeWidth={1.75} />,
  ai: <Brain size={15} strokeWidth={1.75} />,
  tools: <Wrench size={15} strokeWidth={1.75} />,
};

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
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {categoryOrder.map((cat, i) => {
          const list = grouped[cat];
          if (!list?.length) return null;
          return (
            <Reveal key={cat} delay={i * 0.05}>
              <div className="rounded-3xl border border-border bg-card/50 p-6 backdrop-blur md:p-7">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-surface-2 text-foreground">
                    {categoryIcon[cat]}
                  </span>
                  <div className="flex flex-1 items-center justify-between">
                    <h3 className="font-display text-base font-medium text-foreground">
                      {t(`categories.${cat}`)}
                    </h3>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-foreground-subtle">
                      {String(list.length).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {list.map((s) => (
                    <SkillBadge key={s.id} name={s.name} />
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

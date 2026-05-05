'use client';

import { useTranslations } from 'next-intl';
import { ArrowUpRight, Github } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import ProjectCard from './ui/ProjectCard';
import { PortfolioData } from '../models/PortfolioData';

const data = PortfolioData.getInstance();

export default function Projects() {
  const t = useTranslations('projects');
  const projects = data.getProjects();

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects">
      <SectionHeader
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <Reveal childSelector="[data-project-card]" childStagger={0.06}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featured.map((p, i) => (
            <div key={p.key} data-project-card className="md:col-span-1">
              <ProjectCard project={p} index={i} featured />
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <div key={p.key} data-project-card>
              <ProjectCard project={p} index={featured.length + i} />
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-16 flex justify-center">
          <a
            href="https://github.com/kaanygit"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring group inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-5 py-2.5 text-sm font-medium text-foreground-muted backdrop-blur transition-all duration-300 hover:border-border-strong hover:text-foreground"
          >
            <Github size={14} strokeWidth={1.75} />
            {t('ctaMore')}
            <ArrowUpRight
              size={14}
              strokeWidth={1.75}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}

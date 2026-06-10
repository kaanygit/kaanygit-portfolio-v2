'use client';

import Image from 'next/image';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import type { Project } from '../../types';
import SplitLines from './SplitLines';

interface ProjectLink {
  label: string;
  href: string;
}

function getProjectLinks(
  project: Project,
  t: (key: string) => string
): ProjectLink[] {
  const links: ProjectLink[] = [];
  if (project.liveUrl) {
    links.push({
      label: project.liveUrl.includes('play.google')
        ? t('links.playStore')
        : t('links.web'),
      href: project.liveUrl,
    });
  }
  if (project.appStoreUrl)
    links.push({ label: t('links.appStore'), href: project.appStoreUrl });
  if (project.huaweiUrl)
    links.push({ label: t('links.appGallery'), href: project.huaweiUrl });
  if (project.githubUrl)
    links.push({ label: t('links.github'), href: project.githubUrl });
  return links;
}

interface ProjectRowProps {
  project: Project;
  index: number;
  onEnter?: () => void;
  onLeave?: () => void;
}

export default function ProjectRow({
  project,
  index,
  onEnter,
  onLeave,
}: ProjectRowProps) {
  const t = useTranslations('projects');
  const links = getProjectLinks(project, t);
  const primaryHref = project.liveUrl ?? project.githubUrl ?? links[0]?.href;

  return (
    <article
      data-project-row
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
      className="group hairline-t relative transition-colors duration-300 hover:bg-foreground hover:text-background"
    >
      <div className="grid grid-cols-[auto_1fr_auto] items-start gap-x-5 px-1 py-8 md:grid-cols-12 md:gap-x-8 md:px-4 md:py-12">
        {/* Index + logo thumb */}
        <div className="flex items-center gap-4 md:col-span-1 md:flex-col md:items-start md:gap-3">
          <span className="mono-label pt-2 text-gray-1 transition-colors group-hover:text-background/60 md:pt-3">
            0{index + 1}
          </span>
          {project.imageUrl && (
            <span className="relative block h-10 w-10 shrink-0 overflow-hidden border border-hairline bg-background md:h-14 md:w-14">
              <Image
                src={project.imageUrl}
                alt=""
                fill
                sizes="56px"
                loading="eager"
                className={clsx(
                  'object-contain p-1.5',
                  project.imageInvertOnDark && 'dark:invert'
                )}
              />
            </span>
          )}
        </div>

        {/* Title + description */}
        <div className="md:col-span-7">
          <a
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring block"
            aria-label={t(`items.${project.key}.title`)}
          >
            <span className="absolute inset-0" aria-hidden />
            <SplitLines
              as="h3"
              className="display-huge break-words text-[clamp(28px,4.5vw,68px)]"
            >
              {t(`items.${project.key}.title`)}
            </SplitLines>
          </a>
          <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-gray-1 transition-colors group-hover:text-background/70 md:text-base">
            {t(`items.${project.key}.description`)}
          </p>
          {project.featured && (
            <span className="mono-label invert-block mt-4 inline-block px-2.5 py-1 transition-colors group-hover:bg-background group-hover:text-foreground">
              {t('featuredLabel')}
            </span>
          )}
        </div>

        {/* Meta column */}
        <div className="col-span-3 col-start-2 mt-6 flex flex-col gap-4 md:col-span-3 md:col-start-9 md:mt-1">
          <div className="mono-label flex flex-col gap-1 text-gray-1 transition-colors group-hover:text-background/60">
            <span>{project.category}</span>
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <div className="mono-label relative z-10 flex flex-wrap gap-x-4 gap-y-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw focus-ring transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <span
          aria-hidden
          className="hidden text-2xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:col-span-1 md:block md:justify-self-end"
        >
          ↗
        </span>
      </div>
    </article>
  );
}

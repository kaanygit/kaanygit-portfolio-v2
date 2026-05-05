'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowUpRight, Github, Globe } from 'lucide-react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { SiHuawei } from 'react-icons/si';
import clsx from 'clsx';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

export default function ProjectCard({ project, index, featured }: ProjectCardProps) {
  const t = useTranslations('projects');
  const tLinks = useTranslations('projects.links');

  const title = t(`items.${project.key}.title`);
  const description = t(`items.${project.key}.description`);

  const isPlay = project.liveUrl?.includes('play.google.com');
  const primaryHref =
    project.liveUrl ?? project.appStoreUrl ?? project.githubUrl ?? '#';

  return (
    <motion.a
      href={primaryHref}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className={clsx(
        'group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft-sm transition-all duration-500 hover:border-border-strong hover:shadow-soft-lg',
        featured && 'lg:row-span-2'
      )}
    >
      {/* Top — visual */}
      <div
        className={clsx(
          'relative flex items-center justify-center overflow-hidden bg-surface',
          featured ? 'aspect-[16/11]' : 'aspect-[16/10]'
        )}
      >
        <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-40 transition-opacity duration-700 group-hover:opacity-80" />
        {project.imageUrl && (
          <div className="relative flex h-24 w-24 items-center justify-center md:h-28 md:w-28">
            <Image
              src={project.imageUrl}
              alt={title}
              fill
              sizes="160px"
              className={clsx(
                'object-contain transition-transform duration-700 ease-out group-hover:scale-110',
                project.imageInvertOnDark && 'dark:invert'
              )}
            />
          </div>
        )}
        <span className="absolute left-5 top-5 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground-subtle">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/70 text-foreground-muted backdrop-blur transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
          <ArrowUpRight size={15} strokeWidth={1.75} />
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
        <h3 className="font-display text-xl font-medium tracking-tight text-foreground md:text-2xl">
          {title}
        </h3>
        <p className="text-pretty text-sm leading-relaxed text-foreground-muted md:text-base">
          {description}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-foreground-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-3 text-foreground-muted">
          {project.githubUrl && (
            <span
              onClick={(e) => {
                e.preventDefault();
                window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
              }}
              className="inline-flex items-center gap-1.5 text-xs transition-colors hover:text-foreground"
            >
              <Github size={13} strokeWidth={1.75} />
              {tLinks('github')}
            </span>
          )}
          {project.liveUrl && (
            <span className="inline-flex items-center gap-1.5 text-xs">
              {isPlay ? (
                <FaGooglePlay size={12} />
              ) : (
                <Globe size={13} strokeWidth={1.75} />
              )}
              {isPlay ? tLinks('playStore') : tLinks('web')}
            </span>
          )}
          {project.appStoreUrl && (
            <span className="inline-flex items-center gap-1.5 text-xs">
              <FaApple size={13} />
              {tLinks('appStore')}
            </span>
          )}
          {project.huaweiUrl && (
            <span className="inline-flex items-center gap-1.5 text-xs">
              <SiHuawei size={13} />
              {tLinks('appGallery')}
            </span>
          )}
        </div>
      </div>
    </motion.a>
  );
}

'use client';

import Image from 'next/image';
import { Github, ExternalLink, Globe } from 'lucide-react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import { SiHuawei } from 'react-icons/si';
import { PortfolioData } from '../models/PortfolioData';
import SectionHeader from './ui/SectionHeader';
import ScrollReveal from './ui/ScrollReveal';

const imageMap: Record<string, { src: string; className?: string }> = {
  '1': { src: '/lawantra-logo.svg' },
  '2': { src: '/dreeys-logo.png' },
  '3': { src: '/coachun-logo.svg', className: 'dark:invert' },
  '4': { src: '/ppazar-logo.png' },
  '5': { src: '/spory-logo.png' },
  '6': { src: '/harmopy-logo.avif' },
  '7': { src: '/accesible-route-logo.png' },
};

export default function Projects() {
  const data = PortfolioData.getInstance();
  const projects = data.getProjects();

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Projeler"
          subtitle="Geliştirdiğim mobil uygulama projeleri"
        />

        <div className="space-y-0">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-12 border-b border-border items-center">
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="font-display text-5xl md:text-6xl font-bold text-border">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Image */}
                <div className="md:col-span-2 flex justify-center md:justify-start">
                  {imageMap[project.id] && (
                    <div className="w-20 h-20 md:w-24 md:h-24 relative rounded-xl overflow-hidden bg-surface">
                      <Image
                        src={imageMap[project.id].src}
                        alt={project.title}
                        fill
                        className={`object-contain ${imageMap[project.id].className || ''}`}
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="md:col-span-6 space-y-3">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground border border-border px-3 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="md:col-span-3 flex flex-wrap md:flex-col items-start gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={16} />
                      <span className="font-mono text-xs">GitHub</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {project.liveUrl.includes('play.google.com') ? (
                        <>
                          <FaGooglePlay size={14} />
                          <span className="font-mono text-xs">Google Play</span>
                        </>
                      ) : (
                        <>
                          <Globe size={14} />
                          <span className="font-mono text-xs">Web</span>
                        </>
                      )}
                    </a>
                  )}
                  {project.appStoreUrl && (
                    <a
                      href={project.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <FaApple size={16} />
                      <span className="font-mono text-xs">App Store</span>
                    </a>
                  )}
                  {project.huaweiUrl && (
                    <a
                      href={project.huaweiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <SiHuawei size={16} />
                      <span className="font-mono text-xs">AppGallery</span>
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* GitHub CTA */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12 text-center">
            <a
              href="https://github.com/kaanygit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors font-mono text-sm"
            >
              <Github size={16} />
              Daha fazla proje için GitHub
              <ExternalLink size={14} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

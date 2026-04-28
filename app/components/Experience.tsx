'use client';

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { FaLaptopCode } from 'react-icons/fa';
import { PortfolioData } from '../models/PortfolioData';
import SectionHeader from './ui/SectionHeader';
import ScrollReveal from './ui/ScrollReveal';

const companyLogoMap: Record<string, string> = {
  '1': '/lawantra-logo.svg',
  '2': '/appgamedo-logo.webp',
  '4': '/yandex-logo.png',
};

export default function Experience() {
  const data = PortfolioData.getInstance();
  const experiences = data.getExperiences();

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader title="Deneyim" />

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.id} delay={i * 0.1}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 py-10">
                <div className="md:col-span-1">
                  <span className="font-mono text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <div className="flex items-start gap-4">
                    {companyLogoMap[exp.id] ? (
                      <div className="w-12 h-12 relative rounded-lg overflow-hidden bg-surface flex-shrink-0">
                        <Image
                          src={companyLogoMap[exp.id]}
                          alt={exp.company}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center flex-shrink-0">
                        <FaLaptopCode className="text-accent" size={20} />
                      </div>
                    )}
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        {exp.link ? (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent font-body font-medium inline-flex items-center gap-1 hover:underline"
                          >
                            {exp.company}
                            <ExternalLink size={12} />
                          </a>
                        ) : (
                          <span className="text-accent font-body font-medium">
                            {exp.company}
                          </span>
                        )}
                        {exp.type && (
                          <span className="font-mono text-xs text-muted-foreground border border-border px-2 py-0.5 rounded">
                            {exp.type}
                          </span>
                        )}
                        {exp.location && (
                          <span className="font-mono text-xs text-muted-foreground">
                            · {exp.location}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-muted-foreground mt-4 leading-relaxed space-y-2">
                    {exp.description.split('\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground border border-border px-3 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {i < experiences.length - 1 && (
                <div className="border-b border-border" />
              )}
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-8 border-t border-border">
            {[
              { value: '10+', label: 'Mobil Uygulama' },
              { value: '2.5+', label: 'Yıl Deneyim' },
              { value: '100+', label: 'Koç' },
              { value: '200+', label: 'Kullanıcı' },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <span className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  {stat.value}
                </span>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

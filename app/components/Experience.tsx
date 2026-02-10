'use client';

import { PortfolioData } from '../models/PortfolioData';
import SectionHeader from './ui/SectionHeader';
import ScrollReveal from './ui/ScrollReveal';

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
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-accent font-body font-medium mt-1">
                    {exp.company}
                  </p>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    {exp.description}
                  </p>
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

        {/* Stats */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-3 gap-8 mt-20 pt-8 border-t border-border">
            {[
              { value: '10+', label: 'Uygulama' },
              { value: '2.5+', label: 'Yıl Deneyim' },
              { value: '%100', label: 'Memnuniyet' },
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

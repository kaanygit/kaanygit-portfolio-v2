'use client';

import { PortfolioData } from '../models/PortfolioData';
import SectionHeader from './ui/SectionHeader';
import ScrollReveal from './ui/ScrollReveal';

export default function About() {
  const data = PortfolioData.getInstance();
  const personalInfo = data.getPersonalInfo();
  const education = data.getEducation();

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader title="Hakkımda" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Summary & Languages */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <p className="text-foreground text-lg md:text-xl leading-relaxed">
                {personalInfo.summary}
              </p>

              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">
                  Diller
                </h3>
                <div className="flex gap-6">
                  {personalInfo.languages.map((lang) => (
                    <div key={lang.name} className="flex items-baseline gap-2">
                      <span className="font-display font-semibold text-foreground">
                        {lang.name}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Education */}
          <ScrollReveal direction="right">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-8">
                Eğitim
              </h3>
              <div className="space-y-8">
                {education.map((edu) => (
                  <div key={edu.id} className="border-l-2 border-border pl-6">
                    <h4 className="font-display text-lg font-semibold text-foreground">
                      {edu.degree}
                    </h4>
                    <p className="text-accent font-body font-medium mt-1">
                      {edu.institution}
                    </p>
                    <span className="font-mono text-xs text-muted-foreground mt-1 block">
                      {edu.period}
                    </span>
                    {edu.description && (
                      <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

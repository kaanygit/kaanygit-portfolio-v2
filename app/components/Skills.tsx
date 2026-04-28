'use client';

import { Smartphone, Globe, Server, Database, Wrench, Brain } from 'lucide-react';
import { PortfolioData } from '../models/PortfolioData';
import SectionHeader from './ui/SectionHeader';
import ScrollReveal from './ui/ScrollReveal';

const categoryConfig: Record<string, { label: string; icon: React.ReactNode }> = {
  mobile: { label: 'Mobil', icon: <Smartphone size={18} /> },
  frontend: { label: 'Frontend', icon: <Globe size={18} /> },
  backend: { label: 'Backend', icon: <Server size={18} /> },
  database: { label: 'Veritabanı ve Cloud', icon: <Database size={18} /> },
  ai: { label: 'AI ve Veri', icon: <Brain size={18} /> },
  tools: { label: 'Araçlar', icon: <Wrench size={18} /> },
};

const categoryOrder = ['mobile', 'frontend', 'backend', 'database', 'ai', 'tools'];

export default function Skills() {
  const data = PortfolioData.getInstance();
  const skills = data.getSkills();

  const grouped = skills.reduce(
    (acc, skill) => {
      const cat = skill.category;
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(skill);
      return acc;
    },
    {} as Record<string, typeof skills>
  );

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Yetenekler"
          subtitle="Kullandığım teknolojiler ve araçlar"
        />

        <div className="space-y-12">
          {categoryOrder.map((category, i) => {
            const categorySkills = grouped[category];
            if (!categorySkills) return null;
            const config = categoryConfig[category];
            if (!config) return null;

            return (
              <ScrollReveal key={category} delay={i * 0.08}>
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-accent">{config.icon}</span>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {config.label}
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      ({categorySkills.length})
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <span
                        key={skill.id}
                        className={`font-mono text-xs px-3 py-1.5 rounded border transition-colors ${
                          skill.level === 'expert'
                            ? 'border-accent text-accent'
                            : skill.level === 'advanced'
                            ? 'border-foreground/30 text-foreground'
                            : 'border-border text-muted-foreground'
                        }`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full border-2 border-accent" />
              <span className="font-mono text-xs text-muted-foreground">Uzman</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full border-2 border-foreground/30" />
              <span className="font-mono text-xs text-muted-foreground">İleri</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full border-2 border-border" />
              <span className="font-mono text-xs text-muted-foreground">Orta</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

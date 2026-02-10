'use client';

import { Check, Zap, Star, Crown, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { PortfolioData } from '../models/PortfolioData';
import SectionHeader from './ui/SectionHeader';
import ScrollReveal from './ui/ScrollReveal';

const levelIcons: Record<string, React.ReactNode> = {
  beginner: <Zap size={20} />,
  intermediate: <Star size={20} />,
  advanced: <Crown size={20} />,
};

const levelLabels: Record<string, string> = {
  beginner: 'Başlangıç',
  intermediate: 'Orta',
  advanced: 'İleri',
};

export default function Services() {
  const data = PortfolioData.getInstance();
  const services = data.getServices();
  const contactInfo = data.getContactInfo();

  const phone = contactInfo.phone.replace(/[\s+]/g, '');

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Hizmetler"
          subtitle="Projenize uygun paketi seçin"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.1}>
              <div
                className={`border rounded-xl p-8 h-full flex flex-col ${
                  service.level === 'intermediate'
                    ? 'border-accent bg-accent/5'
                    : 'border-border'
                }`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-accent">{levelIcons[service.level]}</span>
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {levelLabels[service.level]}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mt-2">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                  {service.description}
                </p>

                <div className="font-mono text-xs text-muted-foreground mt-3">
                  Süre: {service.duration}
                </div>

                {/* Features */}
                <ul className="mt-6 space-y-3 flex-1">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <Check size={14} className="text-accent mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mt-6">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Contact CTAs instead of price */}
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="font-display text-sm font-semibold text-foreground mb-3">
                    Bana Ulaşın
                  </p>
                  <div className="flex flex-col gap-2">
                    <a
                      href={`https://wa.me/${phone}?text=${encodeURIComponent(
                        `Merhaba, ${service.name} hakkında bilgi almak istiyorum`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#20BD5A] transition-colors"
                    >
                      <FaWhatsapp size={16} />
                      WhatsApp
                    </a>
                    <a
                      href={`mailto:${contactInfo.email}?subject=${encodeURIComponent(
                        `${service.name} Hakkında Bilgi`
                      )}`}
                      className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-4 py-2.5 rounded-lg text-sm font-medium hover:border-accent hover:text-accent transition-colors"
                    >
                      <Mail size={14} />
                      E-posta Gönder
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Custom project CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 text-center border-t border-border pt-12">
            <p className="text-foreground font-display text-lg font-semibold mb-2">
              Özel projeniz mi var?
            </p>
            <p className="text-muted-foreground text-sm mb-6">
              Size özel çözüm için bana ulaşın
            </p>
            <div className="flex justify-center gap-4">
              <a
                href={`https://wa.me/${phone}?text=${encodeURIComponent(
                  'Merhaba, özel bir proje hakkında görüşmek istiyorum'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-accent-hover transition-colors"
              >
                <FaWhatsapp size={16} />
                WhatsApp ile Yazın
              </a>
              <a
                href={`mailto:${contactInfo.email}?subject=${encodeURIComponent(
                  'Özel Proje Hakkında'
                )}`}
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg text-sm font-medium hover:border-accent hover:text-accent transition-colors"
              >
                <Mail size={14} />
                E-posta
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

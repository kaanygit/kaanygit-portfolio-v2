'use client';

import { useTranslations } from 'next-intl';
import { Check, Sparkles, Mail, ArrowUpRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import clsx from 'clsx';
import SectionWrapper from './ui/SectionWrapper';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import { PortfolioData } from '../models/PortfolioData';

const data = PortfolioData.getInstance();

export default function Services() {
  const t = useTranslations('services');
  const services = data.getServices();
  const contact = data.getContactInfo();
  const phone = contact.phone.replace(/[\s+]/g, '');

  return (
    <SectionWrapper id="services">
      <SectionHeader
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <Reveal childSelector="[data-pkg]" childStagger={0.07}>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {services.map((svc) => {
            const isFeatured = svc.featured;
            const name = t(`packages.${svc.key}.name`);
            const description = t(`packages.${svc.key}.description`);
            const features = t.raw(`packages.${svc.key}.features`) as string[];
            const wamsg = t('packageMessage', { name });
            const subj = t('packageEmailSubject', { name });

            return (
              <div
                key={svc.key}
                data-pkg
                className={clsx(
                  'relative flex h-full flex-col rounded-3xl border bg-card/60 p-7 backdrop-blur transition-all duration-500 md:p-8',
                  isFeatured
                    ? 'border-accent/50 shadow-soft-glow'
                    : 'border-border hover:border-border-strong hover:shadow-soft-md'
                )}
              >
                {isFeatured && (
                  <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[11px] font-medium text-accent-foreground shadow-soft-md">
                    <Sparkles size={12} strokeWidth={2} />
                    {t('popularBadge')}
                  </span>
                )}

                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground-subtle">
                    {t(`levels.${svc.level}`)}
                  </span>
                  <span className="font-mono text-[11px] text-foreground-subtle">
                    {svc.duration}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-2xl font-medium tracking-tight text-foreground">
                  {name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {description}
                </p>

                <ul className="mt-7 space-y-3">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <span
                        className={clsx(
                          'mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full',
                          isFeatured
                            ? 'bg-accent text-accent-foreground'
                            : 'bg-accent-soft text-accent'
                        )}
                      >
                        <Check size={10} strokeWidth={3} />
                      </span>
                      <span className="text-foreground-muted">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-1.5 border-t border-border pt-6">
                  {svc.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-foreground-subtle"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-7">
                  <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-foreground-subtle">
                    {t('contactLabel')}
                  </p>
                  <div className="flex flex-col gap-2">
                    <a
                      href={`https://wa.me/${phone}?text=${encodeURIComponent(wamsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={clsx(
                        'focus-ring inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300',
                        isFeatured
                          ? 'bg-foreground text-background hover:bg-foreground/90'
                          : 'border border-border bg-card text-foreground hover:border-border-strong'
                      )}
                    >
                      <FaWhatsapp size={14} />
                      {t('whatsapp')}
                    </a>
                    <a
                      href={`mailto:${contact.email}?subject=${encodeURIComponent(subj)}`}
                      className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-foreground-muted transition-all duration-300 hover:border-border-strong hover:text-foreground"
                    >
                      <Mail size={13} strokeWidth={1.75} />
                      {t('email')}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-20 rounded-3xl border border-border bg-card/40 p-8 text-center backdrop-blur md:p-12">
          <h3 className="text-balance font-display text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            {t('custom.title')}
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-sm leading-relaxed text-foreground-muted md:text-base">
            {t('custom.subtitle')}
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(t('custom.whatsappMessage'))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:bg-foreground/90"
            >
              <FaWhatsapp size={14} />
              {t('custom.whatsappCta')}
              <ArrowUpRight size={14} strokeWidth={1.75} />
            </a>
            <a
              href={`mailto:${contact.email}?subject=${encodeURIComponent(t('custom.emailSubject'))}`}
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-border-strong"
            >
              <Mail size={14} strokeWidth={1.75} />
              {t('custom.emailCta')}
            </a>
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}

'use client';

import clsx from 'clsx';
import { Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import SectionWrapper from './ui/SectionWrapper';
import SectionHeader from './ui/SectionHeader';
import SplitLines from './ui/SplitLines';
import Reveal from './ui/Reveal';
import { PortfolioData } from '../models/PortfolioData';

const data = PortfolioData.getInstance();

export default function Services() {
  const t = useTranslations('services');
  const services = data.getServices();
  const contact = data.getContactInfo();
  const phone = contact.phone.replace(/[\s+]/g, '');

  return (
    <SectionWrapper id="services" className="pb-0 md:pb-0 lg:pb-0">
      <SectionHeader
        index="05"
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <Reveal childSelector="[data-pkg]" childStagger={0.07}>
        <div className="hairline-b mb-20 grid grid-cols-1 md:mb-28 lg:grid-cols-3">
          {services.map((svc, idx) => {
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
                  'flex h-full flex-col py-8 lg:px-8 lg:py-10',
                  idx === 0 && 'lg:pl-0',
                  idx > 0 && 'lg:hairline-l',
                  idx > 0 && !isFeatured && 'hairline-t lg:border-t-0',
                  isFeatured && 'border-t-2 border-t-foreground'
                )}
              >
                <div className="mono-label flex items-center justify-between text-gray-1">
                  <span>{t(`levels.${svc.level}`)}</span>
                  {isFeatured && (
                    <span className="invert-block px-2.5 py-1">{t('popularBadge')}</span>
                  )}
                </div>

                <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl">
                  {name}
                </h3>
                <div className="mt-3 font-display text-[clamp(28px,2.5vw,44px)] font-extrabold tracking-tight text-foreground">
                  {svc.price}
                </div>
                <p className="mono-label mt-2 text-gray-1">
                  {t('durationLabel')}: {svc.duration}
                </p>

                <p className="mt-6 text-sm leading-relaxed text-gray-1">
                  {description}
                </p>

                <ul className="mt-8">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="hairline-t flex items-start gap-3 py-2.5 text-sm text-foreground"
                    >
                      <span aria-hidden className="font-mono text-gray-1">+</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className="mono-label mt-6 text-gray-2">
                  {svc.technologies.join(' / ')}
                </p>

                <div className="mt-auto pt-8">
                  <p className="mono-label mb-3 text-gray-1">{t('contactLabel')}</p>
                  <div className="mono-label flex flex-wrap gap-x-6 gap-y-3">
                    <a
                      href={`https://wa.me/${phone}?text=${encodeURIComponent(wamsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-draw focus-ring inline-flex items-center gap-2 text-foreground"
                    >
                      <FaWhatsapp size={15} />
                      {t('whatsapp')}
                    </a>
                    <a
                      href={`mailto:${contact.email}?subject=${encodeURIComponent(subj)}`}
                      className="link-draw focus-ring inline-flex items-center gap-2 text-foreground"
                    >
                      <Mail size={14} strokeWidth={1.75} />
                      {t('email')}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>

      {/* Full-bleed inverted band */}
      <div className="invert-block -mx-5 px-5 py-20 md:-mx-10 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <SplitLines
            as="h3"
            className="display-huge max-w-4xl text-[clamp(32px,5.5vw,80px)]"
          >
            {t('custom.title')}
          </SplitLines>
          <p className="mt-6 max-w-xl text-pretty text-sm leading-relaxed opacity-70 md:text-base">
            {t('custom.subtitle')}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(t('custom.whatsappMessage'))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label focus-ring inline-flex items-center gap-2.5 border border-background/40 px-6 py-3.5 transition-colors hover:bg-background hover:text-foreground"
            >
              <FaWhatsapp size={16} />
              {t('custom.whatsappCta')}
            </a>
            <a
              href={`mailto:${contact.email}?subject=${encodeURIComponent(t('custom.emailSubject'))}`}
              className="mono-label focus-ring inline-flex items-center gap-2.5 border border-background/40 px-6 py-3.5 transition-colors hover:bg-background hover:text-foreground"
            >
              <Mail size={15} strokeWidth={1.75} />
              {t('custom.emailCta')}
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

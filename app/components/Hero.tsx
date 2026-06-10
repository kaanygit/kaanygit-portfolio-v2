'use client';

import { useRef } from 'react';
import clsx from 'clsx';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useGSAP } from '@gsap/react';
import { gsap, PREFERS_MOTION } from '../lib/gsap';
import { PortfolioData } from '../models/PortfolioData';
import SplitLines from './ui/SplitLines';
import CountUp from './ui/CountUp';
import Marquee from './ui/Marquee';
import Reveal from './ui/Reveal';
import { useMagnetic } from '../hooks/useMagnetic';

const data = PortfolioData.getInstance();

interface StatNumber {
  raw: number;
  decimals: number;
  suffix: string;
}

function parseStat(value: string): StatNumber {
  const match = value.match(/^([\d.]+)([^\d]*)$/);
  if (!match) return { raw: 0, decimals: 0, suffix: value };
  const raw = parseFloat(match[1]);
  const decimals = match[1].includes('.') ? 1 : 0;
  return { raw, decimals, suffix: match[2] ?? '' };
}

export default function Hero() {
  const t = useTranslations('hero');
  const root = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const ctaRef = useMagnetic<HTMLAnchorElement>({
    strength: 10,
    innerSelector: '[data-cta-icon]',
  });

  const contact = data.getContactInfo();
  const { firstName, lastName } = data.getHeroName();
  const stats = data.getHeroStats().filter((s) => s.key !== 'ai');
  const marqueeItems = data
    .getSkills()
    .filter((s) => s.level !== 'intermediate')
    .map((s) => s.name);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const mm = gsap.matchMedia();

      mm.add(PREFERS_MOTION, () => {
        gsap.to(nameRef.current, {
          yPercent: -12,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });

        gsap.from('[data-hero-line]', {
          opacity: 0,
          y: 16,
          duration: 0.9,
          ease: 'power4.out',
          delay: 0.25,
          stagger: 0.15,
        });

        gsap.to('[data-scroll-hint-line]', {
          scaleY: 0,
          transformOrigin: 'top center',
          repeat: -1,
          yoyo: true,
          duration: 1.2,
          ease: 'power2.inOut',
        });
      });
      return () => mm.revert();
    },
    { scope: root as React.RefObject<HTMLElement> }
  );

  const socials = [
    {
      icon: <Github size={18} strokeWidth={1.75} />,
      href: `https://${contact.github}`,
      name: 'GitHub',
    },
    {
      icon: <Linkedin size={18} strokeWidth={1.75} />,
      href: `https://${contact.linkedin}`,
      name: 'LinkedIn',
    },
    {
      icon: <Mail size={18} strokeWidth={1.75} />,
      href: `mailto:${contact.email}`,
      name: 'Email',
    },
  ];

  return (
    <section ref={root} id="home" className="relative overflow-hidden">
      <div className="mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col px-5 pt-14 md:px-10">
        {/* Meta row */}
        <div data-hero-line className="hairline-b mt-6 md:mt-8">
          <div className="mono-label flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-3 text-gray-1">
            <span>{t('eyebrow')}</span>
            <span className="flex items-center gap-2 text-foreground">
              <span aria-hidden className="inline-block h-1.5 w-1.5 animate-pulse bg-foreground" />
              {t('availability')}
            </span>
            <span className="hidden md:inline">
              {t('location')} — ©{new Date().getFullYear()}
            </span>
          </div>
        </div>

        {/* Name block */}
        <div ref={nameRef} className="flex flex-1 flex-col justify-center py-10">
          <h1 className="display-huge text-[clamp(44px,10vw,185px)]">
            <SplitLines
              as="span"
              split="chars"
              trigger="load"
              delay={0.35}
              className="block whitespace-nowrap"
            >
              {firstName}
            </SplitLines>
            <SplitLines
              as="span"
              split="chars"
              trigger="load"
              delay={0.6}
              className="text-stroke block whitespace-nowrap"
            >
              {lastName}
            </SplitLines>
          </h1>
          <p className="sr-only">
            {t('headlineLine1')} {t('headlineLine2')}
          </p>

          {/* Bottom row */}
          <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 lg:grid-cols-12">
            <Reveal delay={0.9} className="lg:col-span-5">
              <p className="max-w-xl text-pretty text-base leading-relaxed text-gray-1 md:text-lg">
                {t('summary')}
              </p>
            </Reveal>

            <Reveal delay={1.05} className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-5 lg:justify-end">
                <a
                  ref={ctaRef}
                  href="#projects"
                  className="invert-block focus-ring group inline-flex items-center gap-3 px-7 py-4 text-sm font-medium"
                  style={{ willChange: 'transform' }}
                >
                  {t('ctaPrimary')}
                  <span data-cta-icon className="inline-flex transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
                <a
                  href="#contact"
                  className="link-draw focus-ring text-sm font-medium text-foreground"
                >
                  {t('ctaSecondary')}
                </a>
                <div className="flex items-center gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target={s.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      title={s.name}
                      className="focus-ring inline-flex h-11 w-11 items-center justify-center border border-hairline text-gray-1 transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats strip */}
        <div data-hero-line className="hairline-t">
          <Reveal delay={1.2} className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => {
              const parsed = parseStat(s.value);
              return (
                <div
                  key={s.key}
                  className={clsx(
                    'flex flex-col gap-1 py-6',
                    i % 2 === 1 && 'hairline-l pl-6',
                    i === 2 && 'lg:hairline-l lg:pl-6',
                    i >= 2 && 'hairline-t lg:border-t-0'
                  )}
                >
                  <CountUp
                    value={parsed.raw}
                    decimals={parsed.decimals}
                    suffix={parsed.suffix}
                    className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl"
                  />
                  <span className="mono-label text-gray-1">{t(`stats.${s.key}`)}</span>
                </div>
              );
            })}
          </Reveal>
        </div>

        {/* Scroll hint */}
        <div className="flex items-center justify-center gap-3 py-5">
          <span className="mono-label text-gray-2">{t('scrollHint')}</span>
          <span
            data-scroll-hint-line
            aria-hidden
            className="block h-6 w-px bg-foreground"
          />
        </div>
      </div>

      {/* Tech marquee band */}
      <Marquee label={t('marqueeLabel')} items={marqueeItems} />
    </section>
  );
}

'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';
import { PortfolioData } from '../models/PortfolioData';
import AnimatedText from './ui/AnimatedText';
import AvailabilityBadge from './ui/AvailabilityBadge';
import AuroraMesh from './ui/AuroraMesh';
import HeroProjectStack from './ui/HeroProjectStack';
import CountUp from './ui/CountUp';
import TechMarquee from './ui/TechMarquee';
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
  const ctaRef = useMagnetic<HTMLAnchorElement>({ strength: 10, innerSelector: '[data-cta-icon]' });

  const contact = data.getContactInfo();
  const stats = data.getHeroStats().filter((s) => s.key !== 'ai');

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.to('[data-hero-side]', {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      });
      return () => mm.revert();
    },
    { scope: root as React.RefObject<HTMLElement> }
  );

  return (
    <section
      ref={root}
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-12 pt-28 md:pb-20 md:pt-32"
    >
      <AuroraMesh />

      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-8 lg:px-10">
        <div className="mb-8 flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.05 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/60 px-3.5 py-1.5 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground-muted">
              {t('eyebrow')}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.18 }}
          >
            <AvailabilityBadge />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h1 className="font-display text-[40px] font-medium leading-[1.02] tracking-tightest text-foreground sm:text-6xl md:text-7xl lg:text-[80px]">
              <AnimatedText
                as="span"
                text={t('headlineLine1')}
                splitBy="word"
                stagger={0.05}
                delay={0.1}
                className="block"
              />
              <AnimatedText
                as="span"
                text={t('headlineLine2')}
                splitBy="word"
                stagger={0.05}
                delay={0.32}
                className="block gradient-accent"
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.7 }}
              className="mt-8 max-w-xl text-balance text-base leading-relaxed text-foreground-muted md:text-lg"
            >
              {t('summary')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.85 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                ref={ctaRef}
                href="#projects"
                className="focus-ring group relative inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors duration-300 hover:bg-foreground/90"
                style={{ willChange: 'transform' }}
              >
                {t('ctaPrimary')}
                <span data-cta-icon className="inline-flex">
                  <ArrowRight
                    size={15}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </span>
              </a>
              <a
                href="#contact"
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-all duration-300 hover:border-border-strong hover:bg-card"
              >
                {t('ctaSecondary')}
              </a>

              <div className="ml-2 flex items-center gap-3">
                <a
                  href={`https://${contact.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-foreground-subtle transition-colors hover:text-foreground"
                >
                  <Github size={18} strokeWidth={1.5} />
                </a>
                <a
                  href={`https://${contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-foreground-subtle transition-colors hover:text-foreground"
                >
                  <Linkedin size={18} strokeWidth={1.5} />
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  aria-label="Email"
                  className="text-foreground-subtle transition-colors hover:text-foreground"
                >
                  <Mail size={18} strokeWidth={1.5} />
                </a>
              </div>
            </motion.div>

            {/* Inline stats strip with count-up */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 1.05 }}
              className="mt-12 flex flex-wrap items-end gap-x-8 gap-y-5 border-t border-border/70 pt-6"
            >
              {stats.map((s) => {
                const parsed = parseStat(s.value);
                return (
                  <div key={s.key} className="flex flex-col">
                    <CountUp
                      value={parsed.raw}
                      decimals={parsed.decimals}
                      suffix={parsed.suffix}
                      className="font-display text-2xl font-medium tracking-tight text-foreground md:text-3xl"
                    />
                    <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground-subtle">
                      {t(`stats.${s.key}`)}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right column — project preview stack */}
          <div data-hero-side className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.55 }}
            >
              <HeroProjectStack />
            </motion.div>
          </div>
        </div>

        {/* Tech marquee strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 md:mt-20"
        >
          <TechMarquee label={t('marqueeLabel')} />
        </motion.div>

      </div>
    </section>
  );
}

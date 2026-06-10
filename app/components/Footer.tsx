'use client';

import { useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useGSAP } from '@gsap/react';
import { gsap, PREFERS_MOTION } from '../lib/gsap';
import { PortfolioData } from '../models/PortfolioData';

const data = PortfolioData.getInstance();

export default function Footer() {
  const t = useTranslations('footer');
  const contact = data.getContactInfo();
  const year = new Date().getFullYear();
  const rootRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(PREFERS_MOTION, () => {
        gsap.from(nameRef.current, {
          yPercent: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: true,
          },
        });
      });
      return () => mm.revert();
    },
    { scope: rootRef as React.RefObject<HTMLElement> }
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    {
      icon: <Github size={16} strokeWidth={1.75} />,
      href: `https://${contact.github}`,
      name: 'GitHub',
    },
    {
      icon: <Linkedin size={16} strokeWidth={1.75} />,
      href: `https://${contact.linkedin}`,
      name: 'LinkedIn',
    },
    {
      icon: <Mail size={16} strokeWidth={1.75} />,
      href: `mailto:${contact.email}`,
      name: 'Email',
    },
  ];

  return (
    <footer ref={rootRef} className="hairline-t overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-5 pt-16 md:px-10 md:pt-24">
        <div ref={nameRef} aria-hidden className="select-none">
          <span className="display-huge text-stroke block whitespace-nowrap text-center text-[clamp(40px,9.5vw,180px)]">
            Yasin Kaan Yiğit
          </span>
        </div>

        <p className="mx-auto mt-8 max-w-md text-center text-pretty text-sm font-medium text-gray-1 md:text-base">
          {t('tagline')}
        </p>

        <div className="hairline-t mt-12 flex flex-col items-start justify-between gap-4 py-6 md:flex-row md:items-center">
          <span className="mono-label text-gray-1">
            © {year} Yasin Kaan Yiğit · {t('rights')}
          </span>

          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={s.name}
                title={s.name}
                className="focus-ring inline-flex h-9 w-9 items-center justify-center border border-hairline text-gray-1 transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
              >
                {s.icon}
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="link-draw focus-ring mono-label text-foreground"
          >
            {t('scrollTop')} ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

const sectionIds = [
  'home',
  'about',
  'experience',
  'projects',
  'skills',
  'services',
  'contact',
] as const;

type SectionId = (typeof sectionIds)[number];

export default function Navbar() {
  const t = useTranslations('nav');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId>('home');

  useEffect(() => {
    const onScroll = () => {
      let current: SectionId = 'home';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        className="hairline-b fixed inset-x-0 top-0 z-50 bg-background"
      >
        <nav className="mx-auto flex h-14 w-full max-w-[1440px] items-center justify-between gap-4 px-5 md:px-10">
          <button
            onClick={() => goTo('home')}
            className="focus-ring flex items-baseline gap-3"
            aria-label="Yasin Kaan Yiğit"
          >
            <span className="font-display text-sm font-extrabold uppercase tracking-tight text-foreground">
              YKY©
            </span>
            <span className="mono-label hidden text-gray-1 lg:inline">
              Yasin Kaan Yiğit
            </span>
          </button>

          <div className="hidden items-center lg:flex">
            {sectionIds.map((id, i) => (
              <button
                key={id}
                onClick={() => goTo(id)}
                className={clsx(
                  'focus-ring mono-label flex items-center gap-1.5 px-3 py-2 transition-colors',
                  active === id
                    ? 'text-foreground'
                    : 'text-gray-1 hover:text-foreground'
                )}
              >
                <span
                  aria-hidden
                  className={clsx(
                    'inline-block h-1.5 w-1.5 bg-foreground transition-opacity',
                    active === id ? 'opacity-100' : 'opacity-0'
                  )}
                />
                <span className="text-gray-2">0{i + 1}</span>
                {t(id)}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? t('menuClose') : t('menuOpen')}
              className="focus-ring mono-label inline-flex h-9 items-center border border-hairline px-3 text-foreground lg:hidden"
            >
              {open ? t('menuClose') : t('menuOpen')}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="invert-block fixed inset-0 z-40 overflow-y-auto pt-20 lg:hidden"
          >
            <div className="flex min-h-full flex-col justify-between px-5 pb-10">
              <nav className="flex flex-col">
                {sectionIds.map((id, i) => (
                  <motion.button
                    key={id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                    onClick={() => goTo(id)}
                    className={clsx(
                      'flex items-baseline justify-between border-b border-background/20 py-4 text-left',
                      active === id ? 'opacity-100' : 'opacity-70'
                    )}
                  >
                    <span className="display-huge text-[13vw] leading-none sm:text-[10vw]">
                      {t(id)}
                    </span>
                    <span className="mono-label">0{i + 1}</span>
                  </motion.button>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mono-label mt-10 flex items-center justify-between"
              >
                <span>YKY©</span>
                <span>{new Date().getFullYear()}</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

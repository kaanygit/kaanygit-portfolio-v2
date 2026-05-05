'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId>('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
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

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -56, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        className={clsx(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled ? 'pt-2' : 'pt-3 md:pt-4'
        )}
      >
        <nav
          className={clsx(
            'mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 rounded-full px-4 transition-all duration-500 md:px-5',
            scrolled
              ? 'glass shadow-soft-md mx-3 md:mx-auto'
              : 'border border-transparent'
          )}
        >
          <button
            onClick={() => goTo('home')}
            className="focus-ring inline-flex items-center gap-2 rounded-full px-2 py-1"
            aria-label="Yasin Kaan Yiğit"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-foreground font-display text-[11px] font-semibold tracking-tight text-background">
              YK
            </span>
            <span className="hidden font-display text-sm font-medium tracking-tight text-foreground md:inline">
              Yasin Kaan
            </span>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {sectionIds.map((id) => (
              <button
                key={id}
                onClick={() => goTo(id)}
                className={clsx(
                  'focus-ring relative rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors',
                  active === id
                    ? 'text-foreground'
                    : 'text-foreground-muted hover:text-foreground'
                )}
              >
                {active === id && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    className="absolute inset-0 -z-10 rounded-full bg-surface"
                  />
                )}
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
              className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 text-foreground-muted hover:text-foreground lg:hidden"
            >
              {open ? <X size={16} strokeWidth={1.75} /> : <Menu size={16} strokeWidth={1.75} />}
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
            className="fixed inset-0 z-40 bg-background/85 pt-24 backdrop-blur-xl lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="mx-auto flex max-w-md flex-col gap-1 px-6"
              onClick={(e) => e.stopPropagation()}
            >
              {sectionIds.map((id, i) => (
                <motion.button
                  key={id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.4 }}
                  onClick={() => goTo(id)}
                  className={clsx(
                    'flex items-center justify-between rounded-2xl px-5 py-4 text-left font-display text-2xl font-medium tracking-tight transition-colors',
                    active === id
                      ? 'bg-surface text-foreground'
                      : 'text-foreground-muted hover:text-foreground'
                  )}
                >
                  <span>{t(id)}</span>
                  <span className="font-mono text-xs text-foreground-subtle">
                    0{sectionIds.indexOf(id) + 1}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

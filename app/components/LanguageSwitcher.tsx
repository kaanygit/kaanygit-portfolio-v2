'use client';

import { useEffect, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Check, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname, routing, type Locale } from '../../i18n/routing';

const localeLabels: Record<Locale, { code: string; name: string }> = {
  tr: { code: 'TR', name: 'Türkçe' },
  en: { code: 'EN', name: 'English' },
  de: { code: 'DE', name: 'Deutsch' },
  fr: { code: 'FR', name: 'Français' },
  es: { code: 'ES', name: 'Español' },
};

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale() as Locale;
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const t = useTranslations('nav');

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('mousedown', onClick);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('mousedown', onClick);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  const change = (next: Locale) => {
    if (next === locale) {
      setOpen(false);
      return;
    }
    router.replace(pathname, { locale: next, scroll: false });
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={t('languageLabel')}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="focus-ring inline-flex h-9 items-center gap-2 rounded-full border border-border bg-card/60 px-3 text-foreground-muted transition-colors hover:border-border-strong hover:text-foreground"
      >
        <Globe size={14} strokeWidth={1.75} />
        <span className="font-mono text-[11px] font-medium tracking-wider">
          {localeLabels[locale].code}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.16, ease: [0.25, 0.1, 0.25, 1] }}
            className="glass-strong absolute right-0 top-[calc(100%+8px)] z-50 min-w-[160px] overflow-hidden rounded-2xl p-1.5 shadow-soft-lg"
          >
            {routing.locales.map((l) => (
              <li key={l} role="none">
                <button
                  type="button"
                  role="option"
                  aria-selected={l === locale}
                  onClick={() => change(l)}
                  className="flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-sm text-foreground transition-colors hover:bg-surface"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="font-mono text-[10px] font-medium tracking-wider text-foreground-subtle">
                      {localeLabels[l].code}
                    </span>
                    <span>{localeLabels[l].name}</span>
                  </span>
                  {l === locale && (
                    <Check size={14} strokeWidth={2} className="text-accent" />
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

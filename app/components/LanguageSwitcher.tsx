'use client';

import { useEffect, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
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
        className="focus-ring mono-label inline-flex h-9 items-center gap-1.5 border border-hairline px-3 text-gray-1 transition-colors hover:border-foreground hover:text-foreground"
      >
        {localeLabels[locale].code}
        <span aria-hidden className="text-gray-2">↓</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.16, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute right-0 top-[calc(100%+8px)] z-50 min-w-[180px] border border-hairline bg-background"
          >
            {routing.locales.map((l) => (
              <li key={l} role="none" className="hairline-t first:border-t-0">
                <button
                  type="button"
                  role="option"
                  aria-selected={l === locale}
                  onClick={() => change(l)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="mono-label">{localeLabels[l].code}</span>
                    <span>{localeLabels[l].name}</span>
                  </span>
                  {l === locale && <span aria-hidden>■</span>}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useThemeStore } from '../store/useThemeStore';

export default function ThemeToggle() {
  const mode = useThemeStore((s) => s.mode);
  const cycle = useThemeStore((s) => s.cycle);
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('nav');

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-9" aria-hidden="true" />;
  }

  const Icon = mode === 'system' ? Monitor : mode === 'dark' ? Moon : Sun;
  const label =
    mode === 'system'
      ? t('themeLight')
      : mode === 'light'
      ? t('themeDark')
      : t('themeSystem');

  return (
    <motion.button
      type="button"
      onClick={cycle}
      whileTap={{ scale: 0.94 }}
      aria-label={label}
      title={label}
      className="focus-ring relative inline-flex h-9 w-9 items-center justify-center border border-hairline text-gray-1 transition-colors hover:border-foreground hover:text-foreground"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={mode}
          initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
          transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Icon size={15} strokeWidth={1.75} />
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}

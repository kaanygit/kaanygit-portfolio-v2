'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useThemeStore } from '../store/useThemeStore';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-foreground hover:text-accent transition-colors"
      whileTap={{ scale: 0.92 }}
      aria-label={theme === 'dark' ? 'Açık moda geç' : 'Karanlık moda geç'}
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </motion.button>
  );
}

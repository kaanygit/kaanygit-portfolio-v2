'use client';

import { useEffect } from 'react';
import { resolveTheme, useThemeStore } from '../store/useThemeStore';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const mode = useThemeStore((s) => s.mode);

  useEffect(() => {
    const root = document.documentElement;
    const apply = () => {
      const resolved = resolveTheme(mode);
      root.classList.toggle('dark', resolved === 'dark');
      root.style.colorScheme = resolved;
    };

    apply();

    if (mode !== 'system') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, [mode]);

  return <>{children}</>;
}

/**
 * Inline script string injected before hydration to apply the persisted
 * theme without a flash. Reads the same Zustand storage key.
 */
export const themeInitScript = `
(function(){
  try {
    var raw = localStorage.getItem('portfolio-theme');
    var mode = raw ? (JSON.parse(raw).state.mode || 'system') : 'system';
    var dark = mode === 'dark' || (mode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    var root = document.documentElement;
    root.classList.toggle('dark', dark);
    root.style.colorScheme = dark ? 'dark' : 'light';
  } catch (e) {}
})();
`;

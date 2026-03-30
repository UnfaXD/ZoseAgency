'use client';

import type { ThemeMode } from '@/types';

import { useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>('system');

  const applyTheme = (mode: ThemeMode) => {
    const root = document.documentElement;

    if (mode === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';
      root.setAttribute('data-theme', systemTheme);
      return;
    }

    root.setAttribute('data-theme', mode);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as ThemeMode | null;
    if (storedTheme) {
      setTheme(storedTheme);
      applyTheme(storedTheme);
    } else {
      applyTheme('system');
    }
  }, []);

  const setMode = (mode: ThemeMode) => {
    setTheme(mode);
    localStorage.setItem('theme', mode);
    applyTheme(mode);
  };

  return {
    theme,
    setTheme: setMode,
    toggleTheme: () => setMode(theme === 'light' ? 'dark' : 'light'),
  };
}

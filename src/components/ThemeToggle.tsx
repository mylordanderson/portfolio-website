'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const THEME_KEY = 'theme';

function getSystemPrefersDark(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(THEME_KEY);
      const shouldUseDark = stored ? stored === 'dark' : getSystemPrefersDark();
      setIsDark(shouldUseDark);
      const root = document.documentElement;
      if (shouldUseDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    } catch {
      // no-op
    }
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    const root = document.documentElement;
    if (nextIsDark) {
      root.classList.add('dark');
      try { localStorage.setItem(THEME_KEY, 'dark'); } catch {}
    } else {
      root.classList.remove('dark');
      try { localStorage.setItem(THEME_KEY, 'light'); } catch {}
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default ThemeToggle;



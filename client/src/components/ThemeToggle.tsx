import { useState, useEffect } from 'react';
import type { Theme } from '../lib/types';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>('system');

  // Initialize theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
    } else {
      setTheme('system');
    }
    
    // Apply initial theme
    applyTheme();
  }, []);

  const applyTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark' || 
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    document.documentElement.classList.toggle('dark', isDark);
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    
    if (newTheme === 'light') {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    } else if (newTheme === 'dark') {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      // system preference
      localStorage.removeItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return '☀️';
      case 'dark':
        return '🌙';
      default:
        return '💻';
    }
  };

  const getNextTheme = (): Theme => {
    switch (theme) {
      case 'light':
        return 'dark';
      case 'dark':
        return 'system';
      default:
        return 'light';
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light';
      case 'dark':
        return 'Dark';
      default:
        return 'System';
    }
  };

  return (
    <button
      onClick={() => handleThemeChange(getNextTheme())}
      className="flex items-center justify-center w-24 sm:w-36 mx-auto px-3 py-2 rounded-full bg-sky-100 dark:bg-sky-200/10 text-sky-800 dark:text-sky-300 text-sm font-medium transition-all duration-200 hover:bg-sky-200 dark:hover:bg-sky-200/20"
      title={`Current theme: ${getThemeLabel()}. Click to switch.`}
    >
      <span className="text-base sm:mr-2">{getIcon()}</span>
      <span className="hidden sm:inline flex-grow text-center">{getThemeLabel()}</span>
    </button>
  );
};

export default ThemeToggle;

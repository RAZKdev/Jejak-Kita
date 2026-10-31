'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className, showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Memuat tema..."
        className={cn(
          'inline-flex items-center justify-center rounded-lg border border-border bg-surface p-2 text-foreground-muted transition-colors min-h-[44px] min-w-[44px]',
          className
        )}
      >
        <span className="h-4 w-4 opacity-0" />
      </button>
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Beralih ke mode terang (Light mode)' : 'Beralih ke mode gelap (Dark mode)'}
      title={isDark ? 'Mode Terang' : 'Mode Gelap'}
      className={cn(
        'inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-2.5 py-2 text-xs font-medium text-foreground hover:bg-surface-elevated hover:border-brand/40 transition-colors select-none min-h-[44px] min-w-[44px]',
        className
      )}
    >
      {isDark ? (
        <>
          <Sun className="h-4 w-4 text-amber-400" />
          {showLabel && <span>Mode Terang</span>}
        </>
      ) : (
        <>
          <Moon className="h-4 w-4 text-brand" />
          {showLabel && <span>Mode Gelap</span>}
        </>
      )}
    </button>
  );
}

import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'priority' | 'secondary' | 'outline' | 'rest';
}

export function Badge({
  className,
  variant = 'default',
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default: 'bg-brand/10 text-brand border border-brand/20 dark:bg-brand/20 dark:text-brand',
    priority: 'bg-amber-100 text-amber-900 border border-amber-300 font-semibold dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/80',
    secondary: 'bg-surface text-foreground-muted border border-border',
    outline: 'border border-border text-foreground bg-transparent',
    rest: 'bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/80',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs transition-colors',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

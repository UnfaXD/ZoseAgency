'use client';

import type { ComponentProps } from '@/types';

interface HeaderProps extends ComponentProps {
  title?: string;
}

export function Header({ className = '', title = 'Zose Agency' }: HeaderProps) {
  return (
    <header
      className={`border-b border-border bg-background/80 backdrop-blur-sm ${className}`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <h1 className="text-xl font-bold text-foreground">{title}</h1>
      </div>
    </header>
  );
}

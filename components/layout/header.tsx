'use client';

import { FaAppStore, FaGooglePlay } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

const navItems = [
  { href: '#solutions', label: 'Solutions' },
  { href: '#about', label: 'About' },
  { href: '#tariffs', label: 'Tariffs' },
  { href: '#contact', label: 'Contact' },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(min-width: 1024px)').matches)
        setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="relative shrink-0"
          onClick={() => setMobileOpen(false)}
          aria-label="Zose Agency home"
        >
          <Image
            src="/assets/logo.svg"
            alt=""
            width={160}
            height={40}
            className="h-8 w-auto sm:h-9 lg:h-10"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden min-w-0 flex-1 items-center justify-end gap-3 lg:flex lg:gap-4">
          <nav aria-label="Main">
            <ul className="flex items-center overflow-hidden rounded-xl border border-border bg-muted/40 text-sm">
              {navItems.map((item, i) => (
                <li key={item.href} className="flex">
                  <a
                    href={item.href}
                    className={cn(
                      'whitespace-nowrap px-3 py-2.5 font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground',
                      'lg:px-4',
                      i === 0 && 'rounded-l-xl',
                      i === navItems.length - 1 && 'rounded-r-xl'
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <span className="hidden xl:inline">App Store</span>
              <span className="xl:hidden" aria-hidden>
                App
              </span>
              <FaAppStore className="size-4 shrink-0" aria-hidden />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <span className="hidden xl:inline">Play Store</span>
              <span className="xl:hidden" aria-hidden>
                Play
              </span>
              <FaGooglePlay className="size-4 shrink-0" aria-hidden />
            </a>
          </div>
        </div>

        {/* Mobile / tablet menu toggle */}
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-muted lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen(o => !o)}
        >
          {mobileOpen ? (
            <FiX className="size-5" aria-hidden />
          ) : (
            <FiMenu className="size-5" aria-hidden />
          )}
        </button>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        className={cn(
          'fixed inset-x-0 top-14 z-40 max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-b border-border bg-background px-4 pb-6 pt-2 transition-[opacity,visibility] duration-200 sm:top-16 sm:max-h-[calc(100dvh-4rem)]',
          mobileOpen
            ? 'visible opacity-100'
            : 'invisible opacity-0 pointer-events-none',
          'lg:hidden'
        )}
        aria-hidden={!mobileOpen}
      >
        <nav aria-label="Mobile">
          <ul className="flex flex-col divide-y divide-border rounded-xl border border-border bg-muted/30">
            {navItems.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block px-4 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-3 py-3 text-sm font-medium transition active:scale-[0.98]"
            onClick={() => setMobileOpen(false)}
          >
            App Store
            <FaAppStore className="size-4" aria-hidden />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-3 py-3 text-sm font-medium transition active:scale-[0.98]"
            onClick={() => setMobileOpen(false)}
          >
            Play Store
            <FaGooglePlay className="size-4" aria-hidden />
          </a>
        </div>
      </div>

      {mobileOpen ? (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 top-14 z-30 bg-dark/20 backdrop-blur-[2px] sm:top-16 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      ) : null}
    </header>
  );
}

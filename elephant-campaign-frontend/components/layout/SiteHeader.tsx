'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV_ITEMS, SITE } from '@/lib/content';

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const active = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          {SITE.name}
          <span>{SITE.location}</span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={active(item.href) ? 'is-active' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      <nav className={`nav-mobile${open ? ' is-open' : ''}`} aria-label="Mobile">
        <div className="container">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={active(item.href) ? 'is-active' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

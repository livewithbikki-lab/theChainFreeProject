'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV_ITEMS, SITE } from '@/lib/content';

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="header-main">
        <h1 className="site-title">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            {SITE.name}
          </Link>
        </h1>

        <div className="header-actions">
          <button
            type="button"
            className={`search-toggle${searchOpen ? ' active' : ''}`}
            aria-expanded={searchOpen}
            aria-controls="search-container"
            onClick={() => {
              setSearchOpen((v) => !v);
              setMenuOpen(false);
            }}
          >
            <span className="sr-only">Search</span>
            <span aria-hidden="true">⌕</span>
          </button>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-menu"
            onClick={() => {
              setMenuOpen((v) => !v);
              setSearchOpen(false);
            }}
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        <nav className="primary-navigation" aria-label="Primary">
          <ul
            id="primary-menu"
            className={`nav-menu${menuOpen ? ' is-open' : ''}`}
          >
            {NAV_ITEMS.map((item) => (
              <li
                key={item.href}
                className={isActive(item.href) ? 'current' : undefined}
              >
                <Link href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <button
        type="button"
        className={`nav-backdrop${menuOpen ? ' is-open' : ''}`}
        aria-label="Close menu"
        tabIndex={menuOpen ? 0 : -1}
        onClick={() => setMenuOpen(false)}
      />

      <div
        id="search-container"
        className={`search-box-wrapper${searchOpen ? '' : ' hide'}`}
      >
        <div className="search-box">
          <form
            role="search"
            onSubmit={(e) => {
              e.preventDefault();
              setSearchOpen(false);
              setQuery('');
            }}
          >
            <label>
              <span className="sr-only">Search for:</span>
              <input
                type="search"
                className="search-field"
                placeholder="Search …"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                enterKeyHint="search"
                autoComplete="off"
              />
            </label>
          </form>
        </div>
      </div>
    </header>
  );
}

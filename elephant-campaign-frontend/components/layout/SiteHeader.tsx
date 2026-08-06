'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NAV_ITEMS, SITE } from '@/lib/content';

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="site-header">
      <div className="header-main">
        <h1 className="site-title">
          <Link href="/">{SITE.name}</Link>
        </h1>

        <button
          type="button"
          className={`search-toggle${searchOpen ? ' active' : ''}`}
          aria-expanded={searchOpen}
          aria-controls="search-container"
          onClick={() => setSearchOpen((v) => !v)}
        >
          <span className="sr-only">Search</span>
          <span aria-hidden="true">⌕</span>
        </button>

        <nav className="primary-navigation" aria-label="Primary">
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sr-only">Primary Menu</span>
            <span aria-hidden="true">☰</span>
          </button>
          <ul className={`nav-menu${menuOpen ? ' is-open' : ''}`}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className={isActive(item.href) ? 'current' : undefined}>
                <Link href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

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
              />
            </label>
          </form>
        </div>
      </div>
    </header>
  );
}

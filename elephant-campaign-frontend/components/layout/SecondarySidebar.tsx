'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/lib/content';

export default function SecondarySidebar() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <div id="secondary" className="secondary">
      <nav className="secondary-navigation" aria-label="Secondary">
        <ul className="menu">
          {NAV_ITEMS.map((item) => (
            <li key={item.href} className={isActive(item.href) ? 'current' : undefined}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="primary-sidebar">
        <aside className="widget">
          <h1 className="widget-title">Search Form</h1>
          <form
            role="search"
            className="search-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <label>
              <span className="sr-only">Search for:</span>
              <input
                type="search"
                className="search-field"
                placeholder="Search …"
                name="s"
              />
            </label>
          </form>
        </aside>

        <aside className="widget">
          <h1 className="widget-title">Location</h1>
          <p className="widget-text">
            Sauraha, Chitwan National Park buffer zone, Nepal.
          </p>
        </aside>
      </div>
    </div>
  );
}

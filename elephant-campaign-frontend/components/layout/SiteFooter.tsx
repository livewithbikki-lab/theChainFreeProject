import Link from 'next/link';
import { NAV_ITEMS, SITE, WHATSAPP_DISPLAY, WHATSAPP_URL } from '@/lib/content';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>{SITE.name}</h3>
          <p>
            Chain-free, ride-free elephant work in Sauraha, Chitwan, Nepal.
          </p>
          <p className="footer-contacts">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              WhatsApp: {WHATSAPP_DISPLAY}
            </a>
            <br />
            <span>WeChat 微信: {SITE.wechat}</span>
          </p>
        </div>
        <div>
          <h3>Pages</h3>
          <ul className="footer-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        © {new Date().getFullYear()} {SITE.name}
      </div>
    </footer>
  );
}

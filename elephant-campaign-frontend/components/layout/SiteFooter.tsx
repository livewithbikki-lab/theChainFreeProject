import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { WhatsAppIcon, WeChatIcon } from '@/components/icons/BrandIcons';
import { NAV_ITEMS, SITE, WHATSAPP_DISPLAY, WHATSAPP_URL } from '@/lib/content';
import FooterChat from '@/components/layout/FooterChat';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>{SITE.name}</h3>
          <p>
            Chain-free, ride-free elephant work in Sauraha, Chitwan, Nepal.
          </p>
          <p className="footer-location">
            <MapPin size={16} strokeWidth={2} aria-hidden="true" />
            {SITE.location}
          </p>
          <div className="footer-contacts">
            <FooterChat
              variant="whatsapp"
              href={WHATSAPP_URL}
              label={`WhatsApp: ${WHATSAPP_DISPLAY}`}
              icon={<WhatsAppIcon size={16} title="" />}
            />
            <FooterChat
              variant="wechat"
              label={`WeChat 微信: ${SITE.wechat}`}
              icon={<WeChatIcon size={16} title="" />}
            />
          </div>
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

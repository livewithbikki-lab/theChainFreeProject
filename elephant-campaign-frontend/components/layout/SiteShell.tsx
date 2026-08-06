import SiteHeader from './SiteHeader';
import SecondarySidebar from './SecondarySidebar';
import ContentSidebar from './ContentSidebar';
import SiteFooter from './SiteFooter';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import MobileCta from '@/components/MobileCta';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div id="page" className="site">
      <SiteHeader />
      <div id="main" className="site-main">
        <div id="main-content" className="main-content">
          <div id="primary" className="content-area">
            <div id="content" className="site-content" role="main">
              {children}
            </div>
          </div>
          <ContentSidebar />
        </div>
        <SecondarySidebar />
      </div>
      <SiteFooter />
      <MobileCta />
      <WhatsAppWidget />
    </div>
  );
}

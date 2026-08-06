import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import WhatsAppWidget from '@/components/WhatsAppWidget';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <WhatsAppWidget />
    </>
  );
}

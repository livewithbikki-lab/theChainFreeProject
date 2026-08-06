import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import ContactChannels from '@/components/ContactChannels';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <ContactChannels floating />
    </>
  );
}

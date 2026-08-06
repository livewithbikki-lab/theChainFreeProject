import Link from 'next/link';
import { RECENT_ACTIVITIES } from '@/lib/content';
import CampaignProgress from '@/components/CampaignProgress';

export default function ContentSidebar() {
  return (
    <div id="content-sidebar" className="content-sidebar" role="complementary">
      <aside className="widget">
        <CampaignProgress compact />
      </aside>
      <aside className="widget">
        <h1 className="widget-title">Recent activities</h1>
        <nav aria-label="Recent activities">
          <ul>
            {RECENT_ACTIVITIES.map((item) => (
              <li key={item.title}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}

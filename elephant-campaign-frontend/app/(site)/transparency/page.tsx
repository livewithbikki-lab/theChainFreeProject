import type { Metadata } from 'next';
import Link from 'next/link';
import CampaignProgress from '@/components/CampaignProgress';
import ShareButtons from '@/components/ShareButtons';
import {
  BUDGET_BREAKDOWN,
  CAMPAIGN,
  formatNpr,
} from '@/lib/content';

export const metadata: Metadata = {
  title: 'Transparency',
  description:
    'See how The Chain Free Project uses every contribution — rescue fund goals, budget split, and our promise of open reporting.',
};

export default function TransparencyPage() {
  return (
    <article className="entry">
      <header className="entry-header">
        <h1 className="entry-title">Transparency</h1>
      </header>
      <div className="entry-content" style={{ maxWidth: '100%' }}>
        <p style={{ textAlign: 'left' }}>
          Trust is part of conservation. If you give time, money, or your voice,
          you deserve a clear picture of where support goes — and what still
          needs funding.
        </p>

        <h2>Rescue fund at a glance</h2>
        <CampaignProgress />
        <p style={{ textAlign: 'left' }}>
          <strong>Goal:</strong> {formatNpr(CAMPAIGN.goalNpr)} ·{' '}
          <strong>Status:</strong> {CAMPAIGN.status}. Candidate details will be
          published when contracts are finalised.
        </p>

        <h2>Where every rupee is planned to go</h2>
        <p style={{ textAlign: 'left' }}>
          This is our intended split for the Elephant Rescue Fund. Percentages
          may shift slightly with real veterinary or negotiation needs — we will
          update this page when figures change.
        </p>

        <div className="budget-list">
          {BUDGET_BREAKDOWN.map((item) => (
            <div key={item.label} className="budget-row">
              <div className="budget-row-top">
                <strong>{item.label}</strong>
                <span>{item.percent}%</span>
              </div>
              <div className="budget-bar" aria-hidden="true">
                <span style={{ width: `${item.percent}%` }} />
              </div>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>

        <h2>What we will always report</h2>
        <ul>
          <li>Campaign goal and amount raised (updated on this site)</li>
          <li>When a rescue candidate is confirmed — with dignity, not spectacle</li>
          <li>Major care milestones after rescue (health, shelter, training)</li>
          <li>How visitor experiences support — never replace — welfare first</li>
        </ul>

        <h2>What we will not do</h2>
        <ul>
          <li>Use rescue funds for unrelated personal expenses</li>
          <li>Hide commercial riding behind “sanctuary” language</li>
          <li>Pressure elephants for photos, rides, or forced performances</li>
        </ul>

        <div className="callout">
          <h3>Questions about money or impact?</h3>
          <p>
            Ask us anytime. Clear answers are part of the mission.
          </p>
          <Link href="/get-involved" className="btn">
            Contact the team
          </Link>
        </div>

        <ShareButtons
          path="/transparency"
          title="Transparency — The Chain Free Project"
          text="See exactly how The Chain Free Project plans to use rescue funds in Sauraha."
        />
      </div>
    </article>
  );
}

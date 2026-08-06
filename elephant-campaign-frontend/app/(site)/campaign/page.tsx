import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Campaign',
};

export default function CampaignPage() {
  return (
    <article className="entry">
      <header className="entry-header">
        <h1 className="entry-title">Elephant Rescue Fund</h1>
      </header>
      <div className="entry-content">
        <p>
          <strong>Help buy out and liberate a working tourist elephant in
          Sauraha.</strong> One hundred percent of contributions go directly to
          rescue costs, veterinary care, and long-term shelter support.
        </p>
        <p>
          Commercial riding tours keep elephants under chains and saddles for
          much of the day. Our campaign raises funds to acquire working
          elephants from tourism operators and transfer them into a permanent,
          chain-free sanctuary environment with forest grazing and proper
          medical care.
        </p>

        <div className="callout">
          <h3>Active pledge</h3>
          <p>
            <strong>Campaign goal:</strong> Rs. 2,000,000
          </p>
          <p>
            Status: rescue candidate details will be published as soon as
            contracts are finalised. Your contribution guarantees direct
            liberation from commercial riding tours and lifetime shelter
            support.
          </p>
          <Link href="/get-involved" className="btn">
            Support the rescue
          </Link>
        </div>

        <h2>What your support covers</h2>
        <ul>
          <li>Negotiation and acquisition from commercial operators</li>
          <li>Immediate veterinary assessment and treatment</li>
          <li>Chain-free shelter, fodder, and forest access</li>
          <li>Ongoing mahout salaries under cooperative care standards</li>
          <li>Community education against ride-based tourism</li>
        </ul>

        <h2>Strategic goals</h2>
        <p>
          <strong>01 — Sanctuary &amp; safety.</strong> Acquire working
          elephants from commercial tourism and provide permanent shelter,
          rehabilitation, and chain-free grazing.
        </p>
        <p>
          <strong>02 — Cooperative livelihoods.</strong> Employ local mahouts
          and train them in positive reinforcement, transforming restraint-based
          habits into compassionate care.
        </p>
        <p>
          <strong>03 — Hands-off advocacy.</strong> Offer educational visitor
          experiences—nutrition prep, walking alongside, river bathing
          observation—that inspire conservation without animal stress.
        </p>

        <p>
          For donation instructions or partnership enquiries, please{' '}
          <Link href="/get-involved">contact us</Link> or message us on{' '}
          <a
            href="https://wa.me/9779865345753?text=Hi!%20I%20want%20to%20support%20The%20Chain%20Free%20Project."
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          .
        </p>
      </div>
    </article>
  );
}

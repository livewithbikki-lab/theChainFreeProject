import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About us',
};

export default function AboutPage() {
  return (
    <article className="entry">
      <header className="entry-header">
        <h1 className="entry-title">About us</h1>
      </header>
      <div className="entry-content">
        <p>
          <strong>The Chain Free Project</strong> is a volunteer-driven,
          non-profit conservation initiative based in Sauraha, Chitwan, Nepal.
          Our aim is to end the use of heavy chains and riding saddles on working
          elephants, and to build a sustainable, ethical sanctuary model that
          protects elephants while supporting local mahout livelihoods.
        </p>
        <p>
          For decades, tourist elephants in the Chitwan area have lived under
          commercial pressure—long hours under saddles, restricted movement, and
          limited natural behaviour. We believe elephants belong free to forage,
          bathe, socialise, and rest without restraint.
        </p>
        <p>
          Our work focuses on three pillars: rescuing working elephants from
          commercial riding operations; training and employing mahouts in
          positive-reinforcement, cooperative care; and offering visitors
          educational, hands-off experiences that inspire conservation without
          stressing the animals.
        </p>
        <p>
          We are a small team of conservation advocates, local handlers, and
          community partners working at the edge of Chitwan National Park. Like
          many grassroots organisations, we grow through volunteers, partners,
          and supporters who share a simple conviction: tourism should never
          require chains.
        </p>

        <h2>Our main fields of work</h2>
        <ul>
          <li>Chain-free elephant sanctuary development</li>
          <li>Rescue and veterinary rehabilitation of working elephants</li>
          <li>Mahout training in positive reinforcement care</li>
          <li>Ride-free visitor education (forest walks, feed prep, bathing observation)</li>
          <li>Advocacy for ethical wildlife tourism in Sauraha</li>
          <li>Community livelihoods linked to compassionate elephant care</li>
        </ul>

        <div className="callout">
          <h3>Want to help?</h3>
          <p>
            You can support a rescue, volunteer on site, or book an ethical
            educational visit.
          </p>
          <Link href="/get-involved" className="btn">
            Get involved
          </Link>
        </div>
      </div>
    </article>
  );
}

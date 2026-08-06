import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About us',
  description:
    'Learn how The Chain Free Project is building a kinder future for elephants and mahouts in Sauraha, Chitwan.',
};

export default function AboutPage() {
  return (
    <article className="entry">
      <header className="entry-header">
        <h1 className="entry-title">About us</h1>
      </header>
      <div className="entry-content">
        <p>
          <strong>The Chain Free Project</strong> began with a feeling many
          visitors to Sauraha quietly share: wonder mixed with unease. Wonder at
          the grace of elephants. Unease at the chains that hold them still
          between rides.
        </p>
        <p>
          We are a volunteer-driven, non-profit initiative working beside
          Chitwan National Park. Our promise is simple and bold —{' '}
          <strong>elephants should never need heavy chains or saddles to
          “belong” in tourism</strong>. They deserve forest paths, river baths,
          rest, friendship, and space to simply be elephants.
        </p>
        <p>
          For years, many working elephants in this region have lived under
          commercial pressure: long hours, limited movement, and little room for
          natural behaviour. We are here to change that — not by pointing
          fingers, but by building something better.
        </p>
        <p>
          Better looks like a lush, chain-free sanctuary. Better looks like
          mahouts paid fairly and trained in cooperative, positive care. Better
          looks like visitors who leave smiling because they witnessed freedom —
          not because they sat on a back that never chose the load.
        </p>

        <h2>What we believe</h2>
        <p>
          Compassion and community can grow together. When elephants are free,
          mahouts can still have dignified work. When visitors choose ethical
          experiences, Sauraha’s tourism can become something Nepal is even
          prouder of. Freedom is not a luxury. It is the starting point.
        </p>

        <h2>How we work</h2>
        <ul>
          <li>
            <strong>Rescue &amp; shelter</strong> — helping working elephants
            leave riding life for permanent, chain-free care
          </li>
          <li>
            <strong>Mahout partnership</strong> — training and employing local
            handlers as skilled guardians, not controllers
          </li>
          <li>
            <strong>Hands-off experiences</strong> — forest walks, feed
            preparation, and river observation that never stress the animals
          </li>
          <li>
            <strong>Advocacy</strong> — inviting lodges, guides, and guests to
            choose ride-free tourism
          </li>
          <li>
            <strong>Community care</strong> — linking elephant welfare to real,
            sustainable local livelihoods
          </li>
        </ul>

        <p>
          We are small on purpose: close to the ground, close to the elephants,
          close to the people who know them best. Every volunteer, every kind
          message, every contribution adds one more link of courage to a chain we
          are determined to break.
        </p>

        <div className="callout">
          <h3>This story needs you</h3>
          <p>
            Whether you visit, volunteer, or support a rescue from afar — you
            become part of a freer Sauraha.
          </p>
          <Link href="/get-involved" className="btn">
            Stand with us
          </Link>
        </div>
      </div>
    </article>
  );
}

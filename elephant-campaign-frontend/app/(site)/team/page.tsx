import type { Metadata } from 'next';
import Link from 'next/link';
import ShareButtons from '@/components/ShareButtons';
import { PARTNERS, TEAM } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Team & partners',
  description:
    'Meet the people and partners behind The Chain Free Project — mahouts, volunteers, and community allies in Sauraha.',
};

export default function TeamPage() {
  return (
    <article className="entry">
      <header className="entry-header">
        <h1 className="entry-title">Team &amp; partners</h1>
      </header>
      <div className="entry-content" style={{ maxWidth: '100%' }}>
        <p style={{ textAlign: 'left' }}>
          This work is local at heart. Elephants, mahouts, neighbours, and
          visitors each hold a piece of a freer Sauraha. Here is who walks with
          us — and how you can too.
        </p>

        <h2>People of the project</h2>
        <div className="people-grid">
          {TEAM.map((person) => (
            <section key={person.name} className="person-card">
              <div className="person-media">
                <img src={person.image} alt={person.name} />
              </div>
              <div className="person-body">
                <p className="meta">{person.role}</p>
                <h3>{person.name}</h3>
                <p>{person.bio}</p>
              </div>
            </section>
          ))}
        </div>

        <h2>Partners &amp; allies</h2>
        <div className="partner-list">
          {PARTNERS.map((p) => (
            <div key={p.name} className="partner-card">
              <p className="meta">{p.type}</p>
              <h3>{p.name}</h3>
              <p>{p.detail}</p>
            </div>
          ))}
        </div>

        <div className="callout">
          <h3>Want your name beside this mission?</h3>
          <p>
            Lodges, guides, clinics, schools, and kind travellers — we welcome
            ethical partnerships that put elephant welfare first.
          </p>
          <Link href="/get-involved" className="btn">
            Become a partner
          </Link>
        </div>

        <ShareButtons
          path="/team"
          title="Team & partners — The Chain Free Project"
          text="Meet the people building chain-free elephant care in Sauraha, Chitwan."
        />
      </div>
    </article>
  );
}

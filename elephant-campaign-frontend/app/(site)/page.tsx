import Link from "next/link";
import type { Metadata } from "next";
import { EXPERIENCES, SITE, VALUES } from "@/lib/content";
import CampaignProgress from "@/components/CampaignProgress";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <img src="/elephant-1.jpg" alt="Elephant in natural habitat" />
        </div>
        <div className="container hero-content">
          <p className="hero-kicker">{SITE.location}</p>
          <h1>A refuge built on care, not chains.</h1>
          <p>
            The Chain Free Project is creating ride-free, chain-free elephant
            care in Sauraha — with local mahouts, gentle visitor experiences,
            and a clear rescue mission.
          </p>
          <div className="hero-actions">
            <Link href="/campaign" className="btn">
              Support rescue
            </Link>
            <Link href="/experiences" className="btn btn-outline">
              View experiences
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split">
          <div className="split-img">
            <img src="/elephant-2.jpg" alt="Caring for elephants" />
          </div>
          <div>
            <div className="section-head">
              <h2>Lifelong care comes first</h2>
              <p>
                We pair ethical visitor experiences with real welfare goals:
                free movement, good food, veterinary care, and dignity for the
                people who work with elephants every day.
              </p>
            </div>
            <Link href="/about" className="btn">
              About the project
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="experiences">
        <div className="container">
          <div className="section-head">
            <h2>Park experiences</h2>
            <p>
              Simple, regulated activities. No riding. Small groups. Elephant
              comfort first.
            </p>
          </div>
          <div className="card-grid">
            {EXPERIENCES.map((exp) => (
              <article key={exp.id} className="card">
                <div className="card-img">
                  <img src={exp.image} alt={exp.title} />
                </div>
                <div className="card-body">
                  <p className="card-meta">{exp.duration}</p>
                  <h3>{exp.title}</h3>
                  <p>{exp.summary}</p>
                </div>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "1.5rem" }}>
            <Link href="/get-involved" className="btn">
              Book or enquire
            </Link>
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <h2>Our commitments</h2>
          </div>
          <div className="value-grid">
            {VALUES.map((v) => (
              <div key={v.title} className="value">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <div className="section-head">
              <h2>Elephant Rescue Fund</h2>
              <p>
                Help free a working tourist elephant into permanent chain-free
                care. Every contribution supports rescue, health, and shelter.
              </p>
            </div>
            <CampaignProgress />
          </div>
          <div className="split-img">
            <img src="/elephant-4.jpg" alt="Rescue campaign" />
          </div>
        </div>
      </section>
    </>
  );
}

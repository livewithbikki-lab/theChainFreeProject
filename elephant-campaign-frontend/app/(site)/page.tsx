import Link from "next/link";
import type { Metadata } from "next";
import {
  EXPERIENCES,
  PROBLEM_PHOTOS,
  SITE,
  VALUES,
} from "@/lib/content";
import CampaignProgress from "@/components/CampaignProgress";

export const metadata: Metadata = {
  title: "Home",
  description:
    "The Chain Free Project — ride-free, chain-free elephant care in Sauraha, Chitwan. Ethical visits fund sanctuary welfare.",
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <img src="/hero-top.jpg" alt="" />
        </div>
        <div className="container hero-content">
          <p className="hero-kicker">{SITE.location}</p>
          <h1>Ride-free elephant care in Sauraha</h1>
          <p>
            We work so elephants are not used for rides or left on chains — and
            so visitors can still meet them in a fair way. Fees from our
            programs go to elephant welfare and the sanctuary fund.
          </p>
          <div className="hero-actions">
            <Link href="/experiences" className="btn">
              See programs
            </Link>
            <Link href="/campaign" className="btn btn-outline">
              Support the fund
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container narrow">
          <h2>Who we are</h2>
          <p>
            <strong>The Chain Free Project</strong> is a small effort in
            Sauraha, Chitwan. We promote chain-free care, train with local
            mahouts, and run simple visitor programs without riding.
          </p>
          <p>
            Tourist riding is still common here. Between rides, many elephants
            stay chained. We want that to change — without throwing mahouts out
            of work.
          </p>
          <p>
            <Link href="/about" className="btn btn-outline-dark">
              About the project
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="narrow">
            <h2>What we are against</h2>
            <p>
              Two things we see too often: elephants carrying people for
              tourism, and elephants chained in their habitat when the work
              stops.
            </p>
          </div>
          <div className="problem-grid problem-grid-2">
            {PROBLEM_PHOTOS.map((p) => (
              <figure
                key={p.src}
                className={`problem-card problem-${p.kind}`}
              >
                <div className="problem-media">
                  <img src={p.src} alt={p.label} />
                </div>
                <figcaption>{p.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="narrow">
            <h2>Our programs</h2>
            <p>
              Walk, feed, bath observation, short visits, volunteer days. No
              rides. Money from bookings goes to care and the sanctuary fund.
            </p>
          </div>
          <div className="program-list-home">
            {EXPERIENCES.map((exp) => (
              <article key={exp.id} className="program-row">
                <div>
                  <h3>{exp.title}</h3>
                  <p className="program-meta">
                    {exp.duration} · {exp.price}
                  </p>
                  <p>{exp.intro}</p>
                </div>
                <Link href={`/experiences#${exp.id}`} className="btn btn-outline-dark">
                  Details
                </Link>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "1.25rem" }}>
            <Link href="/experiences" className="btn">
              Full program list
            </Link>{" "}
            <Link href="/get-involved" className="btn btn-outline-dark">
              Book / enquire
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="narrow">
            <h2>How we work</h2>
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

      <section className="section section-alt">
        <div className="container split">
          <div className="narrow" style={{ maxWidth: "none" }}>
            <h2>Rescue fund</h2>
            <p>
              We are raising support to free one working tourist elephant from
              riding work and keep her in proper care — food, shelter, vet
              help, and mahout wages.
            </p>
            <p>
              Donations and program fees both support welfare and sanctuary
              work.
            </p>
            <CampaignProgress />
          </div>
          <div className="split-img">
            <img src="/care-1.jpg" alt="Feeding on site" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow center">
          <h2>Get in touch</h2>
          <p>
            Book a program, volunteer, or ask about the fund. WhatsApp or
            WeChat.
          </p>
          <p>
            <Link href="/get-involved" className="btn">
              Contact us
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

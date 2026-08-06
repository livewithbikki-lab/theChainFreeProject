import Link from "next/link";
import type { Metadata } from "next";
import { EXPERIENCES, MISSION_PILLARS, SITE, VALUES } from "@/lib/content";
import CampaignProgress from "@/components/CampaignProgress";

export const metadata: Metadata = {
  title: "Home",
  description:
    "The Chain Free Project builds chain-free, ride-free elephant care in Sauraha, Chitwan — rescue, mahout partnership, and ethical visitor experiences.",
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <img src="/elephant-1.jpg" alt="Elephant moving freely near the forest" />
        </div>
        <div className="container hero-content">
          <p className="hero-kicker">{SITE.location}</p>
          <h1>Elephants belong free — not bound for a ride.</h1>
          <p>
            In Sauraha, too many working elephants still spend long days under
            saddles and heavy chains.{" "}
            <strong style={{ color: "rgba(255,255,255,0.95)", fontWeight: 600 }}>
              The Chain Free Project
            </strong>{" "}
            exists to change that: one rescue, one kinder visitor experience,
            and one mahout partnership at a time.
          </p>
          <div className="hero-actions">
            <Link href="/campaign" className="btn">
              Help free an elephant
            </Link>
            <Link href="/about" className="btn btn-outline">
              Read our mission
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split">
          <div className="split-img">
            <img
              src="/elephant-2.jpg"
              alt="Hands preparing food for elephants"
            />
          </div>
          <div>
            <div className="section-head">
              <h2>Why this work matters</h2>
              <p>
                Visitors come to Chitwan hoping to meet giants. Elephants deserve
                that meeting to be gentle. We are building a model where tourism
                still thrives — without forcing an animal to carry people for
                hours, or stand waiting in chains between rides.
              </p>
              <p>
                Our vision is simple and stubborn: a chain-free sanctuary culture
                in Sauraha, rooted in lifelong care, fair local jobs, and
                experiences that leave both people and elephants better than
                before.
              </p>
            </div>
            <Link href="/about" className="btn">
              Our full mission
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>How we work</h2>
            <p>
              Three pillars guide every decision — from rescue fundraising to
              how a guest is welcomed on site.
            </p>
          </div>
          <div className="value-grid">
            {MISSION_PILLARS.map((item) => (
              <div key={item.title} className="value">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="experiences">
        <div className="container">
          <div className="section-head">
            <h2>Meet elephants the gentle way</h2>
            <p>
              You do not need to ride to feel close. Our experiences are small,
              calm, and designed around elephant comfort — so your memory is of
              freedom, not force.
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
            <Link href="/experiences" className="btn">
              Explore experiences
            </Link>{" "}
            <Link href="/get-involved" className="btn btn-outline-dark">
              Book a visit
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Promises we keep</h2>
            <p>
              These are not slogans. They are the rules we measure ourselves
              against — for elephants, mahouts, and every guest who trusts us.
            </p>
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
          <div>
            <div className="section-head">
              <h2>The Elephant Rescue Fund</h2>
              <p>
                Right now we are raising support to liberate a working tourist
                elephant from commercial riding life. Your gift becomes
                negotiation, veterinary healing, daily food, chain-free shelter,
                and fair pay for the people who will guard her for life.
              </p>
              <p>
                One hundred percent of campaign contributions go toward rescue
                and care — not empty promises.
              </p>
            </div>
            <CampaignProgress />
          </div>
          <div className="split-img">
            <img
              src="/elephant-4.jpg"
              alt="Mahout and elephant in cooperative care"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: "center", maxWidth: "40rem" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)" }}>
            This story needs more than watchers
          </h2>
          <p>
            Visit kindly. Volunteer. Share the mission. Support a rescue. Whether
            you live in Nepal or arrive as a guest from far away, you can help
            write a freer chapter for Sauraha’s elephants.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            <Link href="/get-involved" className="btn">
              Join the movement
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

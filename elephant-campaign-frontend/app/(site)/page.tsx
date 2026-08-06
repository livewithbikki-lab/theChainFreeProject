import Link from "next/link";
import type { Metadata } from "next";
import {
  EXPERIENCES,
  HOME_STRIP,
  MISSION_PILLARS,
  PHOTOS,
  SITE,
  VALUES,
} from "@/lib/content";
import CampaignProgress from "@/components/CampaignProgress";

export const metadata: Metadata = {
  title: "Home",
  description:
    "The Chain Free Project works for chain-free, ride-free elephant care in Sauraha, Chitwan, Nepal.",
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <img src={PHOTOS.hero} alt="Elephant in the river near Sauraha" />
        </div>
        <div className="container hero-content">
          <p className="hero-kicker">{SITE.location}</p>
          <h1>Elephants should not live in chains for tourism.</h1>
          <p>
            We are a small project in Sauraha working to end riding and heavy
            chaining, support local mahouts, and give visitors a better way to
            spend time with elephants.
          </p>
          <div className="hero-actions">
            <Link href="/campaign" className="btn">
              Support the rescue fund
            </Link>
            <Link href="/about" className="btn btn-outline">
              About us
            </Link>
          </div>
        </div>
      </section>

      <section className="photo-strip" aria-label="Photos from Sauraha">
        <div className="photo-strip-track">
          {HOME_STRIP.map((src) => (
            <div key={src} className="photo-strip-item">
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split">
          <div className="split-img">
            <img src={PHOTOS.problem} alt="Elephant eating fresh greens" />
          </div>
          <div>
            <div className="section-head">
              <h2>The problem we see</h2>
              <p>
                In Sauraha, many elephants used for tourism still spend long
                hours under saddles. Between rides they are often kept on chains.
                Guests get a photo. The elephant gets a hard day.
              </p>
              <p>
                We think tourism can work differently. People can still meet
                elephants. Mahouts can still earn a living. The animal does not
                have to carry anyone or stand locked in place all afternoon.
              </p>
            </div>
            <Link href="/about" className="btn">
              Read more about our work
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>What we actually do</h2>
            <p>Three parts. That is the whole plan.</p>
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
            <h2>Visit without riding</h2>
            <p>
              If you come, you stay on the ground. Small groups. Clear rules.
              The elephant’s comfort comes first.
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
              See experiences
            </Link>{" "}
            <Link href="/get-involved" className="btn btn-outline-dark">
              Ask about a visit
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>A short clip from Sauraha</h2>
            <p>Real place. Real elephants. No filter pack.</p>
          </div>
          <div className="video-frame">
            <video
              controls
              playsInline
              preload="metadata"
              poster={PHOTOS.about}
            >
              <source src={PHOTOS.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <h2>Our rules</h2>
            <p>We try to hold ourselves to these every day.</p>
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
              <h2>Rescue fund</h2>
              <p>
                We are raising money to take one working tourist elephant out of
                riding work and keep her in chain-free care. That means vet
                checks, food, shelter, and pay for the people looking after her.
              </p>
              <p>
                Campaign money is for rescue and care. If you want details on
                how funds are used, just ask us.
              </p>
            </div>
            <CampaignProgress />
          </div>
          <div className="split-img">
            <img src={PHOTOS.campaign} alt="People with an elephant on site" />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <h2>From the field</h2>
            <p>
              A few more shots.{" "}
              <Link href="/gallery">Open the full gallery</Link>
            </p>
          </div>
          <div className="mosaic">
            <div className="mosaic-large">
              <img src="/elephant-6.jpg" alt="Elephant close up" />
            </div>
            <div className="mosaic-stack">
              <img src="/elephant-2.jpg" alt="Feeding" />
              <img src="/elephant-11.jpg" alt="On site" />
            </div>
            <div className="mosaic-wide">
              <img src="/elephant-1.jpg" alt="River" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div
          className="container"
          style={{ textAlign: "center", maxWidth: "36rem" }}
        >
          <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)" }}>
            Want to help?
          </h2>
          <p>
            You can visit, volunteer, donate toward the rescue, or share this
            page. Even a short message on WhatsApp or WeChat is useful.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            <Link href="/get-involved" className="btn">
              Get in touch
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

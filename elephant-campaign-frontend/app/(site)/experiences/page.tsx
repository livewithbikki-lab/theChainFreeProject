import type { Metadata } from "next";
import Link from "next/link";
import { EXPERIENCES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Ride-free elephant experiences in Sauraha — forest walks, feed preparation, river observation, and volunteer days.",
};

export default function ExperiencesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Experiences</h1>
          <p>
            Come close without climbing on. Every activity is ride-free, paced
            for elephant comfort, and meant to leave you changed — not the
            animal exhausted.
          </p>
        </div>
      </section>
      <section className="page-body">
        <div className="container">
          <div className="prose" style={{ marginBottom: "2rem", maxWidth: "40rem" }}>
            <p>
              People often ask: “If I cannot ride, how do I meet an elephant?”
              The answer is better than a ride. You walk nearby as she forages.
              You prepare food with your hands. You watch her choose the river.
              You learn from mahouts shifting from force toward trust.
            </p>
            <p>
              Groups stay small. Voices stay soft. There are no hooks, no forced
              poses, and no saddles. When you book, you help fund the model we
              want Sauraha to become known for.
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

          <div className="prose" style={{ marginTop: "2.5rem" }}>
            <h2>Ready when you are</h2>
            <p>
              Tell us your dates, group size, and which experience calls to you.
              We will reply with availability and clear next steps. Prices are
              shared on enquiry so we can match the right format to your group.
            </p>
            <p>
              <Link href="/get-involved" className="btn">
                Enquire or book
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

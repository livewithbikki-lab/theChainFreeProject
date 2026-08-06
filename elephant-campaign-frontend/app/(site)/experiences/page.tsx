import type { Metadata } from "next";
import Link from "next/link";
import { EXPERIENCES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Ride-free elephant experiences in Sauraha — forest walks, feed preparation, river bathing observation, and volunteer days.",
};

export default function ExperiencesPage() {
  return (
    <article className="entry">
      <header className="entry-header">
        <h1 className="entry-title">Experiences</h1>
      </header>
      <div className="entry-content" style={{ maxWidth: "100%" }}>
        <p style={{ textAlign: "left" }}>
          The best elephant encounter does not put you on a back. It puts you
          beside a free-moving giant — learning, helping, and watching life
          unfold without force. All experiences are ride-free and designed
          around elephant comfort first.
        </p>

        <div className="experience-list">
          {EXPERIENCES.map((exp) => (
            <section key={exp.id} className="experience-card" id={exp.id}>
              <div className="experience-media">
                <img src={exp.image} alt={exp.title} />
              </div>
              <div className="experience-body">
                <p className="meta">
                  {exp.duration} · {exp.price}
                </p>
                <h2>{exp.title}</h2>
                <p>{exp.summary}</p>
                <ul>
                  {exp.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <Link href="/get-involved" className="btn">
                  Book this experience
                </Link>
              </div>
            </section>
          ))}
        </div>

        <div className="callout">
          <h3>Not sure which to choose?</h3>
          <p>
            Tell us your dates, group size, and interests — we will suggest the
            gentlest fit.
          </p>
          <Link href="/get-involved" className="btn">
            Ask us
          </Link>
        </div>
      </div>
    </article>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { EXPERIENCES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Experiences",
};

export default function ExperiencesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Experiences</h1>
          <p>
            Ride-free activities designed around elephant comfort. Book through
            our contact form.
          </p>
        </div>
      </section>
      <section className="page-body">
        <div className="container">
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
          <p style={{ marginTop: "2rem" }}>
            <Link href="/get-involved" className="btn">
              Enquire or book
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

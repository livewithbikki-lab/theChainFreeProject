import type { Metadata } from "next";
import Link from "next/link";
import { PROBLEM_PHOTOS, VALUES } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "About The Chain Free Project in Sauraha — ride-free care, mahout work, and visitor programs that fund welfare.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About</h1>
          <p>
            A small project in Sauraha working for chain-free care and fair
            visitor experiences.
          </p>
        </div>
      </section>
      <section className="page-body">
        <div className="container">
          <div className="split">
            <div className="narrow" style={{ maxWidth: "none" }}>
              <p>
                <strong>The Chain Free Project</strong> started because tourist
                riding is still normal in parts of Sauraha, and many elephants
                spend long hours carrying people or standing on chains between
                work.
              </p>
              <p>
                We are not a big international NGO. We are a local effort: better
                care for elephants, jobs for mahouts done the right way, and
                visits that do not need a saddle.
              </p>
              <p>
                When guests join our programs, the money goes to welfare and the
                sanctuary fund — food, medical needs, shelter, and the people
                looking after the animals.
              </p>
            </div>
            <div className="split-img">
              <img src="/care-1.jpg" alt="Care on site" loading="lazy" />
            </div>
          </div>

          <div className="narrow" style={{ marginTop: "2.5rem" }}>
            <h2>What we refuse</h2>
            <p>Riding for tourism, and chaining as the default between work.</p>
          </div>
          <div className="problem-grid problem-grid-2" style={{ marginBottom: "2rem" }}>
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

          <div className="narrow">
            <h2>What we offer instead</h2>
            <p>
              Walks, feeding, bath observation, short visits, and volunteer
              days. Clear rules. Small groups. No forced shows.
            </p>
          </div>

          <div className="value-grid" style={{ margin: "1.5rem 0 2rem" }}>
            {VALUES.map((v) => (
              <div key={v.title} className="value">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>

          <p>
            <Link href="/experiences" className="btn">
              Programs
            </Link>{" "}
            <Link href="/get-involved" className="btn btn-outline-dark">
              Contact
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

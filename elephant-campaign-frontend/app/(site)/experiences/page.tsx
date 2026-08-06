import type { Metadata } from "next";
import Link from "next/link";
import { EXPERIENCES, WHATSAPP_URL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Ethical elephant programs in Sauraha: visit, walk, bath observation, feeding, volunteer. Fees fund welfare and sanctuary care.",
};

export default function ExperiencesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our programs</h1>
          <p>
            Ride-free activities in Sauraha. Clear times, small groups, and fees
            that go to elephant welfare and the sanctuary fund.
          </p>
        </div>
      </section>

      <section className="page-body">
        <div className="container">
          <div className="narrow" style={{ marginBottom: "2rem" }}>
            <p>
              These programs are how visitors meet our work without climbing on
              an elephant. You walk, feed, watch bathing, or help with daily
              tasks.
            </p>
            <p>
              <strong>
                Money collected from these ethical experiences goes directly to
                the fund for elephant welfare and the sanctuary.
              </strong>
            </p>
          </div>

          <div className="program-stack">
            {EXPERIENCES.map((exp) => (
              <article key={exp.id} id={exp.id} className="program-card">
                <div className="program-card-media">
                  <img src={exp.image} alt="" />
                </div>
                <div className="program-card-body">
                  <h2>{exp.title}</h2>
                  <ul className="program-facts">
                    <li>
                      <strong>Time:</strong> {exp.time}
                    </li>
                    <li>
                      <strong>Duration:</strong> {exp.duration}
                    </li>
                    <li>
                      <strong>Price:</strong> {exp.price}
                    </li>
                  </ul>
                  <p>{exp.intro}</p>
                  <h3>What you do</h3>
                  <ul>
                    {exp.activities.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                  {exp.note && <p className="program-note">{exp.note}</p>}
                  <div className="program-actions">
                    <Link href="/get-involved" className="btn">
                      Book / enquire
                    </Link>
                    <a
                      href={WHATSAPP_URL}
                      className="btn btn-outline-dark"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="narrow" style={{ marginTop: "2.5rem" }}>
            <h2>How to book</h2>
            <p>
              Message us with your dates, group size, and which program you
              want. We confirm availability, price, meeting point, and what to
              bring. Hotel pick-up in Sauraha can be arranged when we confirm
              your booking.
            </p>
            <p>
              <Link href="/get-involved" className="btn">
                Contact form
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

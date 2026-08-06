import type { Metadata } from "next";
import Link from "next/link";
import { EXPERIENCES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Ride-free elephant experiences in Sauraha: forest walks, feed prep, river watching, and volunteer days.",
};

export default function ExperiencesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Experiences</h1>
          <p>
            Ride-free activities in Sauraha. You meet the elephants without
            sitting on them. What you pay goes to their care.
          </p>
        </div>
      </section>
      <section className="page-body">
        <div className="container">
          <div
            className="prose"
            style={{ marginBottom: "2rem", maxWidth: "40rem" }}
          >
            <p>
              A lot of people only know elephant tourism as a ride. That is not
              what we offer. You walk nearby, help with food, watch bathing, or
              join a work day with the team.
            </p>
            <p>
              <strong>
                Money collected from these ethical experiences goes directly to
                the fund for elephant welfare and the sanctuary.
              </strong>{" "}
              Food, care, shelter, and the long-term work — not pocketed as a
              normal tour markup.
            </p>
            <p>
              Groups are kept small. We do not do hook shows or forced photo
              poses. If the elephants need space, we give it. Weather and river
              conditions can change the plan — we will say so upfront.
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
            <h2>Where your fee goes</h2>
            <p>
              Experience fees support daily welfare and the sanctuary fund:
              fodder, medical needs, shelter, and mahout work tied to proper
              care. When you book with us, you are funding the model — not a
              ride.
            </p>
            <h2>Booking</h2>
            <p>
              Send us your dates, how many people, and what you want to do. We
              will check availability and reply with the price and what to
              bring. No online checkout yet — just message us.
            </p>
            <p>
              <Link href="/get-involved" className="btn">
                Ask about a visit
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

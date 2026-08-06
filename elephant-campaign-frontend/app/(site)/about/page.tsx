import type { Metadata } from "next";
import Link from "next/link";
import { MISSION_PILLARS, PHOTOS, VALUES } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "About The Chain Free Project in Sauraha, Chitwan — chain-free elephant care, mahout work, and ride-free visits.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About</h1>
          <p>
            We work in Sauraha so elephants are not kept in chains for rides,
            and so local mahouts still have decent work.
          </p>
        </div>
      </section>
      <section className="page-body">
        <div className="container">
          <div className="split" style={{ marginBottom: "2.5rem" }}>
            <div className="split-img">
              <img src={PHOTOS.about} alt="Elephant face close up" />
            </div>
            <div className="prose">
              <p>
                <strong>The Chain Free Project</strong> is a small, volunteer-led
                effort in Sauraha, Chitwan. We are not a big NGO with offices
                everywhere. We are people on the ground who got tired of seeing
                elephants used only as a ride for tourists.
              </p>
              <p>
                Riding looks fun from the outside. Up close, it often means long
                hours, heavy gear, and chains when the elephant is not working.
                That is normal in parts of the industry. We do not think it
                should stay normal.
              </p>
              <p>
                At the same time, we are not here to push mahouts out of a job.
                Elephant work is a livelihood here. Our approach is to keep
                people employed while changing how the care is done — less force,
                more training, better conditions for the animals.
              </p>
            </div>
          </div>

          <div className="prose" style={{ maxWidth: "100%" }}>
            <h2>What we are trying to build</h2>
            <p>
              A place and a way of working where elephants can move more freely,
              get proper food and medical care, and meet visitors without
              carrying them. Guests still get a real experience. The elephant
              gets a better day.
            </p>

            <div className="value-grid" style={{ margin: "1.5rem 0 2rem" }}>
              {MISSION_PILLARS.map((item) => (
                <div key={item.title} className="value">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <div className="split" style={{ margin: "2rem 0" }}>
              <div className="split-img">
                <img src={PHOTOS.feed} alt="Feeding an elephant by hand" />
              </div>
              <div className="split-img">
                <img src={PHOTOS.problem} alt="Elephant with fresh fodder" />
              </div>
            </div>

            <h2>How we operate</h2>
            <div className="value-grid" style={{ marginBottom: "2rem" }}>
              {VALUES.map((v) => (
                <div key={v.title} className="value">
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              ))}
            </div>

            <h2>Who we are</h2>
            <p>
              A small team with local partners and mahouts. We grow through
              volunteers, visitors who choose ride-free options, and people who
              support the rescue fund. If you want updates or a walk through of
              the plan, contact us and we will talk straight with you.
            </p>

            <p>
              <Link href="/campaign" className="btn">
                Rescue fund
              </Link>{" "}
              <Link href="/get-involved" className="btn btn-outline-dark">
                Contact
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { MISSION_PILLARS, VALUES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "Learn why The Chain Free Project exists — chain-free sanctuary care, mahout livelihoods, and ride-free tourism in Sauraha, Chitwan.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our mission</h1>
          <p>
            End the normalcy of chains and saddles — and prove that elephant
            tourism in Sauraha can be beautiful without being cruel.
          </p>
        </div>
      </section>
      <section className="page-body">
        <div className="container prose">
          <p>
            <strong>The Chain Free Project</strong> began with a feeling many
            visitors to Sauraha quietly share: awe at the grace of elephants,
            and unease at the metal that holds them still between rides.
          </p>
          <p>
            For years, commercial tourism has asked too much of working
            elephants — long hours under heavy saddles, limited movement, and
            little space for natural behaviour like foraging, bathing, and rest.
            We do not believe that has to be the only story Nepal tells.
          </p>
          <p>
            We are a volunteer-driven initiative working at the edge of Chitwan
            National Park. Our aim is practical and hopeful: build a{" "}
            <strong>ride-free, chain-free care model</strong> that protects
            elephants and still supports the local people whose lives are woven
            with theirs.
          </p>

          <h2>What we are building</h2>
          <p>
            Not a theme park. Not a photo factory. A living sanctuary culture —
            where rescued and protected elephants receive lifelong shelter,
            food, and veterinary attention; where mahouts are trained and paid
            as guardians; and where guests leave with deeper respect than they
            arrived with.
          </p>

          <div className="value-grid" style={{ margin: "1.5rem 0 2rem" }}>
            {MISSION_PILLARS.map((item) => (
              <div key={item.title} className="value">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <h2>Our convictions</h2>
          <div className="value-grid" style={{ marginBottom: "2rem" }}>
            {VALUES.map((v) => (
              <div key={v.title} className="value">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>

          <h2>Who walks with us</h2>
          <p>
            We are small on purpose: close to the ground, close to the
            elephants, close to mahouts and neighbours in Sauraha. Progress
            grows through volunteers, ethical travellers, local partners, and
            anyone willing to choose compassion over convenience.
          </p>
          <p>
            If you have ever looked into an elephant’s eyes and felt something
            larger than words — you already understand why we do this.
          </p>

          <p>
            <Link href="/campaign" className="btn">
              Support the rescue fund
            </Link>{" "}
            <Link href="/get-involved" className="btn btn-outline-dark">
              Volunteer or visit
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

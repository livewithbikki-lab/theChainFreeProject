import type { Metadata } from "next";
import Link from "next/link";
import { VALUES } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About us</h1>
          <p>
            A simple mission in Sauraha: elephants free from chains and saddles,
            people still earning with dignity.
          </p>
        </div>
      </section>
      <section className="page-body">
        <div className="container prose">
          <p>
            <strong>The Chain Free Project</strong> is a volunteer-driven
            initiative in Sauraha, Chitwan. We work toward a sanctuary model
            where elephants can forage, bathe, rest, and live without heavy
            restraints — and where mahouts are partners in cooperative care.
          </p>
          <p>
            Tourism does not need riding to be meaningful. Guests can walk
            nearby, help prepare food, and watch river baths with respect. That
            is the experience we promote.
          </p>
          <h2>What we stand for</h2>
          <div className="value-grid" style={{ marginBottom: "2rem" }}>
            {VALUES.map((v) => (
              <div key={v.title} className="value">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
          <p>
            <Link href="/campaign" className="btn">
              See the campaign
            </Link>{" "}
            <Link href="/get-involved" className="btn btn-outline-dark">
              Get involved
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

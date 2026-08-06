import type { Metadata } from "next";
import Link from "next/link";
import CampaignProgress from "@/components/CampaignProgress";
import { CAMPAIGN, WHATSAPP_URL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Rescue Fund",
  description:
    "Support the Elephant Rescue Fund — help liberate a working tourist elephant into lifelong chain-free care in Sauraha, Chitwan.",
};

export default function CampaignPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Elephant Rescue Fund</h1>
          <p>
            One elephant. One permanent escape from commercial riding. A
            lifetime of chain-free care — made possible by people like you.
          </p>
        </div>
      </section>
      <section className="page-body">
        <div className="container">
          <div className="split">
            <div className="prose">
              <p>
                Picture dawn over the Rapti: mist rising, birds calling, and an
                elephant who once waited under a saddle instead stepping into
                soft grass — no chain on her leg, no timetable pulling her from
                the river.
              </p>
              <p>
                <strong>That is what this fund is for.</strong> We are raising{" "}
                money to buy out a working tourist elephant, move her into
                sanctuary care, and support her for life. Contributions go to
                rescue costs, veterinary healing, food, shelter, and fair work
                for the mahouts who will protect her every day.
              </p>
              <p>
                <strong>Current focus:</strong> {CAMPAIGN.elephantLabel}. We
                will publish fuller details as soon as rescue contracts are
                complete. Until then, every gift still moves freedom closer.
              </p>

              <h2>What your support covers</h2>
              <ul>
                <li>
                  Fair negotiation to release an elephant from commercial riding
                  work
                </li>
                <li>
                  Immediate veterinary checks, treatment, and recovery planning
                </li>
                <li>
                  Chain-free shelter, daily fodder, and access to natural
                  movement
                </li>
                <li>
                  Wages and training for mahouts practising cooperative care
                </li>
                <li>
                  Local education that grows ride-free tourism in Sauraha
                </li>
              </ul>

              <h2>Our promise on money</h2>
              <p>
                Campaign gifts are for rescue and care — not for dressing up
                riding as “sanctuary.” When major milestones happen, we share
                them. When you have questions, we answer them.
              </p>

              <p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark"
                >
                  WhatsApp to support
                </a>{" "}
                <Link href="/get-involved" className="btn">
                  Write to us
                </Link>
              </p>
            </div>
            <div>
              <CampaignProgress />
              <p className="progress-note" style={{ marginTop: "1rem" }}>
                Prefer another path? Visit kindly, volunteer, or share this page
                with someone who loves elephants.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

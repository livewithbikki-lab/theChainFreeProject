import type { Metadata } from "next";
import Link from "next/link";
import CampaignProgress from "@/components/CampaignProgress";
import { CAMPAIGN, WHATSAPP_URL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Campaign",
  description:
    "Elephant rescue fund for The Chain Free Project in Sauraha, Chitwan.",
};

export default function CampaignPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Rescue fund</h1>
          <p>
            We are raising money to take one working tourist elephant out of
            riding work and keep her in proper care.
          </p>
        </div>
      </section>
      <section className="page-body">
        <div className="container">
          <div className="split">
            <div className="prose">
              <p>
                Buying an elephant out of commercial work is expensive. After
                that, the costs do not stop: food every day, shelter, medicine,
                and wages for the people looking after her.
              </p>
              <p>
                That is what this fund is for. We are not asking for money to
                “raise awareness” in the abstract. We are trying to free one
                animal from riding and keep her off chains for good.
              </p>
              <p>
                <strong>Status:</strong> {CAMPAIGN.elephantLabel}. We will post
                clearer details when the paperwork is ready. Until then we are
                still collecting support so we can move when the time comes.
              </p>

              <h2>Where the money goes</h2>
              <ul>
                <li>Cost of releasing the elephant from commercial work</li>
                <li>Vet checks and treatment</li>
                <li>Food and shelter</li>
                <li>Pay and training for mahouts</li>
                <li>Basic local outreach on ride-free tourism</li>
              </ul>

              <h2>If you want to give</h2>
              <p>
                Message us on WhatsApp or use the contact form. We will tell you
                how to send support and answer questions about the campaign. We
                would rather you ask than guess.
              </p>

              <p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark"
                >
                  WhatsApp us
                </a>{" "}
                <Link href="/get-involved" className="btn">
                  Contact form
                </Link>
              </p>
            </div>
            <div>
              <CampaignProgress />
              <p className="progress-note" style={{ marginTop: "1rem" }}>
                You can also help by visiting ride-free, volunteering, or
                sending this page to someone who might care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

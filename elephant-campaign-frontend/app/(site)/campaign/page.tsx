import type { Metadata } from "next";
import Link from "next/link";
import CampaignProgress from "@/components/CampaignProgress";
import { CAMPAIGN, WHATSAPP_URL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Campaign",
};

export default function CampaignPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Elephant Rescue Fund</h1>
          <p>
            Help free a working tourist elephant into permanent chain-free care
            in Sauraha.
          </p>
        </div>
      </section>
      <section className="page-body">
        <div className="container">
          <div className="split">
            <div className="prose">
              <p>
                Commercial riding often means long hours under saddles and
                chains. Our campaign raises funds to release one elephant into
                lifelong sanctuary support — food, shelter, veterinary care, and
                trained mahout guardianship.
              </p>
              <p>
                <strong>Candidate:</strong> {CAMPAIGN.elephantLabel}. Details
                will be shared when contracts are final.
              </p>
              <ul>
                <li>Acquisition / fair release from commercial work</li>
                <li>Veterinary assessment and treatment</li>
                <li>Chain-free shelter and daily fodder</li>
                <li>Mahout wages and positive-care training</li>
              </ul>
              <p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark"
                >
                  WhatsApp to donate
                </a>{" "}
                <Link href="/get-involved" className="btn">
                  Contact us
                </Link>
              </p>
            </div>
            <CampaignProgress />
          </div>
        </div>
      </section>
    </>
  );
}

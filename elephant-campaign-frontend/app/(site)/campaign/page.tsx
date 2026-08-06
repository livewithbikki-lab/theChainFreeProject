import type { Metadata } from "next";
import Link from "next/link";
import CampaignProgress from "@/components/CampaignProgress";
import ChatLink from "@/components/ChatLink";
import { CAMPAIGN } from "@/lib/content";

export const metadata: Metadata = {
  title: "Campaign",
  description:
    "Rescue fund for The Chain Free Project. Donations and program fees support elephant welfare in Sauraha.",
};

export default function CampaignPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Rescue fund</h1>
          <p>
            Help free one working tourist elephant from riding work and keep
            her in proper care.
          </p>
        </div>
      </section>
      <section className="page-body">
        <div className="container">
          <div className="split">
            <div className="narrow" style={{ maxWidth: "none" }}>
              <p>
                Taking an elephant out of commercial riding costs money up
                front. Keeping her well costs money every day after that: food,
                shelter, medicine, and mahout wages.
              </p>
              <p>
                <strong>Status:</strong> {CAMPAIGN.elephantLabel}. We will share
                more when contracts are ready.
              </p>
              <h2>Money sources</h2>
              <ul>
                <li>Direct donations to this fund</li>
                <li>
                  Fees from ethical visitor programs (walks, feeding, visits,
                  and so on) — those go to welfare and sanctuary care
                </li>
              </ul>
              <h2>What it pays for</h2>
              <ul>
                <li>Release from commercial riding work</li>
                <li>Vet checks and treatment</li>
                <li>Food and shelter</li>
                <li>Mahout pay and training</li>
              </ul>
              <p className="btn-row">
                <ChatLink variant="whatsapp" className="btn btn-outline-dark">
                  WhatsApp
                </ChatLink>
                <ChatLink variant="wechat" className="btn btn-outline-dark">
                  WeChat
                </ChatLink>
                <Link href="/get-involved" className="btn">
                  Contact form
                </Link>
              </p>
            </div>
            <div>
              <div className="split-img" style={{ marginBottom: "1.25rem" }}>
                <img src="/care-1.jpg" alt="Care on site" loading="lazy" />
              </div>
              <CampaignProgress />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

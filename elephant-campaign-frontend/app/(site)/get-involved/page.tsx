import type { Metadata } from "next";
import VolunteerForm from "@/components/VolunteerForm";
import { WHATSAPP_URL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
};

export default function GetInvolvedPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact</h1>
          <p>
            Volunteer, book a visit, or ask about supporting the rescue fund.
          </p>
        </div>
      </section>
      <section className="page-body">
        <div className="container split">
          <div className="prose">
            <p>
              Tell us a little about yourself. We reply as soon as we can —
              usually by email or WhatsApp.
            </p>
            <p>
              Prefer chat?{" "}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Message us on WhatsApp
              </a>
              .
            </p>
          </div>
          <VolunteerForm />
        </div>
      </section>
    </>
  );
}

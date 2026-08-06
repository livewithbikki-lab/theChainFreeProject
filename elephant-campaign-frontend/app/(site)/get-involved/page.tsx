import type { Metadata } from "next";
import VolunteerForm from "@/components/VolunteerForm";
import { WHATSAPP_URL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact The Chain Free Project to volunteer, book a visit, or support the rescue fund.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact</h1>
          <p>
            Volunteer, book a visit, ask about donations, or just say hello.
          </p>
        </div>
      </section>
      <section className="page-body">
        <div className="container split">
          <div className="prose">
            <p>
              Use the form if you want to volunteer, book an experience, or send
              a longer message. Include dates if you have them. We will reply by
              email or WhatsApp.
            </p>
            <p>
              If it is easier,{" "}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                message us on WhatsApp
              </a>
              . Short questions are fine.
            </p>
            <p>
              We are a small team, so replies can take a little time. We do read
              everything.
            </p>
          </div>
          <VolunteerForm />
        </div>
      </section>
    </>
  );
}

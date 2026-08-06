import type { Metadata } from "next";
import VolunteerForm from "@/components/VolunteerForm";
import ContactChannels from "@/components/ContactChannels";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact The Chain Free Project on WhatsApp or WeChat. Volunteer, book a visit, or support the rescue fund.",
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
              Use the form for longer messages, or pick a chat option below.
              Include dates if you want to visit.
            </p>
            <ContactChannels />
            <p style={{ marginTop: "1.25rem" }}>
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

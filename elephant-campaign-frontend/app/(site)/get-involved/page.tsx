import type { Metadata } from "next";
import VolunteerForm from "@/components/VolunteerForm";
import { WHATSAPP_URL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Join Us",
  description:
    "Volunteer, book a ride-free visit, or support The Chain Free Project in Sauraha, Chitwan.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Join us</h1>
          <p>
            Whether you give time, visit gently, or support a rescue from afar —
            you become part of a freer Sauraha.
          </p>
        </div>
      </section>
      <section className="page-body">
        <div className="container split">
          <div className="prose">
            <p>
              Some people change a place by visiting with care. Others stay and
              work with their hands. Many help by sending a message of support
              or contributing to the rescue fund. All of that matters here.
            </p>
            <p>
              Use the form to <strong>volunteer</strong>,{" "}
              <strong>book a ride-free experience</strong>, or simply introduce
              yourself. Tell us your timing, your skills, or your questions. We
              read every note and reply as soon as we can.
            </p>
            <p>
              Prefer a quick chat?{" "}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Message us on WhatsApp
              </a>
              . Come as you are — leave knowing you helped an elephant’s world
              grow softer.
            </p>
          </div>
          <VolunteerForm />
        </div>
      </section>
    </>
  );
}

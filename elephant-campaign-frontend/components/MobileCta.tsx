import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/content";

export default function MobileCta() {
  return (
    <div className="mobile-cta" role="region" aria-label="Quick actions">
      <Link href="/campaign" className="mobile-cta-primary">
        Help free an elephant
      </Link>
      <a
        href={WHATSAPP_URL}
        className="mobile-cta-secondary"
        target="_blank"
        rel="noopener noreferrer"
      >
        Chat
      </a>
    </div>
  );
}

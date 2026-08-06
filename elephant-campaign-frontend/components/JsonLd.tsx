import { SITE } from "@/lib/content";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: SITE.name,
    description: SITE.tagline,
    url: SITE.url,
    areaServed: "Sauraha, Chitwan, Nepal",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

import { CAMPAIGN, SITE } from "@/lib/content";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: SITE.name,
    description: SITE.tagline,
    url: SITE.url,
    areaServed: "Sauraha, Chitwan, Nepal",
    slogan: "Elephants belong free of chains",
    nonprofitStatus: "NonprofitType",
    sameAs: [`https://wa.me/${SITE.whatsapp}`],
    knowsAbout: [
      "elephant sanctuary",
      "ethical tourism",
      "wildlife conservation",
      "chain-free elephant care",
    ],
    seeks: {
      "@type": "Demand",
      name: "Elephant Rescue Fund",
      description: `Raising ${CAMPAIGN.goalNpr} NPR to liberate a working tourist elephant.`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

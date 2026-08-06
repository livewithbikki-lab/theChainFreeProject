export const SITE = {
  name: "The Chain Free Project",
  tagline: "Chain-free elephant care in Sauraha, Chitwan",
  location: "Sauraha, Chitwan · Nepal",
  whatsapp: "9779865345753",
  url: "https://elephant-campaign.vercel.app",
};

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Hi! I want to know more about The Chain Free Project."
)}`;

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/campaign", label: "Campaign" },
  { href: "/experiences", label: "Experiences" },
  { href: "/gallery", label: "Gallery" },
  { href: "/get-involved", label: "Contact" },
] as const;

export const CAMPAIGN = {
  goalNpr: 2_000_000,
  raisedNpr: 185_000,
  status: "Rescue in progress",
  elephantLabel: "Upcoming rescue candidate",
};

export const EXPERIENCES = [
  {
    id: "forest-walk",
    title: "Forest Walk",
    duration: "2 hours",
    image: "/elephant-1.jpg",
    summary:
      "Walk beside elephants on natural paths. Observe foraging from a safe distance — no riding.",
  },
  {
    id: "feed-prep",
    title: "Feed Preparation",
    duration: "1.5 hours",
    image: "/elephant-2.jpg",
    summary:
      "Help make grass and molasses bundles, then offer food with care.",
  },
  {
    id: "river-bath",
    title: "River Bathing",
    duration: "1 hour",
    image: "/elephant-3.jpg",
    summary:
      "Watch elephants bathe in the Rapti River. Quiet observation only.",
  },
  {
    id: "volunteer",
    title: "Volunteer Day",
    duration: "Flexible",
    image: "/elephant-5.jpg",
    summary:
      "Assist mahouts with shelter care, fodder, and simple daily tasks.",
  },
] as const;

export const GALLERY_ITEMS = [
  { src: "/elephant-1.jpg", title: "Forest morning" },
  { src: "/elephant-2.jpg", title: "Feed care" },
  { src: "/elephant-3.jpg", title: "River time" },
  { src: "/elephant-4.jpg", title: "Mahout partnership" },
  { src: "/elephant-5.jpg", title: "Volunteer work" },
  { src: "/elephant-6.jpg", title: "Community outreach" },
] as const;

export const VALUES = [
  {
    title: "No chains",
    text: "We work toward a life without heavy restraints for working elephants.",
  },
  {
    title: "No riding",
    text: "Visitors meet elephants on the ground — walks, food, and observation only.",
  },
  {
    title: "Local livelihoods",
    text: "Mahouts stay employed through cooperative, positive care methods.",
  },
  {
    title: "Lifelong care",
    text: "Rescue means shelter, food, veterinary support — not a one-day story.",
  },
] as const;

export function formatNpr(amount: number) {
  return `Rs. ${amount.toLocaleString("en-NP")}`;
}

export function campaignProgress() {
  return Math.min(
    100,
    Math.round((CAMPAIGN.raisedNpr / CAMPAIGN.goalNpr) * 100)
  );
}

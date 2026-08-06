export const SITE = {
  name: "The Chain Free Project",
  tagline: "Chain-free elephant care in Sauraha, Chitwan",
  location: "Sauraha, Chitwan · Nepal",
  whatsapp: "9779865345753",
  url: "https://elephant-campaign.vercel.app",
};

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Hi, I want to know more about The Chain Free Project."
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
  status: "Rescue planning in progress",
  elephantLabel: "Rescue candidate (details soon)",
};

export const EXPERIENCES = [
  {
    id: "forest-walk",
    title: "Forest walk",
    duration: "About 2 hours",
    image: "/elephant-1.jpg",
    summary:
      "Walk with the group near the elephants on forest paths. You watch them feed and move around. No riding.",
  },
  {
    id: "feed-prep",
    title: "Feed prep",
    duration: "About 1.5 hours",
    image: "/elephant-2.jpg",
    summary:
      "Help make food bundles with grass, salt, and molasses, then feed the elephants with the mahouts.",
  },
  {
    id: "river-bath",
    title: "River bathing",
    duration: "About 1 hour",
    image: "/elephant-3.jpg",
    summary:
      "Watch elephants bathe in the Rapti from a safe distance. Good for photos if you keep quiet and give them space.",
  },
  {
    id: "volunteer",
    title: "Volunteer day",
    duration: "Half day or longer",
    image: "/elephant-5.jpg",
    summary:
      "Help with daily work: fodder, cleaning, shelter tasks. Real work, not a show.",
  },
] as const;

export const GALLERY_ITEMS = [
  {
    src: "/elephant-1.jpg",
    title: "In the forest",
    caption: "Moving and feeding without a timetable.",
  },
  {
    src: "/elephant-2.jpg",
    title: "Making food",
    caption: "Daily feed prep with the team.",
  },
  {
    src: "/elephant-3.jpg",
    title: "At the river",
    caption: "Bathing in the Rapti.",
  },
  {
    src: "/elephant-4.jpg",
    title: "With mahouts",
    caption: "Care based on training and trust.",
  },
  {
    src: "/elephant-5.jpg",
    title: "Volunteers",
    caption: "Extra hands on ordinary days.",
  },
  {
    src: "/elephant-6.jpg",
    title: "In Sauraha",
    caption: "Talking with people about ride-free tourism.",
  },
] as const;

export const VALUES = [
  {
    title: "No chains",
    text: "We want elephants off heavy chains as much as possible. They need room to move and rest.",
  },
  {
    title: "No riding",
    text: "Visitors stay on the ground. Walks, feeding, and watching only.",
  },
  {
    title: "Work for mahouts",
    text: "Local handlers keep jobs. We focus on better pay and better training, not cutting people out.",
  },
  {
    title: "Long-term care",
    text: "If we take on an elephant, we plan for food, shelter, and vet care for the long run — not just the rescue day.",
  },
] as const;

export const MISSION_PILLARS = [
  {
    title: "Rescue and shelter",
    text: "Help get working elephants out of riding work and into safer, chain-free care.",
  },
  {
    title: "Mahout training",
    text: "Train and employ local mahouts in positive, cooperative handling.",
  },
  {
    title: "Visitor experiences",
    text: "Offer simple ride-free activities that teach people a better way to meet elephants.",
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

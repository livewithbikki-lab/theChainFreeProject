export const SITE = {
  name: "The Chain Free Project",
  tagline: "Chain-free elephant care in Sauraha, Chitwan",
  location: "Sauraha, Chitwan · Nepal",
  whatsapp: "9779865345753",
  wechat: "+977-9708063226",
  url: "https://elephant-campaign.vercel.app",
};

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Hi, I want to know more about The Chain Free Project."
)}`;

export const WHATSAPP_DISPLAY = `+${SITE.whatsapp.replace(
  /^(\d{3})(\d+)$/,
  "$1 $2"
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

/**
 * Image roles:
 * - care / hero = good days (no riding, no chains)
 * - ride = elephants carrying people
 * - saddle = elephants chained in habitat
 */
export const PHOTOS = {
  hero: "/hero.jpg",
  about: "/care-4.jpg",
  campaign: "/care-1.jpg",
  feed: "/care-1.jpg",
  walk: "/care-3.jpg",
  river: "/hero.jpg",
  volunteer: "/care-4.jpg",
} as const;

export const EXPERIENCES = [
  {
    id: "forest-walk",
    title: "Forest walk",
    duration: "About 2 hours",
    image: PHOTOS.walk,
    summary:
      "Walk with the group near the elephants on forest paths. You watch them feed and move around. No riding.",
  },
  {
    id: "feed-prep",
    title: "Feed prep",
    duration: "About 1.5 hours",
    image: PHOTOS.feed,
    summary:
      "Help make food bundles with grass, salt, and molasses, then feed the elephants with the mahouts.",
  },
  {
    id: "river-bath",
    title: "River bathing",
    duration: "About 1 hour",
    image: PHOTOS.river,
    summary:
      "Watch elephants bathe in the Rapti from a safe distance. Good for photos if you keep quiet and give them space.",
  },
  {
    id: "volunteer",
    title: "Volunteer day",
    duration: "Half day or longer",
    image: PHOTOS.volunteer,
    summary:
      "Help with daily work: fodder, cleaning, shelter tasks. Real work, not a show.",
  },
] as const;

/** Positive gallery — no saddle shots */
export const GALLERY_ITEMS = [
  { src: "/hero.jpg", title: "River time", caption: "Cool water, no rush.", wide: true },
  { src: "/care-1.jpg", title: "Feeding", caption: "Trunk and trust.", wide: false },
  { src: "/care-2.jpg", title: "Fresh greens", caption: "Daily food.", wide: false },
  { src: "/care-3.jpg", title: "On site", caption: "Eating in peace.", wide: false },
  { src: "/care-4.jpg", title: "With people", caption: "Calm, close encounters.", wide: false },
  { src: "/care-5.jpg", title: "Sauraha days", caption: "From our work here.", wide: true },
  { src: "/care-6.jpg", title: "Afternoon", caption: "Ordinary hours.", wide: false },
  { src: "/care-7.jpg", title: "Together", caption: "Herd and handlers.", wide: false },
  { src: "/care-8.jpg", title: "Open ground", caption: "Room to move.", wide: false },
  { src: "/care-9.jpg", title: "Field work", caption: "Hands-on care.", wide: false },
  { src: "/care-10.jpg", title: "Details", caption: "Skin, dust, sun.", wide: false },
  { src: "/care-11.jpg", title: "Home ground", caption: "Where this project lives.", wide: false },
] as const;

/** Shown only in problem sections — not in gallery / experiences */
export const PROBLEM_PHOTOS = [
  {
    src: "/ride-1.jpg",
    kind: "ride" as const,
    label: "Riding — elephants made to carry people",
  },
  {
    src: "/ride-2.jpg",
    kind: "ride" as const,
    label: "Riding — still sold as a tourist activity",
  },
  {
    src: "/saddle-1.jpg",
    kind: "chain" as const,
    label: "Chained in habitat between work",
  },
  {
    src: "/saddle-2.jpg",
    kind: "chain" as const,
    label: "Chained — little room to move or rest",
  },
  {
    src: "/saddle-3.jpg",
    kind: "chain" as const,
    label: "Chained life is what we want to end",
  },
] as const;

export const HOME_STRIP = [
  "/care-1.jpg",
  "/care-2.jpg",
  "/care-3.jpg",
  "/care-4.jpg",
  "/care-5.jpg",
  "/hero.jpg",
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

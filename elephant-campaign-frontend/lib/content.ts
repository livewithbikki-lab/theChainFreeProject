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

/** Best photo for each use */
export const PHOTOS = {
  hero: "/elephant-1.jpg", // river
  problem: "/elephant-3.jpg", // eating greens
  about: "/elephant-6.jpg", // face portrait
  campaign: "/elephant-5.jpg", // with people
  feed: "/elephant-2.jpg", // trunk feeding
  walk: "/elephant-4.jpg",
  river: "/elephant-1.jpg",
  volunteer: "/elephant-5.jpg",
  video: "/sauraha-clip.mp4",
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

export const GALLERY_ITEMS = [
  { src: "/elephant-1.jpg", title: "River time", caption: "Cool water, no rush.", wide: true },
  { src: "/elephant-2.jpg", title: "Feeding", caption: "Trunk and trust.", wide: false },
  { src: "/elephant-6.jpg", title: "Close up", caption: "Looking back at us.", wide: false },
  { src: "/elephant-3.jpg", title: "Fresh greens", caption: "Daily food, ordinary care.", wide: false },
  { src: "/elephant-4.jpg", title: "On site", caption: "Eating in peace.", wide: false },
  { src: "/elephant-5.jpg", title: "With people", caption: "Guests and mahouts nearby.", wide: true },
  { src: "/elephant-7.jpg", title: "Sauraha days", caption: "From our work here.", wide: false },
  { src: "/elephant-8.jpg", title: "Care routine", caption: "Hands-on help.", wide: false },
  { src: "/elephant-9.jpg", title: "Around the shelter", caption: "Real place, real animals.", wide: false },
  { src: "/elephant-10.jpg", title: "Afternoon light", caption: "Quiet hours.", wide: false },
  { src: "/elephant-11.jpg", title: "Together", caption: "Herd and handlers.", wide: true },
  { src: "/elephant-12.jpg", title: "Open ground", caption: "Room to move.", wide: false },
  { src: "/elephant-13.jpg", title: "Field notes", caption: "Work in progress.", wide: false },
  { src: "/elephant-14.jpg", title: "Details", caption: "Skin, dust, sun.", wide: false },
  { src: "/elephant-15.jpg", title: "Home ground", caption: "Where this project lives.", wide: false },
] as const;

export const HOME_STRIP = [
  "/elephant-2.jpg",
  "/elephant-6.jpg",
  "/elephant-3.jpg",
  "/elephant-5.jpg",
  "/elephant-4.jpg",
  "/elephant-1.jpg",
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

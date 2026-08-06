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
  { href: "/experiences", label: "Programs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/get-involved", label: "Contact" },
] as const;

export const CAMPAIGN = {
  goalNpr: 2_000_000,
  raisedNpr: 185_000,
  status: "Rescue planning in progress",
  elephantLabel: "Rescue candidate (details soon)",
};

/** Best photos only — keep public/ in sync with this list */
export const PHOTOS = {
  heroTop: "/hero-top.jpg",
  river: "/hero.jpg",
  feed: "/care-1.jpg",
  site: "/care-2.jpg",
  people: "/care-4.jpg",
  ride: "/ride-1.jpg",
  chained: "/chained-habitat.jpg",
} as const;

export const EXPERIENCES = [
  {
    id: "visit",
    title: "Visit the project",
    time: "By appointment",
    duration: "30–45 minutes",
    price: "Price on request",
    image: PHOTOS.people,
    intro:
      "A short, calm visit to meet the elephants and learn how chain-free care works here.",
    activities: [
      "Meet and greet with the elephants from a safe distance",
      "Optional feeding if the team says it is a good moment",
      "Learn about daily care, mahout work, and why we do not offer rides",
      "See them move and rest without a riding schedule",
    ],
    note: "Good first visit if you have limited time in Sauraha.",
  },
  {
    id: "walk",
    title: "Walk with elephants",
    time: "Morning or late afternoon",
    duration: "About 2 hours",
    price: "Price on request",
    image: PHOTOS.site,
    intro:
      "Walk nearby as the elephants move through natural paths. No riding. Guides and mahouts stay with you.",
    activities: [
      "Short briefing before you start",
      "Walk alongside / near the elephants in a natural setting",
      "Watch feeding and natural behaviour",
      "Time for questions and photos without forcing poses",
    ],
    note: "Minimum group size may apply. We confirm when you book.",
  },
  {
    id: "bath",
    title: "Elephant bath (observe)",
    time: "Depends on weather and river",
    duration: "About 1 hour",
    price: "Price on request",
    image: PHOTOS.river,
    intro:
      "Watch elephants bathe in the river. You can stay back and observe, or join scrubbing only if the team says it is safe and wanted that day.",
    activities: [
      "Guided observation at the river",
      "Learn about elephant skin care and river routine",
      "Optional gentle scrubbing if invited by mahouts",
      "No hooks, no forced shows",
    ],
    note: "River level and weather can change the plan. We tell you upfront.",
  },
  {
    id: "feed",
    title: "Feed the elephants",
    time: "By appointment",
    duration: "About 1–1.5 hours",
    price: "Price on request",
    image: PHOTOS.feed,
    intro:
      "Help prepare food and feed the elephants with the team. Includes simple treats made on site when available.",
    activities: [
      "Help prepare fodder or food bundles",
      "Hand-feed under mahout guidance",
      "Learn what they eat and why variety matters",
      "Support daily nutrition, not a circus act",
    ],
    note: "Book ahead so food and staffing are ready.",
  },
  {
    id: "volunteer",
    title: "Volunteer day",
    time: "Flexible",
    duration: "Half day or longer",
    price: "Contribution-based",
    image: PHOTOS.people,
    intro:
      "Join real daily work: fodder, cleaning, shelter tasks. Not a photo package — actual help.",
    activities: [
      "Fodder collection or prep",
      "Shelter and grounds help",
      "Support mahouts with routine care",
      "Learn ethical handling basics on site",
    ],
    note: "Tell us your dates and experience level when you write.",
  },
] as const;

export const GALLERY_ITEMS = [
  { src: PHOTOS.river, title: "River", caption: "Bath and rest time." },
  { src: PHOTOS.feed, title: "Feeding", caption: "Daily care." },
  { src: PHOTOS.site, title: "On site", caption: "Room to move." },
  { src: PHOTOS.people, title: "With the team", caption: "Calm visits only." },
] as const;

export const PROBLEM_PHOTOS = [
  {
    src: PHOTOS.ride,
    kind: "ride" as const,
    label: "Riding — elephants made to carry tourists",
  },
  {
    src: PHOTOS.chained,
    kind: "chain" as const,
    label: "Chained in habitat when not working",
  },
] as const;

export const VALUES = [
  {
    title: "No riding, no chains",
    text: "Visitors stay on the ground. We work toward freer movement and rest — not rides or hours locked in place.",
  },
  {
    title: "Fees fund care",
    text: "Money from ethical programs goes to elephant welfare and the sanctuary fund.",
  },
  {
    title: "Mahouts keep work",
    text: "Local handlers stay employed. Better training and conditions — not cutting people out.",
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

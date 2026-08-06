export const SITE = {
  name: "The Chain Free Project",
  tagline: "Where elephants walk free in Sauraha, Chitwan",
  location: "Sauraha, Chitwan · Nepal",
  whatsapp: "9779865345753",
  url: "https://elephant-campaign.vercel.app",
};

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Hi! I want to know more about The Chain Free Project and how I can help."
)}`;

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Mission" },
  { href: "/campaign", label: "Rescue Fund" },
  { href: "/experiences", label: "Experiences" },
  { href: "/gallery", label: "Gallery" },
  { href: "/get-involved", label: "Join Us" },
] as const;

export const CAMPAIGN = {
  goalNpr: 2_000_000,
  raisedNpr: 185_000,
  status: "Rescue arrangements underway",
  elephantLabel: "Upcoming rescue candidate",
};

export const EXPERIENCES = [
  {
    id: "forest-walk",
    title: "Forest Walk",
    duration: "About 2 hours",
    image: "/elephant-1.jpg",
    summary:
      "Walk quietly beside an elephant on natural paths. Watch how she chooses leaves, dust, and shade — tourism that never needs a saddle.",
  },
  {
    id: "feed-prep",
    title: "Feed Preparation",
    duration: "About 1.5 hours",
    image: "/elephant-2.jpg",
    summary:
      "Roll grass, salt, and molasses into nourishing bundles. Learn what healthy care looks like, then offer food with your own hands.",
  },
  {
    id: "river-bath",
    title: "River Bathing",
    duration: "About 1 hour",
    image: "/elephant-3.jpg",
    summary:
      "From a respectful distance, watch elephants splash and rest in the Rapti River — pure joy, never a forced show.",
  },
  {
    id: "volunteer",
    title: "Volunteer Day",
    duration: "Half day or more",
    image: "/elephant-5.jpg",
    summary:
      "Work alongside mahouts: fodder, shelter upkeep, and the quiet daily tasks that keep sanctuary life running.",
  },
] as const;

export const GALLERY_ITEMS = [
  {
    src: "/elephant-1.jpg",
    title: "Morning in the forest",
    caption: "Free to choose the path — no route, no hurry.",
  },
  {
    src: "/elephant-2.jpg",
    title: "Food made with care",
    caption: "Small acts of nutrition that keep a giant strong.",
  },
  {
    src: "/elephant-3.jpg",
    title: "Rapti River time",
    caption: "Water, sun, and play without pressure.",
  },
  {
    src: "/elephant-4.jpg",
    title: "Mahouts as guardians",
    caption: "Partnership built on trust, not force.",
  },
  {
    src: "/elephant-5.jpg",
    title: "Many hands helping",
    caption: "Volunteers sharing the work of daily care.",
  },
  {
    src: "/elephant-6.jpg",
    title: "A kinder Sauraha",
    caption: "Growing ride-free tourism with the community.",
  },
] as const;

export const VALUES = [
  {
    title: "Freedom from chains",
    text: "Heavy chains and long restraint are not a fair price for tourism. We work so elephants can move, rest, and live with room to be themselves.",
  },
  {
    title: "Encounters without riding",
    text: "The best meeting happens on the ground: walking nearby, preparing food, watching a river bath — wonder that does not sit on a back.",
  },
  {
    title: "Dignity for mahouts",
    text: "Local handlers are essential. We support fair work and training in cooperative, positive care so livelihoods grow with compassion.",
  },
  {
    title: "Care that lasts a lifetime",
    text: "Rescue is not a photo moment. It is shelter, food, veterinary healing, and a permanent promise never to return an elephant to the saddle.",
  },
] as const;

export const MISSION_PILLARS = [
  {
    title: "Rescue & sanctuary",
    text: "Help working elephants leave commercial riding life for permanent chain-free shelter, forest time, and medical care.",
  },
  {
    title: "Mahout partnership",
    text: "Employ and train local mahouts in positive reinforcement — turning restraint-based habits into skilled, proud guardianship.",
  },
  {
    title: "Ethical tourism",
    text: "Offer visitors honest, hands-off experiences that fund welfare and teach a better story of how to meet elephants in Nepal.",
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

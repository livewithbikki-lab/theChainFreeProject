export const SITE = {
  name: "The Chain Free Project",
  tagline: "Ethical elephant welfare in Sauraha, Chitwan",
  location: "Sauraha, Chitwan • Nepal",
  whatsapp: "9779865345753",
};

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/campaign", label: "Campaign" },
  { href: "/gallery", label: "Gallery" },
  { href: "/get-involved", label: "Get involved" },
] as const;

export const RECENT_ACTIVITIES = [
  {
    href: "/campaign",
    title: "Elephant Rescue Fund — active pledge",
  },
  {
    href: "/about",
    title: "Building a chain-free sanctuary model in Sauraha",
  },
  {
    href: "/gallery",
    title: "Forest foraging and river bathing updates",
  },
  {
    href: "/get-involved",
    title: "Volunteer openings with local mahouts",
  },
  {
    href: "/campaign",
    title: "Hands-off visitor education programme",
  },
] as const;

export const HOME_POSTS = [
  {
    href: "/campaign",
    category: "Campaign",
    title: "Help liberate a working tourist elephant",
    excerpt:
      "100% of contributions go directly to rescue, veterinary care, and lifetime shelter support for elephants freed from commercial riding tours in Sauraha.",
    image: "/elephant-1.jpg",
    featured: true,
  },
  {
    href: "/about",
    category: "About",
    title: "Why elephants belong free of chains",
    excerpt:
      "We work with local mahouts to replace heavy restraints and saddles with cooperative care, forest grazing, and ethical, observant tourism.",
    image: "/elephant-2.jpg",
    featured: true,
  },
  {
    href: "/gallery",
    category: "Gallery",
    title: "Life beyond the saddle",
    excerpt:
      "Photos from natural grazing habitats, feed preparation, Rapti River bathing, and community conservation outreach.",
    image: "/elephant-3.jpg",
    featured: true,
  },
  {
    href: "/get-involved",
    category: "Volunteer",
    title: "Join our conservation team",
    excerpt:
      "Assist with shelter upkeep, fodder harvesting, visitor education, and advocacy for ride-free tourism in Chitwan.",
    image: "/elephant-4.jpg",
    featured: false,
  },
] as const;

export const GALLERY_ITEMS = [
  {
    src: "/elephant-1.jpg",
    title: "Foraging in the Forest",
    subtitle: "Natural Grazing Habitats",
    description:
      "Rescued elephants exploring jungle habitats freely without the pressure of tourism.",
  },
  {
    src: "/elephant-2.jpg",
    title: "Feed Preparation",
    subtitle: "Nutritional Care",
    description:
      "Volunteers and mahouts crafting grass and molasses bundles to sustain elephant health.",
  },
  {
    src: "/elephant-3.jpg",
    title: "Rapti River Bathing",
    subtitle: "Observation at a Distance",
    description:
      "Watching elephants splash and swim naturally from a safe, non-intrusive distance.",
  },
  {
    src: "/elephant-4.jpg",
    title: "Mahout Training",
    subtitle: "Empowerment & Education",
    description:
      "Training local handlers in positive-reinforcement techniques to phase out heavy hooks.",
  },
  {
    src: "/elephant-5.jpg",
    title: "Volunteer Work",
    subtitle: "Community Collaboration",
    description:
      "Community builders assisting in shelter upkeep, trail building, and local advocacy.",
  },
  {
    src: "/elephant-6.jpg",
    title: "Conservation Outreach",
    subtitle: "Ethical Tourism",
    description:
      "Engaging tourist agencies in Sauraha to promote ride-free and chain-free practices.",
  },
] as const;

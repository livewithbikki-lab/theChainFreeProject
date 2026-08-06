export const SITE = {
  name: "The Chain Free Project",
  tagline: "Where elephants walk free in Sauraha, Chitwan",
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
    title: "A rescue is underway — every gift brings freedom closer",
  },
  {
    href: "/about",
    title: "Meet the dream: a chain-free home beside the jungle",
  },
  {
    href: "/gallery",
    title: "Morning light, river baths, and quiet forest walks",
  },
  {
    href: "/get-involved",
    title: "Walk with us — volunteer and visitor openings",
  },
  {
    href: "/campaign",
    title: "Tourism without saddles: a kinder way to meet elephants",
  },
] as const;

export const HOME_POSTS = [
  {
    href: "/campaign",
    category: "Campaign",
    title: "One elephant. One chance to walk free.",
    excerpt:
      "Somewhere in Sauraha, a working elephant still spends long days under a saddle and heavy chains. Your support can rewrite that story — forever.",
    image: "/elephant-1.jpg",
    featured: true,
  },
  {
    href: "/about",
    category: "About",
    title: "Imagine a place where no chain is needed",
    excerpt:
      "We are building a sanctuary where elephants forage, bathe, and rest as nature intended — and where local mahouts thrive through care, not control.",
    image: "/elephant-2.jpg",
    featured: true,
  },
  {
    href: "/gallery",
    category: "Gallery",
    title: "This is what freedom looks like",
    excerpt:
      "Dust on trunks. Water sparkling on wrinkled skin. Quiet footsteps through green forest. See the moments that make this work worth everything.",
    image: "/elephant-3.jpg",
    featured: true,
  },
  {
    href: "/get-involved",
    category: "Volunteer",
    title: "You do not have to watch from afar",
    excerpt:
      "Come prepare food, walk beside giants, learn from mahouts, and leave knowing you helped build something kinder in Chitwan.",
    image: "/elephant-4.jpg",
    featured: false,
  },
] as const;

export const GALLERY_ITEMS = [
  {
    src: "/elephant-1.jpg",
    title: "Morning in the forest",
    subtitle: "Where they choose the path",
    description:
      "No route. No hurry. Just an elephant moving through green light, tasting leaves, and remembering what wild feels like.",
  },
  {
    src: "/elephant-2.jpg",
    title: "Made with care",
    subtitle: "Food prepared by hand",
    description:
      "Grass, salt, and molasses rolled into nourishing bundles — small acts of love that keep a giant strong.",
  },
  {
    src: "/elephant-3.jpg",
    title: "Rapti River joy",
    subtitle: "Water, sun, and splash",
    description:
      "Watch from a respectful distance as elephants sink into cool river water — pure play, pure peace.",
  },
  {
    src: "/elephant-4.jpg",
    title: "A new kind of partnership",
    subtitle: "Mahouts as guardians",
    description:
      "Training rooted in trust and positive reinforcement — so care replaces force, and pride replaces pressure.",
  },
  {
    src: "/elephant-5.jpg",
    title: "Many hands, one purpose",
    subtitle: "Volunteers at work",
    description:
      "Shelter upkeep, fodder harvest, trail care — ordinary work that builds an extraordinary future.",
  },
  {
    src: "/elephant-6.jpg",
    title: "Changing the story of tourism",
    subtitle: "Ride-free Sauraha",
    description:
      "Conversations with guides and lodges that plant a simple idea: the best elephant encounter needs no saddle.",
  },
] as const;

export const SITE = {
  name: "The Chain Free Project",
  tagline: "Where elephants walk free in Sauraha, Chitwan",
  location: "Sauraha, Chitwan • Nepal",
  whatsapp: "9779865345753",
  url: "https://elephant-campaign.vercel.app",
  email: "hello@thechainfreeproject.org",
};

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Hi! I want to support The Chain Free Project."
)}`;

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/campaign", label: "Campaign" },
  { href: "/experiences", label: "Experiences" },
  { href: "/updates", label: "Updates" },
  { href: "/team", label: "Team" },
  { href: "/transparency", label: "Transparency" },
  { href: "/gallery", label: "Gallery" },
  { href: "/get-involved", label: "Get involved" },
] as const;

export const CAMPAIGN = {
  goalNpr: 2_000_000,
  raisedNpr: 185_000,
  status: "Rescue arrangements in progress",
  elephantLabel: "Upcoming rescue candidate",
};

/** Planned use of every rescue-fund rupee (percentages should total 100). */
export const BUDGET_BREAKDOWN = [
  {
    label: "Elephant acquisition / release",
    percent: 45,
    detail:
      "Fair negotiation to free a working tourist elephant from commercial riding work.",
  },
  {
    label: "Veterinary care & rehabilitation",
    percent: 20,
    detail:
      "Health checks, treatment, foot care, nutrition plans, and recovery support.",
  },
  {
    label: "Shelter, fodder & daily care",
    percent: 18,
    detail:
      "Chain-free shelter upkeep, food, forest access, and essentials for daily welfare.",
  },
  {
    label: "Mahout livelihoods & training",
    percent: 12,
    detail:
      "Fair wages and positive-reinforcement training so care replaces force.",
  },
  {
    label: "Community education & ops",
    percent: 5,
    detail:
      "Local outreach, ride-free advocacy, and transparent campaign operations.",
  },
] as const;

export const TEAM = [
  {
    name: "Campaign core team",
    role: "Coordination & sanctuary vision",
    image: "/elephant-4.jpg",
    bio: "A small group of conservation advocates in Sauraha working to replace chains and saddles with ethical, observant tourism and permanent sanctuary care.",
  },
  {
    name: "Local mahout partners",
    role: "Daily guardianship",
    image: "/elephant-5.jpg",
    bio: "Experienced elephant handlers learning and practising cooperative, positive-reinforcement care — skilled work rooted in trust, not control.",
  },
  {
    name: "Community volunteers",
    role: "Hands, hearts & outreach",
    image: "/elephant-2.jpg",
    bio: "Visitors and neighbours who help with fodder, shelter care, education, and spreading the ride-free message across Chitwan.",
  },
] as const;

export const PARTNERS = [
  {
    name: "Sauraha community partners",
    type: "Local",
    detail:
      "Guides, lodges, and neighbours open to a kinder tourism model that still supports livelihoods.",
  },
  {
    name: "Veterinary collaborators",
    type: "Care",
    detail:
      "Animal-health professionals who advise on rescue readiness, treatment, and long-term welfare.",
  },
  {
    name: "Ethical travel advocates",
    type: "Outreach",
    detail:
      "Travellers and storytellers who choose observation over riding — and invite others to do the same.",
  },
  {
    name: "You",
    type: "Supporter",
    detail:
      "Every share, visit, volunteer day, and contribution makes chain-free care possible. Partners are not only organisations — they are people who care.",
  },
] as const;

export const RECENT_ACTIVITIES = [
  {
    href: "/transparency",
    title: "Transparency: where every rescue rupee goes",
  },
  {
    href: "/team",
    title: "Meet the team, mahouts & partners",
  },
  {
    href: "/campaign",
    title: "Rescue fund open — every gift brings freedom closer",
  },
  {
    href: "/updates/why-chains-must-end",
    title: "Field note: why chains must end in Sauraha",
  },
  {
    href: "/get-involved",
    title: "Volunteer openings with local mahouts",
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
    href: "/experiences",
    category: "Experiences",
    title: "Meet elephants the gentle way",
    excerpt:
      "Walk nearby, prepare food, watch river baths — wonder without a saddle, connection without control.",
    image: "/elephant-3.jpg",
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
    href: "/updates",
    category: "Updates",
    title: "Stories from the field",
    excerpt:
      "Small notes from Sauraha: progress, people, and the quiet victories that keep this mission alive.",
    image: "/elephant-5.jpg",
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

export const EXPERIENCES = [
  {
    id: "forest-walk",
    title: "Forest walk",
    duration: "About 2 hours",
    price: "Price on request",
    image: "/elephant-1.jpg",
    summary:
      "Walk alongside elephants through natural pathways. Observe foraging from a safe, respectful distance.",
    details: [
      "Small groups only — calm atmosphere for elephants",
      "Guided by local mahouts and our team",
      "No riding, no hooks, no forced poses",
      "Ideal for photographers and families",
    ],
  },
  {
    id: "feed-prep",
    title: "Feed preparation",
    duration: "About 1.5 hours",
    price: "Price on request",
    image: "/elephant-2.jpg",
    summary:
      "Craft supplementary food bundles with grass, salt, and molasses — then offer them with care.",
    details: [
      "Hands-on, meaningful work",
      "Learn what healthy elephant nutrition looks like",
      "Perfect for volunteers and curious visitors",
      "All ages welcome with supervision",
    ],
  },
  {
    id: "river-bath",
    title: "River bathing observation",
    duration: "About 1 hour",
    price: "Price on request",
    image: "/elephant-3.jpg",
    summary:
      "Watch elephants splash and bathe in the Rapti River — a natural highlight, never a show.",
    details: [
      "Observation from a non-intrusive distance",
      "Beautiful light for ethical photography",
      "Weather and river conditions may vary timing",
      "Quiet voices, soft footsteps",
    ],
  },
  {
    id: "volunteer-day",
    title: "Volunteer day",
    duration: "Flexible",
    price: "Contribution-based",
    image: "/elephant-5.jpg",
    summary:
      "Assist mahouts with shelter care, fodder harvesting, and community outreach.",
    details: [
      "Real conservation work, not tourism theatre",
      "Learn cooperative care methods",
      "Half-day or multi-day options",
      "Apply via Get involved — we match you to needs",
    ],
  },
] as const;

export type UpdatePost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  body: string[];
};

export const UPDATES: UpdatePost[] = [
  {
    slug: "why-chains-must-end",
    title: "Why chains must end in Sauraha",
    date: "2026-07-12",
    category: "Field note",
    excerpt:
      "A quiet morning observation — and the promise behind everything we build.",
    image: "/elephant-1.jpg",
    body: [
      "At first light in Sauraha, the jungle does not shout. It breathes. Birds call. Mist lifts off the Rapti. And somewhere nearby, an elephant shifts her weight against a chain that has never asked for her consent.",
      "That contrast is why The Chain Free Project exists. Not to shame tourism, but to upgrade it — so visitors still leave with wonder, and elephants leave each day with choice.",
      "Chains are efficient for commercial schedules. They are not kind. They limit movement, rest, and natural social behaviour. A freer model takes more care, more training, and more community partnership. That is the work we chose.",
      "If you have felt that mix of awe and unease on an elephant ride, you already understand. Join us in building the alternative.",
    ],
  },
  {
    slug: "rescue-fund-open",
    title: "The rescue fund is open — and every gift counts",
    date: "2026-07-28",
    category: "Campaign",
    excerpt:
      "We are raising Rs. 2,000,000 to liberate a working tourist elephant into lifetime chain-free care.",
    image: "/elephant-4.jpg",
    body: [
      "Rescue is not a slogan. It is negotiation, veterinary care, shelter, fodder, and fair work for mahouts who will protect an elephant for life.",
      "Our campaign goal is Rs. 2,000,000. Contributions go directly to acquisition, medical healing, and long-term sanctuary support. We will publish candidate details as soon as contracts are finalised.",
      "You can support through our Get involved page or message us on WhatsApp. Whether your gift is large or small, it becomes part of the day a chain comes off.",
      "Thank you for believing that Nepal’s elephants deserve freedom written into their daily routine — not only into our hopes.",
    ],
  },
  {
    slug: "gentle-ways-to-meet-elephants",
    title: "Gentle ways to meet elephants",
    date: "2026-08-02",
    category: "Experiences",
    excerpt:
      "Forest walks, feed prep, river observation, and volunteer days — tourism that does not need a saddle.",
    image: "/elephant-3.jpg",
    body: [
      "People ask us: “If I cannot ride, how do I meet an elephant?” The answer is better than a ride.",
      "Walk nearby as she forages. Prepare food with your hands. Watch her choose the river. Learn from mahouts who are shifting from force to trust. These moments stay with you longer than any saddle photo.",
      "Our experiences are designed around elephant comfort first. Small groups. Soft voices. No hooks. No forced poses. When you book, you fund the model we want Sauraha to become famous for.",
      "Ready when you are — see Experiences or send a booking note through Get involved.",
    ],
  },
];

export function getUpdate(slug: string) {
  return UPDATES.find((u) => u.slug === slug);
}

export function formatNpr(amount: number) {
  return `Rs. ${amount.toLocaleString("en-NP")}`;
}

export function campaignProgress() {
  const pct = Math.min(
    100,
    Math.round((CAMPAIGN.raisedNpr / CAMPAIGN.goalNpr) * 100)
  );
  return pct;
}

import Link from "next/link";
import type { Metadata } from "next";
import { HOME_POSTS, SITE } from "@/lib/content";
import CampaignProgress from "@/components/CampaignProgress";

export const metadata: Metadata = {
  title: "Home",
  description: SITE.tagline,
};

export default function HomePage() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-media">
          <img src="/elephant-1.jpg" alt="Elephant in the forest near Sauraha" />
          <div className="hero-overlay" />
        </div>
        <div className="hero-copy">
          <p className="hero-kicker">{SITE.location}</p>
          <h1 className="hero-title">
            Elephants belong in the wild,
            <span> not bound in heavy chains.</span>
          </h1>
          <p className="hero-text">
            We are building a chain-free sanctuary in Sauraha — where elephants
            walk, bathe, and rest freely, and visitors meet them with respect.
          </p>
          <div className="hero-actions">
            <Link href="/campaign" className="btn">
              Support the rescue
            </Link>
            <Link href="/experiences" className="btn btn-ghost">
              See experiences
            </Link>
          </div>
        </div>
      </section>

      <div className="home-progress">
        <CampaignProgress />
      </div>

      <div className="post-list">
        {HOME_POSTS.map((post) => (
          <article key={post.href + post.title} className="post-card">
            {post.featured && (
              <Link href={post.href} className="post-thumb">
                <img src={post.image} alt={post.title} />
              </Link>
            )}
            <Link href={post.href} className="post-category">
              {post.category}
            </Link>
            <h2 className="post-title">
              <Link href={post.href}>{post.title}</Link>
            </h2>
            <p className="post-excerpt">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

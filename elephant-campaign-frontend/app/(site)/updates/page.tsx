import type { Metadata } from "next";
import Link from "next/link";
import { UPDATES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Updates",
  description:
    "Field notes and campaign updates from The Chain Free Project in Sauraha, Chitwan.",
};

export default function UpdatesPage() {
  return (
    <div className="post-list">
      <header className="entry-header" style={{ marginBottom: "1.5rem" }}>
        <h1 className="entry-title">Updates</h1>
        <p className="post-excerpt">
          Stories from the field — progress, people, and the quiet work of
          building a freer Sauraha.
        </p>
      </header>

      {UPDATES.map((post) => (
        <article key={post.slug} className="post-card">
          <Link href={`/updates/${post.slug}`} className="post-thumb">
            <img src={post.image} alt={post.title} />
          </Link>
          <p className="post-category">
            {post.category} ·{" "}
            {new Date(post.date).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h2 className="post-title">
            <Link href={`/updates/${post.slug}`}>{post.title}</Link>
          </h2>
          <p className="post-excerpt">{post.excerpt}</p>
          <p style={{ marginTop: "0.75rem" }}>
            <Link href={`/updates/${post.slug}`}>Read more →</Link>
          </p>
        </article>
      ))}
    </div>
  );
}

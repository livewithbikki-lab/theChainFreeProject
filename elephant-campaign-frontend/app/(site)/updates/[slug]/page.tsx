import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ShareButtons from "@/components/ShareButtons";
import { UPDATES, getUpdate } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return UPDATES.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getUpdate(slug);
  if (!post) return { title: "Update" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function UpdatePostPage({ params }: Props) {
  const { slug } = await params;
  const post = getUpdate(slug);
  if (!post) notFound();

  return (
    <article className="entry">
      <header className="entry-header">
        <p className="post-category">
          {post.category} ·{" "}
          {new Date(post.date).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h1 className="entry-title">{post.title}</h1>
      </header>
      <div className="entry-content">
        <div className="post-thumb" style={{ marginBottom: "1.25rem" }}>
          <img src={post.image} alt={post.title} />
        </div>
        {post.body.map((para) => (
          <p key={para.slice(0, 32)}>{para}</p>
        ))}
        <p>
          <Link href="/updates">← All updates</Link>
          {" · "}
          <Link href="/get-involved">Get involved</Link>
        </p>

        <ShareButtons
          path={`/updates/${post.slug}`}
          title={post.title}
          text={post.excerpt}
        />
      </div>
    </article>
  );
}

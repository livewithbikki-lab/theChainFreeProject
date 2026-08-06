import Link from 'next/link';
import type { Metadata } from 'next';
import { HOME_POSTS } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Home',
};

export default function HomePage() {
  return (
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
  );
}

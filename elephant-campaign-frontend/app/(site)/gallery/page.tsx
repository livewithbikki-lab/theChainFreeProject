import type { Metadata } from 'next';
import { GALLERY_ITEMS } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Gallery',
};

export default function GalleryPage() {
  return (
    <article className="entry">
      <header className="entry-header">
        <h1 className="entry-title">Sanctuary Gallery</h1>
      </header>
      <div className="entry-content" style={{ maxWidth: '100%' }}>
        <p style={{ textAlign: 'left' }}>
          Visual updates from our ongoing campaign—natural grazing, care routines,
          river bathing, and community work in Sauraha.
        </p>
        <div className="gallery-grid">
          {GALLERY_ITEMS.map((item) => (
            <figure key={item.src} className="gallery-item">
              <img src={item.src} alt={item.title} />
              <div className="meta">{item.subtitle}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </figure>
          ))}
        </div>
      </div>
    </article>
  );
}

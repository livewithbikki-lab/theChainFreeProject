import type { Metadata } from "next";
import { GALLERY_ITEMS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Gallery</h1>
          <p>Moments from care, forest time, and community work in Sauraha.</p>
        </div>
      </section>
      <section className="page-body">
        <div className="container">
          <div className="gallery-grid">
            {GALLERY_ITEMS.map((item) => (
              <figure key={item.src}>
                <img src={item.src} alt={item.title} />
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

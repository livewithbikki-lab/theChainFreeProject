import type { Metadata } from "next";
import { GALLERY_ITEMS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from chain-free elephant care in Sauraha — forest time, river baths, mahout partnership, and community work.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Gallery</h1>
          <p>
            Not performance shots — quiet proofs that an elephant’s day can hold
            choice, water, green leaves, and human hands that only mean
            kindness.
          </p>
        </div>
      </section>
      <section className="page-body">
        <div className="container">
          <div className="gallery-grid">
            {GALLERY_ITEMS.map((item) => (
              <figure key={item.src}>
                <img src={item.src} alt={item.title} />
                <figcaption>
                  <strong>{item.title}</strong>
                  {item.caption ? ` — ${item.caption}` : ""}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

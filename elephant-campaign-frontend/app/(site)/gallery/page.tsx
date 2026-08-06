import type { Metadata } from "next";
import { GALLERY_ITEMS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A few photos from The Chain Free Project in Sauraha.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Gallery</h1>
          <p>A few photos from care work. No riding shots.</p>
        </div>
      </section>
      <section className="page-body">
        <div className="container">
          <div className="gallery-simple">
            {GALLERY_ITEMS.map((item) => (
              <figure key={item.src}>
                <div className="gallery-frame">
                  <img src={item.src} alt={item.title} loading="lazy" />
                </div>
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

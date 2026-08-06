import type { Metadata } from "next";
import { GALLERY_ITEMS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from The Chain Free Project in Sauraha, Chitwan.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Gallery</h1>
          <p>
            A few photos from the work in Sauraha — forest time, feeding, the
            river, and people on site.
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

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
            Photos from care work in Sauraha — river time, feeding, and ordinary
            days with the elephants. No riding shots here.
          </p>
        </div>
      </section>
      <section className="page-body">
        <div className="container">
          <div className="gallery-mosaic">
            {GALLERY_ITEMS.map((item) => (
              <figure
                key={item.src}
                className={item.wide ? "is-wide" : undefined}
              >
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

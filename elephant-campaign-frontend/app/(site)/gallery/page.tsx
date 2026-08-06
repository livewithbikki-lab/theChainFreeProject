import type { Metadata } from "next";
import { GALLERY_ITEMS, PHOTOS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos and a short video from The Chain Free Project in Sauraha.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Gallery</h1>
          <p>
            Photos from Sauraha — river time, feeding, faces, and ordinary work
            days. Plus a short clip at the top.
          </p>
        </div>
      </section>
      <section className="page-body">
        <div className="container">
          <div className="video-frame" style={{ marginBottom: "2rem" }}>
            <video
              controls
              playsInline
              preload="metadata"
              poster={PHOTOS.about}
            >
              <source src={PHOTOS.video} type="video/mp4" />
            </video>
          </div>

          <div className="gallery-mosaic">
            {GALLERY_ITEMS.map((item) => (
              <figure
                key={item.src}
                className={item.wide ? "is-wide" : undefined}
              >
                <img src={item.src} alt={item.title} loading="lazy" />
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

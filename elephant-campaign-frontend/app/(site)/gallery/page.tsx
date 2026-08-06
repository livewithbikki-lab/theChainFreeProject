import type { Metadata } from "next";
import GalleryLightbox from "@/components/GalleryLightbox";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Scenes of chain-free elephant life in Sauraha — forest walks, river baths, care, and community.",
};

export default function GalleryPage() {
  return (
    <article className="entry">
      <header className="entry-header">
        <h1 className="entry-title">Moments of freedom</h1>
      </header>
      <div className="entry-content" style={{ maxWidth: "100%" }}>
        <p style={{ textAlign: "left" }}>
          These are not performance shots. They are quiet proofs — that an
          elephant’s day can be filled with choice, water, green leaves, and
          human hands that only mean kindness. Tap any photo to view larger.
        </p>
        <GalleryLightbox />
      </div>
    </article>
  );
}

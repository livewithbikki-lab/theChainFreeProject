'use client';

import { useCallback, useEffect, useState } from "react";
import { GALLERY_ITEMS } from "@/lib/content";

export default function GalleryLightbox() {
  const [active, setActive] = useState<number | null>(null);
  const item = active !== null ? GALLERY_ITEMS[active] : null;

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => {
    setActive((i) =>
      i === null ? i : (i + GALLERY_ITEMS.length - 1) % GALLERY_ITEMS.length
    );
  }, []);
  const next = useCallback(() => {
    setActive((i) => (i === null ? i : (i + 1) % GALLERY_ITEMS.length));
  }, []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [active, close, prev, next]);

  return (
    <>
      <div className="gallery-grid">
        {GALLERY_ITEMS.map((g, index) => (
          <figure key={g.src} className="gallery-item">
            <button
              type="button"
              className="gallery-open"
              onClick={() => setActive(index)}
              aria-label={`Open ${g.title}`}
            >
              <img src={g.src} alt={g.title} />
            </button>
            <div className="meta">{g.subtitle}</div>
            <h3>{g.title}</h3>
            <p>{g.description}</p>
          </figure>
        ))}
      </div>

      {item && active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.title}>
          <button type="button" className="lightbox-backdrop" onClick={close} aria-label="Close" />
          <div className="lightbox-panel">
            <button type="button" className="lightbox-close" onClick={close} aria-label="Close">
              ✕
            </button>
            <img src={item.src} alt={item.title} className="lightbox-image" />
            <div className="lightbox-caption">
              <p className="meta">{item.subtitle}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="lightbox-nav">
                <button type="button" onClick={prev}>
                  ← Prev
                </button>
                <span>
                  {active + 1} / {GALLERY_ITEMS.length}
                </span>
                <button type="button" onClick={next}>
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

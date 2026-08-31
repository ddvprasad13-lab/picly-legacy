import { useEffect, useRef, useState } from "react";
import type { Photo } from "@/data/album";
import { Lightbox } from "./Lightbox";

const PAGE = 24;

/**
 * Masonry memory wall built for very large albums (500–1000 photographs).
 * Only `PAGE` photographs are mounted at a time; more are appended as the
 * visitor approaches the end of the wall, and every image is lazy-loaded.
 */
export function MemoryWall({ photos }: { photos: Photo[] }) {
  const [count, setCount] = useState(PAGE);
  const [open, setOpen] = useState<number | null>(null);
  const sentinel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sentinel.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setCount((c) => Math.min(c + PAGE, photos.length));
        }
      },
      { rootMargin: "600px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [photos.length]);

  const visible = photos.slice(0, count);

  return (
    <>
      <div className="masonry">
        {visible.map((p, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={`Open ${p.alt}`}
            className="masonry-item group block w-full cursor-zoom-in overflow-hidden bg-[oklch(0.94_0.012_75)]"
          >
            <img
              src={p.thumb ?? p.src}
              alt={p.alt}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              style={{ aspectRatio: p.ratio ? String(p.ratio) : "3/4" }}
              className="w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
            />
          </button>
        ))}
      </div>

      <div ref={sentinel} aria-hidden className="h-px w-full" />

      {count < photos.length ? (
        <p className="eyebrow mt-10 text-center text-muted-foreground">
          {count} of {photos.length} photographs
        </p>
      ) : null}

      <Lightbox photos={photos} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </>
  );
}

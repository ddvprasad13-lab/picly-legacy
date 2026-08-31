import { useState } from "react";
import type { Photo } from "@/data/album";
import { Lightbox } from "./Lightbox";
import { PhotoFigure } from "./PhotoFigure";

/** A self-contained grid + lightbox for a story section. */
export function Gallery({
  photos,
  className = "grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5",
  itemClassName,
  aspect,
}: {
  photos: Photo[];
  className?: string;
  itemClassName?: string | undefined;
  aspect?: string | undefined;
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <div className={className}>
        {photos.map((p, i) => (
          <PhotoFigure
            key={i}
            photo={p}
            {...(aspect ? { aspect } : {})}
            delay={(i % 4) * 70}
            className={itemClassName ?? ""}
            onOpen={() => setOpen(i)}
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        ))}
      </div>
      <Lightbox photos={photos} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </>
  );
}

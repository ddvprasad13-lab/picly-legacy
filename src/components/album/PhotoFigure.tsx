import type { Photo } from "@/data/album";
import { Reveal } from "./Reveal";

type Props = {
  photo: Photo;
  onOpen?: () => void;
  className?: string;
  /** aspect-ratio css value, e.g. "3/4". Defaults to the photo ratio. */
  aspect?: string | undefined;
  delay?: number;
  priority?: boolean;
  sizes?: string;
};

export function PhotoFigure({
  photo,
  onOpen,
  className = "",
  aspect,
  delay = 0,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: Props) {
  return (
    <Reveal as="figure" delay={delay} className={`group overflow-hidden ${className}`}>
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open ${photo.alt}`}
        className="block h-full w-full cursor-zoom-in overflow-hidden bg-[oklch(0.94_0.012_75)]"
        style={{ aspectRatio: aspect ?? (photo.ratio ? String(photo.ratio) : "3/4") }}
      >
        <img
          src={photo.thumb ?? photo.src}
          alt={photo.alt}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "low"}
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
      </button>
    </Reveal>
  );
}

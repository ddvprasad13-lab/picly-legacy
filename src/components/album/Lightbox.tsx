import { useCallback, useEffect, useRef, useState } from "react";
import type { Photo } from "@/data/album";

type Props = {
  photos: Photo[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
};

export function Lightbox({ photos, index, onClose, onIndexChange }: Props) {
  const open = index !== null;
  const touchX = useRef<number | null>(null);
  const [drag, setDrag] = useState(0);

  const go = useCallback(
    (delta: number) => {
      if (index === null) return;
      const next = (index + delta + photos.length) % photos.length;
      onIndexChange(next);
    },
    [index, photos.length, onIndexChange],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, go, onClose]);

  if (!open || index === null) return null;
  const photo = photos[index];
  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-[oklch(0.14_0.012_60_/_0.97)] animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Photograph viewer"
      onTouchStart={(e) => {
        touchX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchMove={(e) => {
        const x = e.touches[0]?.clientX;
        if (touchX.current !== null && x !== undefined) setDrag(x - touchX.current);
      }}
      onTouchEnd={() => {
        if (Math.abs(drag) > 55) go(drag < 0 ? 1 : -1);
        touchX.current = null;
        setDrag(0);
      }}
    >
      <div className="flex items-center justify-between px-5 py-4 text-[0.7rem] tracking-[0.3em] uppercase text-[oklch(0.88_0.02_70)]">
        <span>
          {index + 1} / {photos.length}
        </span>
        <button onClick={onClose} aria-label="Close viewer" className="tracking-[0.3em] hover:opacity-70 transition-opacity">
          Close ✕
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden px-3 pb-8">
        <button
          aria-label="Previous photograph"
          onClick={() => go(-1)}
          className="absolute left-2 z-10 hidden h-12 w-12 items-center justify-center rounded-full text-2xl text-[oklch(0.92_0.02_70)] transition-opacity hover:opacity-60 sm:flex"
        >
          ‹
        </button>
        <img
          key={index}
          src={photo.src}
          alt={photo.alt}
          decoding="async"
          style={{ transform: `translateX(${drag * 0.25}px)` }}
          className="max-h-full max-w-full object-contain animate-scale-in"
        />
        <button
          aria-label="Next photograph"
          onClick={() => go(1)}
          className="absolute right-2 z-10 hidden h-12 w-12 items-center justify-center rounded-full text-2xl text-[oklch(0.92_0.02_70)] transition-opacity hover:opacity-60 sm:flex"
        >
          ›
        </button>
      </div>
    </div>
  );
}

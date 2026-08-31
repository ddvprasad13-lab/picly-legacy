import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Reveal } from "@/components/album/Reveal";
import { SectionTitle } from "@/components/album/SectionTitle";
import { PhotoFigure } from "@/components/album/PhotoFigure";
import { Gallery } from "@/components/album/Gallery";
import { MemoryWall } from "@/components/album/MemoryWall";
import { Lightbox } from "@/components/album/Lightbox";
import {
  closing,
  couple,
  heroPhoto,
  journey,
  memoryWall,
  sections,
  story,
} from "@/data/album";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arjun & Ananya — The Beginning of Forever | Picly" },
      {
        name: "description",
        content:
          "A digital wedding album by Picly. Relive Arjun & Ananya's wedding — engagement, haldi, mehendi, ceremony and reception in one cinematic story.",
      },
      { property: "og:title", content: "Arjun & Ananya — The Beginning of Forever" },
      {
        property: "og:description",
        content:
          "A luxury digital wedding album by Picly: photographs, moments and memories from 12 • 02 • 2026.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Album,
});

function Album() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Story />
      <Couple />
      <Journey />
      <Engagement />
      <Haldi />
      <Mehendi />
      <Wedding />
      <People />
      <Candid />
      <Reception />
      <Portraits />
      <Memory />
      <SpecialMessage />
      <Closing />
      <Footer />
    </main>
  );
}

/* 1. HERO --------------------------------------------------------------- */
function Hero() {
  return (
    <section className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden">
      <img
        src={heroPhoto.src}
        alt={heroPhoto.alt}
        width={1920}
        height={1280}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,oklch(0.2_0.02_60/0.5),oklch(0.2_0.02_60/0.28)_45%,oklch(0.2_0.02_60/0.62))]" />

      <div className="relative z-10 px-6 text-center text-[oklch(0.98_0.008_85)]">
        <Reveal>
          <p className="eyebrow">The Beginning of Forever</p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="font-serif text-[clamp(3rem,13vw,8rem)] font-light leading-[0.95]">
            {couple.names}
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-6 text-[0.78rem] tracking-[0.45em] uppercase opacity-90">{couple.date}</p>
        </Reveal>
        <Reveal delay={340}>
          <p className="script mt-6 text-[clamp(1.2rem,3.4vw,1.9rem)] opacity-95">
            {couple.subtitle}
          </p>
        </Reveal>
      </div>

      <a
        href="#story"
        className="scroll-hint absolute bottom-8 z-10 text-[0.62rem] tracking-[0.42em] uppercase text-[oklch(0.98_0.008_85)]"
      >
        Scroll to begin ↓
      </a>
    </section>
  );
}

/* 2. STORY -------------------------------------------------------------- */
function Story() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="story" className="px-6 py-24 md:px-12 md:py-40">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1fr_0.9fr] md:gap-20">
        <div>
          <SectionTitle label={story.label} title={story.heading} align="left" />
          <Reveal delay={120}>
            <p className="mt-8 max-w-lg text-[1.02rem] leading-[1.9] text-muted-foreground">
              {story.body}
            </p>
            <span className="hairline mt-10" />
          </Reveal>
        </div>
        <PhotoFigure
          photo={story.photo}
          aspect="3/4"
          onOpen={() => setOpen(0)}
          sizes="(max-width: 768px) 100vw, 45vw"
        />
      </div>
      <Lightbox photos={[story.photo]} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </section>
  );
}

/* 3. THE COUPLE --------------------------------------------------------- */
function Couple() {
  const photos = [
    { src: couple.bride.photo, alt: couple.bride.name, ratio: 3 / 4 },
    { src: couple.groom.photo, alt: couple.groom.name, ratio: 3 / 4 },
  ];
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-secondary/60 px-6 py-24 md:px-12 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
        {[couple.bride, couple.groom].map((p, i) => (
          <div key={p.name} className={i === 1 ? "md:mt-24" : ""}>
            <PhotoFigure
              photo={{ src: p.photo, alt: p.name, ratio: 3 / 4 }}
              aspect="3/4"
              delay={i * 120}
              onOpen={() => setOpen(i)}
              sizes="(max-width: 768px) 100vw, 45vw"
            />
            <Reveal delay={i * 120 + 80}>
              <p className="eyebrow mt-6 text-muted-foreground">{p.role}</p>
              <h3 className="font-serif text-[clamp(2rem,6vw,3.25rem)] font-light leading-none">
                {p.name}
              </h3>
            </Reveal>
          </div>
        ))}
      </div>
      <Lightbox photos={photos} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </section>
  );
}

/* 4. JOURNEY ------------------------------------------------------------ */
function Journey() {
  const all = journey.flatMap((m) => m.photos);
  const [open, setOpen] = useState<number | null>(null);
  let cursor = 0;

  return (
    <section className="px-6 py-24 md:px-12 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionTitle label="Their Story, Step by Step" title="The Journey" />

        <ol className="relative mt-20 space-y-20 border-l border-border pl-6 md:space-y-28 md:pl-14">
          {journey.map((m, i) => {
            const start = cursor;
            cursor += m.photos.length;
            return (
              <li key={m.title} className="relative">
                <span className="absolute -left-[1.72rem] top-2 h-1.5 w-1.5 rounded-full bg-primary md:-left-[3.55rem]" />
                <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-14">
                  <Reveal>
                    <p className="eyebrow text-muted-foreground">{m.date}</p>
                    <h3 className="font-serif text-[clamp(1.7rem,4.5vw,2.6rem)] font-light leading-tight">
                      {m.title}
                    </h3>
                    <p className="mt-4 max-w-sm leading-[1.9] text-muted-foreground">{m.text}</p>
                  </Reveal>
                  <div className="grid gap-4">
                    {m.photos.map((p, j) => (
                      <PhotoFigure
                        key={j}
                        photo={p}
                        aspect="4/3"
                        delay={j * 90 + (i % 2) * 40}
                        onOpen={() => setOpen(start + j)}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      <Lightbox photos={all} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </section>
  );
}

/* 5. ENGAGEMENT --------------------------------------------------------- */
function Engagement() {
  return (
    <section className="py-24 md:py-36">
      <div className="px-6 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="The Engagement" caption={sections.engagement.caption} />
        </div>
      </div>

      <Reveal className="mt-14 w-full">
        <img
          src={sections.engagement.hero.src}
          alt={sections.engagement.hero.alt}
          loading="lazy"
          decoding="async"
          className="h-[55vh] w-full object-cover md:h-[80vh]"
        />
      </Reveal>

      <div className="mx-auto mt-6 max-w-6xl px-6 md:mt-8 md:px-12">
        <Gallery photos={sections.engagement.photos} aspect="3/4" />
      </div>
    </section>
  );
}

/* 6. HALDI -------------------------------------------------------------- */
function Haldi() {
  const p = sections.haldi.photos;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[oklch(0.965_0.03_92)] px-6 py-24 md:px-12 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="Haldi" caption={sections.haldi.caption} align="left" />

        <div className="mt-14 grid gap-4 md:grid-cols-12 md:gap-6">
          {p[0] ? (
            <PhotoFigure photo={p[0]} aspect="16/10" className="md:col-span-8" onOpen={() => setOpen(0)} />
          ) : null}
          {p[1] ? (
            <PhotoFigure photo={p[1]} aspect="1/1" className="md:col-span-4 md:mt-16" onOpen={() => setOpen(1)} delay={80} />
          ) : null}
          {p[2] ? (
            <PhotoFigure photo={p[2]} aspect="3/4" className="md:col-span-5" onOpen={() => setOpen(2)} delay={40} />
          ) : null}
          {p[3] ? (
            <PhotoFigure photo={p[3]} aspect="4/3" className="md:col-span-7 md:mt-20" onOpen={() => setOpen(3)} delay={120} />
          ) : null}
          {p[4] ? (
            <PhotoFigure photo={p[4]} aspect="21/9" className="md:col-span-12" onOpen={() => setOpen(4)} delay={60} />
          ) : null}
        </div>
      </div>
      <Lightbox photos={p} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </section>
  );
}

/* 7. MEHENDI ------------------------------------------------------------ */
function Mehendi() {
  const p = sections.mehendi.photos;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-6 py-24 md:px-12 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-end">
          <SectionTitle title="Mehendi" caption={sections.mehendi.caption} align="left" />
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-12 md:gap-6">
          {p[0] ? (
            <PhotoFigure photo={p[0]} aspect="1/1" className="md:col-span-5 md:col-start-2" onOpen={() => setOpen(0)} />
          ) : null}
          {p[1] ? (
            <PhotoFigure photo={p[1]} aspect="3/4" className="md:col-span-4 md:mt-24" onOpen={() => setOpen(1)} delay={80} />
          ) : null}
          {p[2] ? (
            <PhotoFigure photo={p[2]} aspect="16/9" className="md:col-span-7" onOpen={() => setOpen(2)} delay={40} />
          ) : null}
          {p[3] ? (
            <PhotoFigure photo={p[3]} aspect="4/5" className="md:col-span-4 md:mt-12" onOpen={() => setOpen(3)} delay={120} />
          ) : null}
          {p[4] ? (
            <PhotoFigure photo={p[4]} aspect="3/4" className="md:col-span-5 md:col-start-4" onOpen={() => setOpen(4)} delay={60} />
          ) : null}
        </div>
      </div>
      <Lightbox photos={p} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </section>
  );
}

/* 8. THE WEDDING -------------------------------------------------------- */
function Wedding() {
  return (
    <section>
      <div className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden">
        <img
          src={sections.wedding.hero.src}
          alt={sections.wedding.hero.alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[oklch(0.18_0.02_55/0.45)]" />
        <div className="relative z-10 px-6 text-center text-[oklch(0.98_0.008_85)]">
          <Reveal>
            <h2 className="font-serif text-[clamp(2.6rem,11vw,7rem)] font-light leading-none">
              The Wedding
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="script mt-6 text-[clamp(1.15rem,3.2vw,1.8rem)]">
              Two hearts. One promise. Forever.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-28">
        <Gallery
          photos={sections.wedding.photos}
          className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6"
          aspect="3/4"
        />
      </div>
    </section>
  );
}

/* 9. THE PEOPLE WE LOVE ------------------------------------------------- */
function People() {
  const p = sections.family.photos;
  const [open, setOpen] = useState<number | null>(null);
  const spans = [
    "md:col-span-8",
    "md:col-span-4 md:mt-16",
    "md:col-span-4",
    "md:col-span-4 md:mt-12",
    "md:col-span-4",
    "md:col-span-12",
  ];
  const aspects = ["4/3", "3/4", "3/4", "4/3", "3/4", "21/9"];

  return (
    <section className="bg-secondary/60 px-6 py-24 md:px-12 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="The People We Love" caption={sections.family.message} />
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12 md:gap-6">
          {p.map((photo, i) => (
            <PhotoFigure
              key={i}
              photo={photo}
              aspect={aspects[i] ?? "4/3"}
              className={spans[i] ?? "md:col-span-4"}
              delay={(i % 3) * 80}
              onOpen={() => setOpen(i)}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ))}
        </div>
      </div>
      <Lightbox photos={p} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </section>
  );
}

/* 10. CANDID ------------------------------------------------------------ */
function Candid() {
  return (
    <section className="bg-[oklch(0.19_0.014_55)] px-6 py-24 text-[oklch(0.95_0.01_80)] md:px-12 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="The Moments in Between" tone="dark" />
        <div className="mt-14">
          <Gallery
            photos={sections.candid.photos}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8"
            aspect="4/3"
          />
        </div>
      </div>
    </section>
  );
}

/* 11. RECEPTION --------------------------------------------------------- */
function Reception() {
  return (
    <section className="py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <SectionTitle title="The Reception" caption={sections.reception.caption} />
      </div>
      <Reveal className="mt-14">
        <img
          src={sections.reception.hero.src}
          alt={sections.reception.hero.alt}
          loading="lazy"
          decoding="async"
          className="h-[55vh] w-full object-cover md:h-[78vh]"
        />
      </Reveal>
      <div className="mx-auto mt-6 max-w-6xl px-6 md:mt-8 md:px-12">
        <Gallery
          photos={sections.reception.photos}
          className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6"
          aspect="3/4"
        />
      </div>
    </section>
  );
}

/* 12. PORTRAITS --------------------------------------------------------- */
function Portraits() {
  const p = sections.portraits.photos;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-6 py-24 md:px-12 md:py-40">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="script text-[clamp(1.8rem,6vw,3.4rem)]">{sections.portraits.caption}</p>
        </Reveal>

        <div className="mt-20 space-y-16 md:space-y-32">
          {p[0] ? (
            <div className="md:w-[62%]">
              <PhotoFigure photo={p[0]} aspect="3/4" onOpen={() => setOpen(0)} />
            </div>
          ) : null}
          {p[1] ? (
            <div className="md:ml-auto md:w-[75%]">
              <PhotoFigure photo={p[1]} aspect="4/3" onOpen={() => setOpen(1)} />
            </div>
          ) : null}
          {p[2] ? (
            <div className="md:mx-auto md:w-[52%]">
              <PhotoFigure photo={p[2]} aspect="3/4" onOpen={() => setOpen(2)} />
            </div>
          ) : null}
          {p[3] ? (
            <div className="md:w-[85%]">
              <PhotoFigure photo={p[3]} aspect="16/9" onOpen={() => setOpen(3)} />
            </div>
          ) : null}
        </div>
      </div>
      <Lightbox photos={p} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </section>
  );
}

/* 13. MEMORY WALL ------------------------------------------------------- */
function Memory() {
  return (
    <section className="bg-secondary/60 px-6 py-24 md:px-12 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          label={`${memoryWall.length} photographs`}
          title="Memory Wall"
          caption="Tap any photograph to open it."
        />
        <div className="mt-14">
          <MemoryWall photos={memoryWall} />
        </div>
      </div>
    </section>
  );
}

/* 14. SPECIAL MESSAGE --------------------------------------------------- */
function SpecialMessage() {
  return (
    <section className="relative flex min-h-[80svh] items-center justify-center overflow-hidden px-6 py-28">
      <img
        src={closing.message.photo.src}
        alt={closing.message.photo.alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[oklch(0.2_0.02_55/0.42)]" />
      <div className="relative z-10 max-w-2xl text-center text-[oklch(0.98_0.008_85)]">
        <Reveal>
          <h2 className="font-serif text-[clamp(1.9rem,6vw,3.6rem)] font-light leading-tight">
            {closing.message.title}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-8 leading-[2] opacity-95">{closing.message.body}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* 15. CLOSING ----------------------------------------------------------- */
function Closing() {
  return (
    <section className="relative flex h-[100svh] items-center justify-center overflow-hidden">
      <img
        src={closing.final.photo.src}
        alt={closing.final.photo.alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[oklch(0.2_0.02_55/0.5)]" />
      <div className="relative z-10 px-6 text-center text-[oklch(0.98_0.008_85)]">
        <Reveal>
          <p className="eyebrow">{closing.final.title}</p>
          <h2 className="font-serif text-[clamp(2.6rem,10vw,6rem)] font-light leading-none">
            {couple.names}
          </h2>
          <p className="mt-6 text-[0.75rem] tracking-[0.45em] uppercase opacity-90">{couple.date}</p>
          <p className="script mt-8 text-[clamp(1.15rem,3.2vw,1.7rem)]">{closing.final.thanks}</p>
        </Reveal>
        <a
          href="#story"
          className="mt-12 inline-block text-[0.62rem] tracking-[0.42em] uppercase opacity-80 transition-opacity hover:opacity-100"
        >
          Back to top ↑
        </a>
      </div>
    </section>
  );
}

/* 16. FOOTER ------------------------------------------------------------ */
function Footer() {
  return (
    <footer className="px-6 py-20 text-center md:py-28">
      <p className="font-serif text-[clamp(1.4rem,4vw,2rem)] font-light tracking-[0.18em] uppercase">
        Arjun & Ananya
      </p>
      <p className="eyebrow mt-5 text-muted-foreground">{couple.tagline}</p>
      <p className="script text-[1.35rem] text-muted-foreground">Captured with love.</p>
      <p className="mt-14 text-[0.6rem] tracking-[0.36em] uppercase text-muted-foreground">
        Digital Wedding Album by Picly
      </p>
    </footer>
  );
}

/**
 * ALBUM DATA
 * ---------------------------------------------------------------
 * Everything on the album page is driven by this file.
 * To use your own wedding photographs:
 *   1. Drop the files into `src/assets/` (or use any https URL / CDN URL)
 *   2. Import them below and swap the `src` values
 * The layout and design stay exactly the same.
 */

import heroImg from "@/assets/hero.jpg";
import storyImg from "@/assets/story.jpg";
import brideImg from "@/assets/bride.jpg";
import groomImg from "@/assets/groom.jpg";
import engagementImg from "@/assets/engagement.jpg";
import haldiImg from "@/assets/haldi.jpg";
import mehendiImg from "@/assets/mehendi.jpg";
import weddingImg from "@/assets/wedding.jpg";
import familyImg from "@/assets/family.jpg";
import candidImg from "@/assets/candid.jpg";
import receptionImg from "@/assets/reception.jpg";
import portrait1Img from "@/assets/portrait-1.jpg";
import portrait2Img from "@/assets/portrait-2.jpg";
import closingImg from "@/assets/closing.jpg";

export type Photo = {
  /** Display / lightbox source. Can be a local import or a remote URL. */
  src: string;
  /** Optional smaller thumbnail used in grids. Falls back to `src`. */
  thumb?: string;
  alt: string;
  /** Natural aspect ratio, used to reserve layout space (prevents shifting). */
  ratio?: number;
};

export const couple = {
  names: "Arjun & Ananya",
  bride: { name: "Ananya", role: "The Bride", photo: brideImg },
  groom: { name: "Arjun", role: "The Groom", photo: groomImg },
  date: "12 • 02 • 2026",
  tagline: "The Beginning of Forever",
  subtitle: "A story of two hearts, one beautiful journey.",
};

export const story = {
  label: "Our Story",
  heading: "Two Lives. One Beautiful Beginning.",
  body:
    "Some moments are meant to be remembered forever. From the first smile to the moment they said “I do”, this album brings together the people, emotions and little moments that made their wedding unforgettable.",
  photo: { src: storyImg, alt: "Arjun and Ananya by the window", ratio: 1024 / 1400 },
};

export const heroPhoto: Photo = {
  src: heroImg,
  alt: "Arjun and Ananya at golden hour",
  ratio: 1920 / 1280,
};

export const journey = [
  {
    date: "March 2022",
    title: "First Meeting",
    text: "A crowded room, a shared joke, and a conversation that never quite ended.",
    photos: [{ src: portrait2Img, alt: "First meeting", ratio: 1600 / 1100 }],
  },
  {
    date: "June 2022",
    title: "First Date",
    text: "Coffee that went cold because neither of them wanted to stop talking.",
    photos: [{ src: candidImg, alt: "First date", ratio: 1600 / 1100 }],
  },
  {
    date: "January 2025",
    title: "The Proposal",
    text: "One question, asked quietly, answered before it was even finished.",
    photos: [{ src: engagementImg, alt: "The proposal", ratio: 1920 / 1080 }],
  },
  {
    date: "August 2025",
    title: "Engagement",
    text: "Two families, one evening, and the first of many celebrations.",
    photos: [{ src: receptionImg, alt: "Engagement evening", ratio: 1920 / 1080 }],
  },
  {
    date: "12 February 2026",
    title: "Wedding Day",
    text: "The morning everything they had imagined finally arrived.",
    photos: [{ src: weddingImg, alt: "Wedding day", ratio: 1920 / 1280 }],
  },
];

/** Helper to build repeated placeholder sets. Replace with real photographs. */
const set = (src: string, alt: string, ratio: number, n: number): Photo[] =>
  Array.from({ length: n }, (_, i) => ({ src, alt: `${alt} ${i + 1}`, ratio }));

export const sections = {
  engagement: {
    hero: { src: engagementImg, alt: "Engagement", ratio: 1920 / 1080 } as Photo,
    caption: "Before the wedding, there was a promise.",
    photos: [
      { src: portrait1Img, alt: "Engagement portrait", ratio: 1024 / 1400 },
      { src: receptionImg, alt: "Engagement celebration", ratio: 1920 / 1080 },
      { src: candidImg, alt: "Engagement candid", ratio: 1600 / 1100 },
      { src: story.photo.src, alt: "Engagement moment", ratio: 1024 / 1400 },
      { src: portrait2Img, alt: "Engagement walk", ratio: 1600 / 1100 },
      { src: brideImg, alt: "Bride at engagement", ratio: 1024 / 1400 },
      { src: groomImg, alt: "Groom at engagement", ratio: 1024 / 1400 },
      { src: familyImg, alt: "Families together", ratio: 1600 / 1100 },
    ] as Photo[],
  },
  haldi: {
    caption: "Smiles, laughter, music and a little bit of yellow.",
    photos: [
      { src: haldiImg, alt: "Haldi ceremony", ratio: 1600 / 1100 },
      { src: mehendiImg, alt: "Haldi details", ratio: 1 },
      { src: brideImg, alt: "Bride at haldi", ratio: 1024 / 1400 },
      { src: candidImg, alt: "Haldi candid", ratio: 1600 / 1100 },
      { src: familyImg, alt: "Family at haldi", ratio: 1600 / 1100 },
    ] as Photo[],
  },
  mehendi: {
    caption: "Every line a wish, every curve a blessing.",
    photos: [
      { src: mehendiImg, alt: "Mehendi detail", ratio: 1 },
      { src: brideImg, alt: "Bride during mehendi", ratio: 1024 / 1400 },
      { src: candidImg, alt: "Mehendi evening", ratio: 1600 / 1100 },
      { src: haldiImg, alt: "Friends at mehendi", ratio: 1600 / 1100 },
      { src: story.photo.src, alt: "Quiet mehendi moment", ratio: 1024 / 1400 },
    ] as Photo[],
  },
  wedding: {
    hero: { src: weddingImg, alt: "The wedding ceremony", ratio: 1920 / 1280 } as Photo,
    subtitle: "Two hearts. One promise. Forever.",
    photos: [
      { src: weddingImg, alt: "Pheras", ratio: 1920 / 1280 },
      { src: brideImg, alt: "Bride's entrance", ratio: 1024 / 1400 },
      { src: groomImg, alt: "Baraat", ratio: 1024 / 1400 },
      { src: engagementImg, alt: "Varmala", ratio: 1920 / 1080 },
      { src: familyImg, alt: "Family blessings", ratio: 1600 / 1100 },
      { src: candidImg, alt: "Emotional moment", ratio: 1600 / 1100 },
      { src: story.photo.src, alt: "Mangalsutra", ratio: 1024 / 1400 },
      { src: portrait1Img, alt: "After the rituals", ratio: 1024 / 1400 },
    ] as Photo[],
  },
  family: {
    message:
      "A celebration becomes unforgettable because of the people who stand beside us.",
    photos: [
      { src: familyImg, alt: "Parents and grandparents", ratio: 1600 / 1100 },
      { src: candidImg, alt: "Friends celebrating", ratio: 1600 / 1100 },
      { src: haldiImg, alt: "Relatives at the ceremony", ratio: 1600 / 1100 },
      { src: groomImg, alt: "Brothers", ratio: 1024 / 1400 },
      { src: brideImg, alt: "Sisters", ratio: 1024 / 1400 },
      { src: receptionImg, alt: "Everyone together", ratio: 1920 / 1080 },
    ] as Photo[],
  },
  candid: {
    photos: [
      { src: candidImg, alt: "Dancing", ratio: 1600 / 1100 },
      { src: haldiImg, alt: "Laughter", ratio: 1600 / 1100 },
      { src: portrait2Img, alt: "A quiet walk", ratio: 1600 / 1100 },
      { src: familyImg, alt: "Behind the scenes", ratio: 1600 / 1100 },
    ] as Photo[],
  },
  reception: {
    hero: { src: receptionImg, alt: "The reception", ratio: 1920 / 1080 } as Photo,
    caption: "One more evening. A thousand memories.",
    photos: [
      { src: portrait1Img, alt: "Couple portrait", ratio: 1024 / 1400 },
      { src: familyImg, alt: "Family at reception", ratio: 1600 / 1100 },
      { src: candidImg, alt: "Dancing at the reception", ratio: 1600 / 1100 },
      { src: receptionImg, alt: "Stage moment", ratio: 1920 / 1080 },
      { src: story.photo.src, alt: "Together on stage", ratio: 1024 / 1400 },
      { src: haldiImg, alt: "Friends at dinner", ratio: 1600 / 1100 },
    ] as Photo[],
  },
  portraits: {
    caption: "Just the two of us.",
    photos: [
      { src: portrait1Img, alt: "Editorial portrait", ratio: 1024 / 1400 },
      { src: portrait2Img, alt: "Walking together", ratio: 1600 / 1100 },
      { src: story.photo.src, alt: "By the window", ratio: 1024 / 1400 },
      { src: closingImg, alt: "Silhouette at dusk", ratio: 1920 / 1280 },
    ] as Photo[],
  },
};

/**
 * MEMORY WALL
 * Built to scale to 500–1000 photographs: the grid renders progressively
 * (see `MemoryWall.tsx`) and every image is lazy-loaded.
 */
export const memoryWall: Photo[] = [
  ...set(heroImg, "Wedding memory", 1920 / 1280, 8),
  ...set(brideImg, "Bride memory", 1024 / 1400, 8),
  ...set(haldiImg, "Haldi memory", 1600 / 1100, 8),
  ...set(mehendiImg, "Mehendi memory", 1, 8),
  ...set(weddingImg, "Ceremony memory", 1920 / 1280, 8),
  ...set(groomImg, "Groom memory", 1024 / 1400, 6),
  ...set(receptionImg, "Reception memory", 1920 / 1080, 8),
  ...set(candidImg, "Candid memory", 1600 / 1100, 8),
  ...set(familyImg, "Family memory", 1600 / 1100, 6),
  ...set(portrait1Img, "Portrait memory", 1024 / 1400, 6),
  ...set(portrait2Img, "Evening memory", 1600 / 1100, 6),
  ...set(closingImg, "Dusk memory", 1920 / 1280, 6),
];

export const closing = {
  message: {
    photo: { src: closingImg, alt: "Silhouette at dusk", ratio: 1920 / 1280 } as Photo,
    title: "And so, their story continues...",
    body:
      "May every day bring another reason to smile, another memory to treasure, and another chapter to write together.",
  },
  final: {
    photo: { src: heroImg, alt: "Forever begins here", ratio: 1920 / 1280 } as Photo,
    title: "Forever Begins Here",
    thanks: "Thank you for being part of our story.",
  },
};

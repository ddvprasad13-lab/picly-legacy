import { Reveal } from "./Reveal";

export function SectionTitle({
  label,
  title,
  caption,
  align = "center",
  tone = "light",
}: {
  label?: string;
  title: string;
  caption?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  const alignCls = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  const sub = tone === "dark" ? "text-[oklch(0.82_0.02_70)]" : "text-muted-foreground";
  const head = tone === "dark" ? "text-[oklch(0.96_0.01_80)]" : "text-foreground";

  return (
    <Reveal className={`flex flex-col ${alignCls} max-w-2xl`}>
      {label ? <p className={`eyebrow ${sub}`}>{label}</p> : null}
      <h2 className={`font-serif text-[clamp(2rem,6vw,3.75rem)] leading-[1.05] font-light ${head}`}>
        {title}
      </h2>
      {caption ? <p className={`script mt-5 text-[clamp(1.15rem,3vw,1.6rem)] ${sub}`}>{caption}</p> : null}
    </Reveal>
  );
}

import Image from "next/image";
import portrait from "@/public/assets/anas-portrait.jpg";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-[6vw]">
      <div className="hero-glow pointer-events-none absolute inset-0" />

      <div className="relative z-[1] mx-auto flex w-full max-w-[1360px] items-center justify-between gap-16 max-[900px]:flex-col-reverse max-[900px]:gap-10 max-[900px]:text-center">
        <div className="relative z-[1] max-w-[560px]">
          <div className="mb-[22px] flex items-center gap-[14px] max-[900px]:justify-center">
            <span className="h-2 w-2 animate-pulse-dot rounded-full bg-blue-deep shadow-[0_0_12px_var(--color-blue-deep)]" />
            <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-blue">
              Available for freelance — Morocco
            </span>
          </div>

          <h1 className="font-display text-[clamp(52px,10vw,128px)] font-normal uppercase leading-[0.95] tracking-[0.01em] text-ink">
            Anas
            <br />
            Damine<span className="text-blue">.</span>
          </h1>

          <div className="mt-5 max-w-[520px] max-[900px]:mx-auto">
            <p className="font-mono text-[clamp(13px,1.6vw,17px)] font-bold tracking-[0.04em] text-ink">
              Graphic Designer &amp; Video Editor.
            </p>
            <p className="mt-2.5 font-mono text-[clamp(13px,1.6vw,17px)] leading-[1.75] tracking-[0.03em] text-muted min-[901px]:text-justify">
              I craft clean, modern, and engaging designs that help brands stand
              out, connect with their audience, and leave a lasting impression.
            </p>
          </div>

          <div className="mt-14 flex flex-wrap gap-12 max-[900px]:justify-center">
            {[
              { k: "Role", v: "Designer / Editor" },
              { k: "Based in", v: "Morocco" },
              { k: "Age", v: "22" },
            ].map((meta) => (
              <div key={meta.k} className="flex flex-col gap-1.5">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                  {meta.k}
                </span>
                <span className="font-display text-[22px] text-ink">
                  {meta.v}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/5] w-[min(38vw,420px)] shrink-0 overflow-hidden rounded-[10px] border border-line shadow-[0_50px_90px_rgba(0,0,0,0.55),0_0_0_1px_rgba(62,139,255,0.06)] max-[900px]:w-[min(72vw,340px)]">
          <Image
            src={portrait}
            alt="Anas Damine"
            placeholder="blur"
            priority
            sizes="(max-width: 900px) 72vw, 38vw"
            className="h-full w-full object-cover object-[center_22%] [filter:saturate(1.08)_contrast(1.03)]"
          />
          <span className="pointer-events-none absolute inset-0 [background:linear-gradient(180deg,transparent_55%,rgba(5,7,12,0.6)_100%),linear-gradient(100deg,rgba(27,63,204,0.18),transparent_45%)]" />
          <span className="absolute bottom-4 left-4 rounded-[2px] border border-[rgba(230,236,245,0.15)] bg-[rgba(5,7,12,0.55)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink backdrop-blur-[4px]">
            Anas Damine
          </span>
        </div>
      </div>

      <div className="absolute bottom-9 left-[6vw] flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
        <span className="h-px w-[34px] bg-muted" />
        Scroll to the lineup
      </div>
    </section>
  );
}

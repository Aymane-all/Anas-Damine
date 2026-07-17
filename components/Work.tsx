"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { filters, projects, type Project } from "@/lib/projects";

export default function Work() {
  const [active, setActive] = useState<(typeof filters)[number]["value"]>("all");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null,
  );

  const visible = projects.filter(
    (p) => active === "all" || p.cat === active,
  );

  return (
    <section id="work" className="relative px-[6vw] py-[80px] md:py-[120px]">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-16">
        <div>
          <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-blue">
            Selected work
          </span>
          <h2 className="mt-2.5 font-display text-[clamp(34px,5vw,58px)] font-normal uppercase leading-[0.95] tracking-[0.01em]">
            The lineup
          </h2>
        </div>
        <p className="max-w-[340px] text-[14px] leading-[1.6] text-muted">
          Matchday posters and YouTube covers, picked for what they had to do:
          get noticed, get clicked, get shared.
        </p>
      </div>

      <div className="mb-[46px] flex flex-wrap gap-2.5">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`cursor-pointer rounded-[2px] border px-[22px] py-3 font-mono text-[12px] uppercase tracking-[0.08em] transition-all duration-200 ${
              active === f.value
                ? "border-blue bg-blue font-bold text-[#050710]"
                : "border-line bg-transparent text-muted hover:border-[rgba(243,241,234,0.25)] hover:text-ink"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
        {visible.map((project) => (
          <Card
            key={project.num}
            project={project}
            onZoom={(src, alt) => setLightbox({ src, alt })}
          />
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-[rgba(5,7,12,0.92)] p-[5vw] backdrop-blur-[6px]"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightbox(null);
          }}
        >
          <button
            aria-label="Close"
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-[rgba(13,18,32,0.8)] text-[20px] text-ink transition-[background,border-color] duration-200 hover:border-blue hover:bg-[rgba(62,139,255,0.2)]"
          >
            ✕
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="h-auto max-h-full w-auto max-w-full rounded object-contain shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
          />
        </div>
      )}
    </section>
  );
}

function Card({
  project,
  onZoom,
}: {
  project: Project;
  onZoom: (src: string, alt: string) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Once the user starts the video, we hand over to the native controls
  // (progress bar, time, fullscreen, pause) and hide our custom overlays.
  const [activated, setActivated] = useState(false);

  const startVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    void v.play();
    setActivated(true);
  };

  const isVideo = project.type === "video";
  const showOverlays = !(isVideo && activated);

  return (
    <div className="group relative aspect-[4/5] overflow-hidden rounded-[6px] border border-line bg-raise">
      <div className="card-stripes absolute inset-0 flex items-center justify-center transition-[filter] duration-200 group-hover:brightness-110">
        {project.type === "image" ? (
          <Image
            src={project.src}
            alt={project.alt}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 300px"
            onClick={() => onZoom(project.src, project.alt)}
            className="cursor-zoom-in object-cover object-top transition-transform duration-[400ms] group-hover:scale-[1.04]"
          />
        ) : (
          <>
            <video
              ref={videoRef}
              src={project.src}
              poster={project.poster}
              preload="metadata"
              muted
              loop
              playsInline
              controls={activated}
              className="h-full w-full bg-black object-cover"
            />
            {/* Initial state: big play button. Once started, native controls
                (time, progress bar, fullscreen) take over. */}
            {!activated && (
              <button
                type="button"
                aria-label="Play video"
                onClick={startVideo}
                className="absolute inset-0 z-[2] flex items-center justify-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-blue bg-[rgba(5,7,12,0.65)] backdrop-blur-[4px] transition-[transform,background] duration-200 hover:scale-[1.08] hover:bg-[rgba(62,139,255,0.25)]">
                  <svg viewBox="0 0 24 24" className="ml-[3px] h-[22px] w-[22px] fill-ink">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            )}
          </>
        )}
      </div>

      <span className="pointer-events-none absolute left-4 top-4 font-mono text-[11px] tracking-[0.1em] text-muted">
        {project.num}
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-[2px] border border-line bg-[rgba(11,14,20,0.6)] px-2.5 py-[5px] font-mono text-[10px] uppercase tracking-[0.1em] text-blue">
        {project.tag}
      </span>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-[rgba(11,14,20,0.95)] to-transparent p-5 opacity-90 transition-[transform,opacity] duration-[250ms] group-hover:translate-y-0 group-hover:opacity-100">
        <h3 className="mb-1 font-display text-[20px] font-normal uppercase leading-[0.95] tracking-[0.01em] text-ink">
          {project.title}
        </h3>
        <p className="font-mono text-[11px] text-muted">{project.subtitle}</p>
      </div>
    </div>
  );
}

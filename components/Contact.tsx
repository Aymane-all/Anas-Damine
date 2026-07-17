export default function Contact() {
  return (
    <section
      id="contact"
      className="border-y border-line bg-raise px-[6vw] py-[90px] text-center md:py-[140px]"
    >
      <span className="mb-[18px] flex justify-center font-mono text-[12px] uppercase tracking-[0.18em] text-blue">
        Full time on the whistle
      </span>

      <h2 className="mb-[34px] font-display text-[clamp(38px,7vw,84px)] font-normal uppercase leading-[0.95] tracking-[0.01em]">
        Let&apos;s make
        <br />
        your next <span className="text-blue-deep">drop</span>.
      </h2>

      <a
        href="https://wa.me/212776979380"
        target="_blank"
        rel="noopener"
        className="inline-flex items-center gap-3 rounded-[2px] bg-blue px-[34px] py-[18px] font-mono text-[14px] font-bold uppercase tracking-[0.08em] text-[#050710] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(62,139,255,0.3)]"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.02h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.11.82.83-3.03-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.52 3.68-8.2 8.23-8.2 2.2 0 4.26.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.79c0 4.52-3.68 8.21-8.23 8.21zm4.5-6.15c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.24-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.04-.38-1.99-1.22-.73-.66-1.23-1.46-1.37-1.71-.15-.24-.02-.37.11-.5.11-.11.25-.29.37-.43.12-.14.16-.24.25-.4.08-.17.04-.31-.02-.43-.06-.13-.56-1.36-.77-1.86-.2-.48-.4-.42-.56-.42-.14-.01-.31-.01-.48-.01-.16 0-.43.06-.66.31-.23.24-.86.85-.86 2.06 0 1.22.89 2.39 1.02 2.56.13.16 1.75 2.68 4.24 3.75.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z" />
        </svg>
        Message me on WhatsApp
      </a>
    </section>
  );
}

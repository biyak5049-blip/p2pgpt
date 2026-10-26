export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--accent)_10%,transparent)_0%,transparent_42%)]"
      />
      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
        <div>
          <p className="inline-flex rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Strategy · Design · Delivery
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.4rem]">
            Clarity for brands that want to be taken seriously.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
            I am Shazia Kareem, a product and brand consultant based in Karachi.
            I help growing companies refine their story, design digital
            experiences, and launch work that feels considered.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-medium text-white transition-colors hover:bg-accent-hover dark:text-zinc-950"
            >
              Explore services
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card px-7 text-sm font-medium transition-colors hover:border-accent"
            >
              Book a conversation
            </a>
          </div>
        </div>

        <aside className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_24px_80px_-40px_rgba(16,24,32,0.45)]">
          <div className="flex aspect-[5/4] items-center justify-center bg-surface">
            <div className="text-center">
              <p className="font-serif text-6xl tracking-tight text-accent sm:text-7xl">
                SK
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted">
                Shazia Kareem
              </p>
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-px bg-border text-sm">
            <div className="bg-card p-5">
              <dt className="text-muted">Practice</dt>
              <dd className="mt-1 font-medium">Independent studio</dd>
            </div>
            <div className="bg-card p-5">
              <dt className="text-muted">Availability</dt>
              <dd className="mt-1 font-medium">Select engagements</dd>
            </div>
            <div className="bg-card p-5">
              <dt className="text-muted">Experience</dt>
              <dd className="mt-1 font-medium">12 years</dd>
            </div>
            <div className="bg-card p-5">
              <dt className="text-muted">Based in</dt>
              <dd className="mt-1 font-medium">Karachi, PK</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}

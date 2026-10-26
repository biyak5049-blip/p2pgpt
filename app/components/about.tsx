const credentials = [
  "Brand systems",
  "Product strategy",
  "UX research",
  "Web platforms",
  "Stakeholder workshops",
  "Go-to-market",
];

export function About() {
  return (
    <section id="about" className="border-t border-border bg-surface/60 px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
            About
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-5xl">
            A partner for the work that has to hold up.
          </h2>
        </div>
        <div className="space-y-6 text-base leading-7 text-muted sm:text-lg">
          <p>
            Shazia Kareem works with founders, marketing leads, and product
            teams who need a clear point of view — not another deck that sits
            unused. The practice sits between brand, product, and digital
            delivery.
          </p>
          <p>
            Engagements typically start with a diagnostic: what the business is
            trying to say, who it is for, and where the current experience
            falls short. From there the work is practical — positioning,
            interfaces, and systems that teams can actually run.
          </p>
          <ul className="flex flex-wrap gap-2 pt-1">
            {credentials.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

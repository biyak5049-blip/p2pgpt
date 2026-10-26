const services = [
  {
    number: "01",
    title: "Brand & positioning",
    description:
      "A sharper story, visual system, and language so the company sounds like one voice across sales, product, and the site.",
  },
  {
    number: "02",
    title: "Product & experience design",
    description:
      "Research-led flows for web and product surfaces. The goal is fewer steps, clearer decisions, and a calmer interface.",
  },
  {
    number: "03",
    title: "Digital presence",
    description:
      "Marketing sites and platforms that look considered and load quickly — built to be maintained, not rebuilt every year.",
  },
  {
    number: "04",
    title: "Advisory retainers",
    description:
      "Ongoing design direction for teams that already ship, but need a senior eye on quality, consistency, and priorities.",
  },
];

export function Services() {
  return (
    <section id="services" className="border-t border-border px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
            Services
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-5xl">
            How we work together
          </h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
            Scoped projects or a monthly retainer. Each engagement is written
            down before it starts — outcomes, timeline, and who is involved.
          </p>
        </div>
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <li
              key={service.number}
              className="group rounded-[1.6rem] border border-border bg-card p-6 transition-colors hover:border-accent sm:p-8"
            >
              <p className="font-mono text-xs tracking-[0.18em] text-accent">
                {service.number}
              </p>
              <h3 className="mt-5 font-serif text-2xl tracking-tight">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

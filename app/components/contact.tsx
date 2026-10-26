"use client";

import { FormEvent, useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="border-t border-border px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 rounded-[2rem] border border-border bg-card p-6 sm:p-10 lg:grid-cols-2 lg:p-12">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
            Contact
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-5xl">
            Start with a short brief.
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-muted">
            Share the company, the problem, and the timeline. Replies typically
            go out within two working days.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <p>
              <span className="text-muted">Email</span>
              <br />
              <a
                href="mailto:hello@shaziakareem.com"
                className="text-accent hover:text-accent-hover"
              >
                hello@shaziakareem.com
              </a>
            </p>
            <p>
              <span className="text-muted">Studio</span>
              <br />
              Karachi · Remote worldwide
            </p>
          </div>
        </div>

        {sent ? (
          <div className="flex min-h-64 items-center rounded-2xl bg-surface px-6 py-8">
            <p className="font-serif text-2xl tracking-tight">
              Thank you. Shazia will be in touch shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                Name
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="mt-2 h-11 w-full rounded-xl border border-border bg-background px-3 text-foreground"
                />
              </label>
              <label className="block text-sm">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="mt-2 h-11 w-full rounded-xl border border-border bg-background px-3 text-foreground"
                />
              </label>
            </div>
            <label className="block text-sm">
              Company
              <input
                name="company"
                autoComplete="organization"
                className="mt-2 h-11 w-full rounded-xl border border-border bg-background px-3 text-foreground"
              />
            </label>
            <label className="block text-sm">
              How can I help?
              <textarea
                required
                name="message"
                rows={5}
                className="mt-2 w-full resize-y rounded-xl border border-border bg-background px-3 py-3 text-foreground"
              />
            </label>
            <button
              type="submit"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-accent px-7 text-sm font-medium text-white transition-colors hover:bg-accent-hover sm:w-auto dark:text-zinc-950"
            >
              Send enquiry
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

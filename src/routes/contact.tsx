import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — L’Interior" },
      {
        name: "description",
        content:
          "Contact Lucia Raić at L’Interior in Zagreb about an apartment, house or small commercial interior anywhere in Croatia.",
      },
      { property: "og:title", content: "Contact — L’Interior" },
      {
        property: "og:description",
        content:
          "Tell Lucia Raić of L’Interior about your space — floor plans and photos welcome. Based in Zagreb, working across Croatia.",
      },
    ],
  }),
  component: ContactPage,
});

type Errors = Partial<Record<"name" | "email" | "projectType" | "size" | "message", string>>;

const fieldClass =
  "mt-2 w-full border-0 border-b border-input bg-transparent py-2 text-base outline-none transition-colors focus:border-accent";

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const projectType = String(data.get("projectType") ?? "");
    const size = String(data.get("size") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Please tell me your name.";
    if (!email) next.email = "Please add an email address so I can reply.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "That email address doesn't look right.";
    if (!projectType) next.projectType = "Please choose a project type.";
    if (size && !/^\d+([.,]\d+)?$/.test(size)) next.size = "Please enter the size as a number.";
    if (!message) next.message = "Please add a short description of the space.";

    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  return (
    <section className="mx-auto max-w-[1500px] px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
      <Reveal>
        <p className="label">Contact</p>
        <h1 className="mt-4 max-w-[14ch] text-4xl sm:text-5xl">Let's talk about your space</h1>
        <p className="mt-6 max-w-prose text-muted-foreground">
          Tell me a little about the space and I'll get back to you within a few days. If you have a
          floor plan or photos, send them along — it helps.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-14 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <dl className="space-y-8">
            <div>
              <dt className="label">Email</dt>
              <dd className="mt-2">
                <a href="mailto:raic.lucia@gmail.com" className="quiet-link text-lg sm:text-xl">
                  raic.lucia@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="label">Phone</dt>
              <dd className="mt-2">
                <a href="tel:+38512345678" className="quiet-link">
                  +385 1 234 5678
                </a>
              </dd>
            </div>
            <div>
              <dt className="label">Instagram</dt>
              <dd className="mt-2">
                <a
                  href="https://instagram.com/linterior.studio"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="quiet-link"
                >
                  @linterior.studio
                </a>
              </dd>
            </div>
          </dl>
          <p className="mt-10 max-w-prose text-muted-foreground">
            Based in Zagreb, working across Croatia and remotely.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Currently taking on projects starting from November.
          </p>
          <p className="mt-10 wordmark text-2xl">Lucia Raić</p>
        </Reveal>

        <Reveal className="md:col-span-7 md:col-start-6" delay={100}>
          {sent ? (
            <p role="status" className="max-w-prose font-serif text-2xl sm:text-3xl">
              Thank you — your message has arrived. I'll reply within a few days.
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-10">
              <div>
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className={fieldClass}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name ? (
                  <p id="name-error" className="mt-2 text-sm text-destructive">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={fieldClass}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email ? (
                  <p id="email-error" className="mt-2 text-sm text-destructive">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="projectType" className="label">
                  Project type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  defaultValue=""
                  className={fieldClass}
                  aria-invalid={Boolean(errors.projectType)}
                  aria-describedby={errors.projectType ? "projectType-error" : undefined}
                >
                  <option value="">Select one</option>
                  <option value="Apartment">Apartment</option>
                  <option value="House">House</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Consultation only">Consultation only</option>
                </select>
                {errors.projectType ? (
                  <p id="projectType-error" className="mt-2 text-sm text-destructive">
                    {errors.projectType}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="size" className="label">
                  Approximate size (m²)
                </label>
                <input
                  id="size"
                  name="size"
                  type="text"
                  inputMode="decimal"
                  className={fieldClass}
                  aria-invalid={Boolean(errors.size)}
                  aria-describedby={errors.size ? "size-error" : undefined}
                />
                {errors.size ? (
                  <p id="size-error" className="mt-2 text-sm text-destructive">
                    {errors.size}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="message" className="label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="What's the space, and what isn't working about it?"
                  className={`${fieldClass} resize-none placeholder:text-muted-foreground/70`}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message ? (
                  <p id="message-error" className="mt-2 text-sm text-destructive">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <button type="submit" className="btn-solid">
                Send inquiry
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";

import logo from "@/assets/linterior-logo.png";

const nav = [
  { to: "/work", label: "Work" },
  { to: "/process", label: "Process" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="mt-28 pb-12 sm:mt-40">
      <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
        <div className="grid gap-10 pt-12 md:grid-cols-3 md:items-start">
          <p className="text-sm text-muted-foreground">
            <img src={logo} alt="L’Interior" width={795} height={495} className="inline-block h-5 w-auto align-[-3px]" />
            <span className="mx-2">—</span>
            Interior design, Zagreb
          </p>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 md:justify-center">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="label transition-colors hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 text-sm md:justify-end">
            <a href="mailto:raic.lucia@gmail.com" className="quiet-link">
              raic.lucia@gmail.com
            </a>
            <a
              href="https://instagram.com/linterior.studio"
              target="_blank"
              rel="noreferrer noopener"
              className="quiet-link"
            >
              Instagram
            </a>
            <Link to="/contact" className="btn-outline">
              Get in touch
            </Link>
          </div>
        </div>

        <p className="mt-12 text-xs text-muted-foreground">
          © 2026 L’Interior. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

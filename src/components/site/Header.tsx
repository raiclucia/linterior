import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/work", label: "Work" },
  { to: "/process", label: "Process" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
        <Link to="/" className="wordmark text-lg sm:text-xl" aria-label="L’Interior — home">
          L’Interior
        </Link>
        <nav aria-label="Main">
          <ul className="flex items-center gap-5 sm:gap-9">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="label transition-colors hover:text-accent"
                  activeProps={{ className: "label text-foreground" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

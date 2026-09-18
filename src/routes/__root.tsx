import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import logo from "@/assets/linterior-logo.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="text-6xl">404</h1>
        <h2 className="mt-4 text-2xl">Page not found</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-solid">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="text-3xl">This page didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-solid"
          >
            Try again
          </button>
          <a href="/" className="btn-outline">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "L’Interior — Interior design by Lucia Raić, Zagreb" },
      {
        name: "description",
        content:
          "L’Interior is the interior design studio of Lucia Raić in Zagreb: apartments, houses and small commercial spaces across Croatia.",
      },
      { name: "author", content: "Lucia Raić" },
      { property: "og:site_name", content: "L’Interior" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@300;400;500&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

// Site gate: visitors see the "under development" notice; Lucia sees the full
// site via the secret token (?view=…) or the Lovable preview URL.
const UNLOCK_TOKEN = "lucia-9f2k";
const UNLOCK_STORAGE_KEY = "linterior-preview-unlocked";

function isPreviewHost() {
  return typeof window !== "undefined" && window.location.hostname.includes("id-preview--");
}

function UnderConstruction() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <img src={logo} alt="L’Interior" width={795} height={495} className="mx-auto w-44" />
        <h1 className="mt-10 text-3xl sm:text-4xl">The website is still under development.</h1>
        <p className="mt-4 text-sm text-muted-foreground">Please check back soon.</p>
        <a href="mailto:raic.lucia@gmail.com" className="quiet-link mt-10 inline-block text-sm">
          raic.lucia@gmail.com
        </a>
      </div>
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    // "?construction" forces the visitor view so the page can be previewed
    // even on hosts that are normally unlocked (e.g. the Lovable preview URL).
    const forceGate = params.has("construction");
    const hasToken = params.get("view") === UNLOCK_TOKEN;
    if (!forceGate && (hasToken || isPreviewHost())) {
      try {
        sessionStorage.setItem(UNLOCK_STORAGE_KEY, "1");
      } catch {
        // storage unavailable — session-only unlock
      }
      setUnlocked(true);
      if (hasToken) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    } else {
      if (forceGate) {
        try {
          sessionStorage.removeItem(UNLOCK_STORAGE_KEY);
        } catch {
          // ignore storage failures
        }
      }
      try {
        setUnlocked(sessionStorage.getItem(UNLOCK_STORAGE_KEY) === "1");
      } catch {
        setUnlocked(false);
      }
    }
  }, []);

  if (!unlocked) {
    return <UnderConstruction />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {/* Required: nested routes render here. */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

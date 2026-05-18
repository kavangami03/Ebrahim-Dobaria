import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { useLenis } from "@/hooks/use-lenis";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-foreground">404</h1>
        <h2 className="mt-4 font-display text-xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-gold px-5 py-3 text-xs uppercase tracking-[0.22em] text-[oklch(0.18_0.03_260)] transition-colors hover:bg-gold-soft"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong on our end.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="bg-gold px-5 py-3 text-xs uppercase tracking-[0.22em] text-[oklch(0.18_0.03_260)] hover:bg-gold-soft"
          >
            Try again
          </button>
          <a href="/" className="border border-border px-5 py-3 text-xs uppercase tracking-[0.22em] hover:border-gold">
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
      { name: "author", content: "Ebrahim & Dobaria Law LLC" },
      { property: "og:site_name", content: "Ebrahim & Dobaria Law LLC" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Ebrahim & Dobaria Law LLC" },
      { property: "og:title", content: "Ebrahim & Dobaria Law LLC" },
      { name: "twitter:title", content: "Ebrahim & Dobaria Law LLC" },
      { name: "description", content: "Gilded Justice is a premium single-page law firm website for Ebrahim & Dobaria Law LLC." },
      { property: "og:description", content: "Gilded Justice is a premium single-page law firm website for Ebrahim & Dobaria Law LLC." },
      { name: "twitter:description", content: "Gilded Justice is a premium single-page law firm website for Ebrahim & Dobaria Law LLC." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/02c8ae79-fe82-4b3a-a6d1-77e7e07fef75/id-preview-f94b0e52--bae8122d-0ff8-4425-8108-ce7525a4a6ec.lovable.app-1779079166168.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/02c8ae79-fe82-4b3a-a6d1-77e7e07fef75/id-preview-f94b0e52--bae8122d-0ff8-4425-8108-ce7525a4a6ec.lovable.app-1779079166168.png" },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
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

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useLenis();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}

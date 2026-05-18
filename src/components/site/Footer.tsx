import { Wordmark } from "./Wordmark";

const COLS = [
  {
    h: "Practice",
    items: ["Immigration", "Corporate", "Business Litigation", "Employment", "Family", "Real Estate"],
  },
  {
    h: "Firm",
    items: ["About", "Attorneys", "Process", "Voices", "FAQ", "Contact"],
  },
  {
    h: "Offices",
    items: ["New York", "London", "Dubai", "Mumbai"],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-surface-2/60 pt-24 pb-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute -top-40 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-gold/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-[1520px] px-5 md:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Wordmark />
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Ebrahim & Dobaria Law LLC — sophisticated legal counsel for individuals, families, and
              enterprises operating across borders.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-10 max-w-sm">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">The Brief</div>
              <div className="mt-3 flex border-b border-border/70 focus-within:border-gold">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground/60"
                />
                <button type="submit" className="text-xs uppercase tracking-[0.22em] text-foreground hover:text-gold">
                  Subscribe →
                </button>
              </div>
              <p className="mt-3 text-[11px] text-muted-foreground/70">A quarterly note on legal developments worth your attention.</p>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-10 lg:col-span-7 lg:grid-cols-3">
            {COLS.map((c) => (
              <div key={c.h}>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{c.h}</div>
                <ul className="mt-5 space-y-3">
                  {c.items.map((i) => (
                    <li key={i}>
                      <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">{i}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-border/60 pt-8 md:flex-row md:items-center">
          <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground/70">
            © {new Date().getFullYear()} Ebrahim & Dobaria Law LLC · All Rights Reserved
          </div>
          <div className="flex gap-6 text-[11px] uppercase tracking-[0.3em] text-muted-foreground/70">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

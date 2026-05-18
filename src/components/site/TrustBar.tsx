const ITEMS = [
  "Estd. Practice 2009",
  "Licensed Across 40+ Jurisdictions",
  "Member · American Bar Association",
  "Member · International Bar Association",
  "AV Preeminent Rated Counsel",
  "Confidential · Multilingual · Global",
];

export function TrustBar() {
  const seq = [...ITEMS, ...ITEMS];
  return (
    <section aria-label="Affiliations" className="border-y border-border/60 bg-surface-2/40 py-7">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="animate-marquee flex w-max gap-16">
          {seq.map((t, i) => (
            <div key={i} className="flex items-center gap-16 text-[11px] uppercase tracking-[0.32em] text-muted-foreground/80">
              <span>{t}</span>
              <span className="text-gold/60">◆</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <a href="#home" className={`flex items-center gap-3 ${className}`} aria-label="Ibrahim & Dobaria Law LLC home">
      <span className="grid h-9 w-9 place-items-center border border-gold/40 text-gold font-display text-base tracking-tight">
        <span className="leading-none">I<span className="text-gold/60">·</span>D</span>
      </span>
      <span className="hidden flex-col leading-tight sm:flex">
        <span className="font-display text-[15px] tracking-wide text-foreground">
          Ibrahim <span className="text-gold">&</span> Dobaria
        </span>
        <span className="text-[9px] uppercase tracking-[0.32em] text-muted-foreground/80">Law · LLC</span>
      </span>
    </a>
  );
}

interface KickerProps {
  children: React.ReactNode;
  className?: string;
}

export function Kicker({ children, className = "" }: KickerProps) {
  return (
    <div className={`inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-gold ${className}`}>
      <span className="h-px w-8 bg-gold/60" />
      <span>{children}</span>
    </div>
  );
}

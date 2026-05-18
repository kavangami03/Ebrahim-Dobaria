import { useRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "ghost";
  strength?: number;
}

export function MagneticButton({
  children,
  className,
  variant = "primary",
  ...rest
}: MagneticButtonProps) {
  const base =
    "group relative inline-flex items-center gap-3 px-7 py-3.5 text-sm tracking-[0.18em] uppercase transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] overflow-hidden";
  const styles =
    variant === "primary"
      ? "bg-gold text-[oklch(0.18_0.03_260)]"
      : "border border-[oklch(1_0_0_/_0.18)] text-foreground hover:text-[oklch(0.18_0.03_260)]";

  return (
    <button
      className={cn(base, styles, className)}
      {...rest}
    >
      <div className={cn(
        "absolute inset-0 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0",
        variant === "primary" ? "bg-[oklch(0.85_0.07_82)]" : "bg-gold"
      )} />
      <span className="relative z-10">{children}</span>
      <svg
        className="relative z-10 h-3 w-3 transition-transform duration-500 group-hover:translate-x-1"
        viewBox="0 0 12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M1 6h10M7 2l4 4-4 4" />
      </svg>
    </button>
  );
}

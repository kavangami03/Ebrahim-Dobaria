import { type ReactNode, type CSSProperties } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "span" | "li" | "h2" | "h3" | "p";
  y?: number;
}

export function Reveal({ children, className, delay = 0, as: Tag = "div", y = 24 }: RevealProps) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const style: CSSProperties = {
    transitionDelay: `${delay}ms`,
    transform: shown ? "none" : `translateY(${y}px)`,
    opacity: shown ? 1 : 0,
    transition: "opacity 900ms cubic-bezier(0.16,1,0.3,1), transform 900ms cubic-bezier(0.16,1,0.3,1)",
  };
  // @ts-expect-error dynamic tag ref
  return <Tag ref={ref} style={style} className={cn(className)}>{children}</Tag>;
}

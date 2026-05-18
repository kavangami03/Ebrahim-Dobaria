import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/fx/Reveal";
import { Kicker } from "@/components/fx/Kicker";

const STEPS = [
  { n: "01", t: "Consultation", d: "A confidential conversation to understand your matter, your goals, and the constraints that shape them." },
  { n: "02", t: "Case Evaluation", d: "We analyze the legal landscape, identify risk and leverage, and present an honest assessment of the path forward." },
  { n: "03", t: "Strategy Development", d: "A written engagement plan with milestones, projected timelines, and clear fee structure — no surprises." },
  { n: "04", t: "Representation", d: "Disciplined execution across negotiation, regulatory work, and litigation, led by a partner from day one." },
  { n: "05", t: "Resolution", d: "We close the matter cleanly, document the outcome, and remain available as your circumstances evolve." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = r.height + vh * 0.4;
      const start = vh * 0.8 - r.top;
      const p = Math.max(0, Math.min(1, start / total));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="process" className="relative py-[20px] md:py-[50px]">
      <div className="mx-auto max-w-[1520px] px-5 md:px-8">
        <div className="max-w-2xl">
          <Reveal><Kicker>Engagement</Kicker></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] tracking-[-0.015em] text-balance">
              How we
              <span className="gold-text italic"> work.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
              A measured, transparent process — designed to give you clarity at every stage and
              control over every decision.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="relative mt-20 pl-8 md:pl-0">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-1/2" aria-hidden>
            <div
              className="absolute left-0 top-0 w-full bg-gold shadow-[0_0_24px_oklch(0.78_0.10_80_/_0.6)]"
              style={{ height: `${progress * 100}%` }}
            />
          </div>

          <ol className="space-y-10 md:space-y-16">
            {STEPS.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <li key={s.n} className="relative md:grid md:grid-cols-2 md:gap-12">
                  <span className="absolute -left-[25px] top-2 h-3 w-3 rounded-full bg-gold shadow-[0_0_16px_oklch(0.78_0.10_80_/_0.8)] md:left-1/2 md:-translate-x-1/2" />
                  <Reveal className={left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}>
                    <div className="text-[11px] uppercase tracking-[0.3em] text-gold">Step {s.n}</div>
                    <h3 className="mt-3 font-display text-3xl leading-tight md:text-4xl">{s.t}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{s.d}</p>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

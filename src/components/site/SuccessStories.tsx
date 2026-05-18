import { Reveal } from "@/components/fx/Reveal";
import { Kicker } from "@/components/fx/Kicker";

const STORIES = [
  {
    tag: "Immigration · EB-1A",
    title: "Permanent residency secured for a global research scientist.",
    body: "A complex EB-1A petition involving twelve jurisdictions and seventy-three pieces of evidentiary support — approved on first review.",
    metric: "120 Days",
  },
  {
    tag: "Corporate · M&A",
    title: "Cross-border acquisition closed in 47 days.",
    body: "Represented the buy-side in an eight-figure technology acquisition spanning three regulatory regimes, structured for tax efficiency on both sides.",
    metric: "$42M",
  },
  {
    tag: "Litigation · Commercial",
    title: "Trade-secret dispute resolved without trial.",
    body: "Secured a confidential pre-trial settlement that preserved client IP, restored business operations, and avoided protracted public litigation.",
    metric: "Pre-Trial",
  },
  {
    tag: "Family · High-Net-Worth",
    title: "Discreet dissolution preserving family enterprise.",
    body: "Negotiated a custody and asset settlement that kept a multi-generational business intact and minimized exposure across two countries.",
    metric: "Sealed",
  },
];

export function SuccessStories() {
  return (
    <section id="stories" className="relative overflow-hidden py-[20px] md:py-[50px]">
      <div className="mx-auto max-w-[1520px] px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <Reveal><Kicker>Selected Matters</Kicker></Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] tracking-[-0.015em] text-balance">
                Outcomes that
                <span className="block gold-text italic">define the practice.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140} className="max-w-sm">
            <p className="text-sm text-muted-foreground">
              A selection of representative engagements — names and figures adjusted to preserve confidentiality.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {STORIES.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="glass-strong group relative h-full overflow-hidden p-8 transition-all duration-500 hover:-translate-y-1 hover:gold-glow md:p-10">
                <div className="flex items-start justify-between gap-6">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold">{s.tag}</span>
                  <span className="font-display text-xl text-foreground/80">{s.metric}</span>
                </div>
                <h3 className="mt-8 font-display text-2xl leading-tight text-balance md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">{s.body}</p>
                <div className="divider-gold mt-10" />
                <div className="mt-5 flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-muted-foreground/70">
                  <span>Case File · 0{i + 1}</span>
                  <span className="text-gold/70">Confidential</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

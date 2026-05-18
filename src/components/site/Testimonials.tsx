import { Reveal } from "@/components/fx/Reveal";
import { Kicker } from "@/components/fx/Kicker";

const QUOTES = [
  { q: "They treated a complicated case with the kind of clarity I had stopped expecting from lawyers. The result spoke for itself.", a: "Dr. R. Nair", r: "Research Director, Boston" },
  { q: "What set them apart was the candor. We always knew where we stood — and what it would take to win.", a: "S. Patel", r: "CEO, Logistics Group" },
  { q: "Discreet, rigorous, and humane. They closed a matter I had been carrying for years.", a: "Anonymous", r: "Family Engagement" },
  { q: "A first-class transaction team. They negotiated as if our company were their own.", a: "M. Karim", r: "Founder, FinTech" },
  { q: "Counsel of the highest caliber, with global reach and personal attention. A rare combination.", a: "L. Hayek", r: "Investor, London" },
  { q: "They made the impossible feel orderly. Twelve months later, we are exactly where they said we would be.", a: "A. Joshi", r: "Family Client" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-[20px] md:py-[50px]">
      <div className="mx-auto max-w-[1520px] px-5 md:px-8">
        <div className="max-w-2xl">
          <Reveal><Kicker>Voices</Kicker></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] tracking-[-0.015em] text-balance">
              The standard,
              <span className="block gold-text italic">in their words.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Reveal key={q.q} delay={i * 70}>
              <figure className="glass relative flex h-full flex-col p-8">
                <div className="font-display text-5xl leading-none text-gold/60">"</div>
                <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-foreground/90">
                  {q.q}
                </blockquote>
                <div className="divider-gold my-6" />
                <figcaption>
                  <div className="font-display text-lg">{q.a}</div>
                  <div className="text-[11px] uppercase tracking-[0.26em] text-muted-foreground">{q.r}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

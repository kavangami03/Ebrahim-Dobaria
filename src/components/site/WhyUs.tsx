import { Reveal } from "@/components/fx/Reveal";
import { Kicker } from "@/components/fx/Kicker";

const POINTS = [
  { t: "Personalized Strategy", d: "Every matter begins with a custom legal blueprint — never a template." },
  { t: "Transparent Communication", d: "Plain-language counsel, predictable fees, and a single point of contact." },
  { t: "Decisive Representation", d: "Aggressive when warranted, surgical always — the courtroom is a tool, not a stage." },
  { t: "Global Perspective", d: "Cross-jurisdictional fluency for clients whose lives and businesses span borders." },
  { t: "Client-Centered Service", d: "We measure success not in hours billed, but in outcomes earned." },
  { t: "Proven Expertise", d: "Partner-led teams with three decades of combined practice across eight disciplines." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-[20px] md:py-[50px]">
      <div className="mx-auto max-w-[1520px] px-5 md:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <Reveal><Kicker>Why Choose Us</Kicker></Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.02] tracking-[-0.015em] text-balance">
                A different
                <span className="block gold-text italic">kind of firm.</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                Six commitments that shape how we represent every client, on every matter — without exception.
              </p>
            </Reveal>
          </div>

          <ul className="lg:col-span-8 space-y-px bg-border">
            {POINTS.map((p, i) => (
              <Reveal as="li" key={p.t} delay={i * 70} className="group relative bg-background p-7 transition-colors duration-500 hover:bg-surface md:p-10">
                <div className="flex items-start gap-8 md:gap-12">
                  <span className="mt-2 font-display text-3xl text-gold/60 transition-colors group-hover:text-gold md:text-4xl">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl leading-tight md:text-3xl">{p.t}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">{p.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

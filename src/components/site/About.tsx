import aboutImg from "@/assets/about.jpg";
import { Reveal } from "@/components/fx/Reveal";
import { Kicker } from "@/components/fx/Kicker";

export function About() {
  return (
    <section id="about" className="relative py-[20px] md:py-[50px]">
      <div className="mx-auto grid max-w-[1520px] gap-16 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-3 border border-gold/20" aria-hidden />
              <div className="relative overflow-hidden">
                <img
                  src={aboutImg}
                  alt="Interior of the firm — walnut, marble, and brass"
                  loading="lazy"
                  width={1080}
                  height={1350}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={150} className="mt-8 grid grid-cols-2 gap-6 text-sm">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Founded</div>
              <div className="mt-2 font-display text-2xl">2009</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Offices</div>
              <div className="mt-2 font-display text-2xl">3 Continents</div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pl-10">
          <Reveal><Kicker>The Firm</Kicker></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] tracking-[-0.015em] text-balance">
              A practice built on
              <span className="block gold-text italic">disciplined judgment</span>
              and an obligation to outcome.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-muted-foreground md:text-base">
              Ebrahim & Dobaria Law LLC was founded on a simple proposition: that elite legal work
              is a craft — a balance of intellectual rigor, ethical conviction, and unwavering
              advocacy for the client we serve. From cross-border corporate matters to deeply
              personal immigration journeys, every engagement is led by a partner and built on
              transparency.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2">
            {[
              { t: "Our Philosophy", d: "Clarity over complexity. Strategy over reaction. The client is the work." },
              { t: "Our Standard", d: "Partner-led representation, with the bench depth of a global firm." },
              { t: "Our Commitment", d: "A response within twenty-four hours — always, without exception." },
              { t: "Our Reach", d: "Counsel across the U.S., Europe, the Gulf, and South Asia." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={120 + i * 80} className="bg-background p-6">
                <div className="font-display text-xl text-foreground">{c.t}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

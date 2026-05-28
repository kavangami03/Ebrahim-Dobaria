import a1 from "@/assets/attorney-1.jpg";
import a2 from "@/assets/attorney-2.jpg";
import a3 from "@/assets/attorney-3.jpg";
import a4 from "@/assets/attorney-4.jpg";
import { Reveal } from "@/components/fx/Reveal";
import { Kicker } from "@/components/fx/Kicker";

const PEOPLE = [
  { img: a1, name: "Yusuf A. Ibrahim", role: "Founding Partner", focus: "Immigration · International", bio: "Two decades counseling executives, scholars, and families navigating U.S. and global immigration." },
  { img: a2, name: "Imran K. Dobaria", role: "Founding Partner", focus: "Corporate · M&A", bio: "Cross-border transactions, governance, and the strategic infrastructure of growth-stage enterprises." },
  { img: a3, name: "Anisa R. Mehta", role: "Senior Counsel", focus: "Litigation · Employment", bio: "Trial-tested advocate with a record of decisive results in state and federal forums." },
  { img: a4, name: "James W. Holloway", role: "Of Counsel", focus: "Real Estate · Finance", bio: "Thirty years structuring complex commercial real estate transactions across three continents." },
];

export function Attorneys() {
  return (
    <section id="attorneys" className="relative py-[20px] md:py-[50px]">
      <div className="mx-auto max-w-[1520px] px-5 md:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal><Kicker>The Counsel</Kicker></Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] tracking-[-0.015em] text-balance">
                Partner-led
                <span className="block gold-text italic">representation.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120} className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Each engagement is led by a partner, supported by a bench of disciplined practitioners
              and trusted local counsel across the jurisdictions we serve.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {PEOPLE.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <article className="group relative overflow-hidden bg-background h-full flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={p.img}
                    alt={`Portrait of ${p.name}`}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>
                <div className="p-6 flex-grow">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{p.focus}</div>
                  <h3 className="mt-3 font-display text-2xl leading-tight">{p.name}</h3>
                  <div className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">{p.role}</div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
                </div>
                <div className="h-4 bg-border/50 w-full" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

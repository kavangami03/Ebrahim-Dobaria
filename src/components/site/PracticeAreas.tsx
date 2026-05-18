import { Reveal } from "@/components/fx/Reveal";
import { Kicker } from "@/components/fx/Kicker";

const AREAS = [
  { n: "01", t: "Immigration Law", d: "EB-1, EB-2 NIW, O-1, family-based petitions, naturalization, and complex consular matters across the U.S. and global jurisdictions." },
  { n: "02", t: "Corporate Law", d: "Entity formation, governance, M&A, joint ventures, and cross-border structuring for founders and established enterprises." },
  { n: "03", t: "Business Litigation", d: "Commercial disputes, partnership conflicts, and contract enforcement — resolved through negotiation or, when required, the courtroom." },
  { n: "04", t: "Employment Law", d: "Executive agreements, workplace investigations, non-compete and trade-secret enforcement, and discrimination defense." },
  { n: "05", t: "Family Law", d: "Discreet representation in dissolution, custody, prenuptial agreements, and high-net-worth estate matters." },
  { n: "06", t: "Civil Litigation", d: "Plaintiff and defense work in state and federal forums, including appellate advocacy and complex motion practice." },
  { n: "07", t: "Real Estate Law", d: "Commercial acquisitions, leasing, development, title disputes, and 1031 exchanges for domestic and foreign investors." },
  { n: "08", t: "International Practice", d: "FCPA compliance, treaty work, sovereign matters, and coordinated representation across allied counsel worldwide." },
];

export function PracticeAreas() {
  return (
    <section id="practice" className="relative py-[20px] md:py-[50px]">
      <div className="absolute inset-0 bg-grid opacity-[0.18] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="relative mx-auto max-w-[1520px] px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <Reveal><Kicker>Practice Areas</Kicker></Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] tracking-[-0.015em] text-balance">
                Eight disciplines.
                <span className="block gold-text italic">One standard of excellence.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140} className="max-w-sm">
            <p className="text-sm text-muted-foreground">
              Our practice groups operate as an integrated whole — drawing on shared
              intelligence, shared judgment, and a shared commitment to the people we represent.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px bg-border lg:grid-cols-4 md:grid-cols-2">
          {AREAS.map((a, i) => (
            <Reveal key={a.n} delay={i * 60}>
              <article className="group relative h-full overflow-hidden bg-background p-7 transition-colors duration-500 hover:bg-surface">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent transition-all duration-700 group-hover:via-gold" />
                <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-gold/[0.05] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between">
                  <span className="text-[11px] tracking-[0.28em] text-gold/80">{a.n}</span>
                  <svg className="h-4 w-4 -translate-x-2 text-muted-foreground/40 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:text-gold group-hover:opacity-100" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 13L13 3M5 3h8v8" />
                  </svg>
                </div>
                <h3 className="relative mt-10 font-display text-2xl leading-tight">{a.t}</h3>
                <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">{a.d}</p>
                <div className="relative mt-8 h-px w-10 bg-gold/40 transition-all duration-500 group-hover:w-20" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

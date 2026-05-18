import { useState } from "react";
import { Reveal } from "@/components/fx/Reveal";
import { Kicker } from "@/components/fx/Kicker";
import { MagneticButton } from "@/components/fx/MagneticButton";

function Field({ label, type = "text", name, textarea = false }: { label: string; type?: string; name: string; textarea?: boolean }) {
  const [val, setVal] = useState("");
  const filled = val.length > 0;
  const cls =
    "peer w-full bg-transparent border-b border-border/70 py-4 text-base text-foreground outline-none transition-colors focus:border-gold";
  return (
    <div className="relative">
      {textarea ? (
        <textarea name={name} rows={3} value={val} onChange={(e) => setVal(e.target.value)} className={`${cls} resize-none`} />
      ) : (
        <input name={name} type={type} value={val} onChange={(e) => setVal(e.target.value)} className={cls} />
      )}
      <label
        className={`pointer-events-none absolute left-0 origin-left text-muted-foreground transition-all duration-300 peer-focus:top-0 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.3em] peer-focus:text-gold ${
          filled ? "top-0 text-[10px] uppercase tracking-[0.3em] text-gold" : "top-4 text-sm"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden py-[20px] md:py-[50px]">
      <div className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-gold/[0.06] blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-emerald/[0.08] blur-3xl" />

      <div className="relative mx-auto max-w-[1520px] px-5 md:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal><Kicker>Begin</Kicker></Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-[clamp(2.2rem,5vw,4.5rem)] leading-[0.98] tracking-[-0.02em] text-balance">
                Start your
                <span className="block gold-text italic">consultation today.</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-8 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                Tell us about your matter. A partner will respond within one business day with next steps,
                scope, and a clear path forward.
              </p>
            </Reveal>

            <Reveal delay={200} className="mt-12 space-y-6 text-sm">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Direct</div>
                <div className="mt-2 font-display text-xl">+1 (212) 555 · 0188</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Email</div>
                <div className="mt-2 font-display text-xl">counsel@edlaw.llc</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Headquarters</div>
                <div className="mt-2 font-display text-lg leading-snug">
                  445 Park Avenue, 14th Floor<br />New York, NY 10022
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Hours</div>
                <div className="mt-2 text-sm text-muted-foreground">Mon — Fri · 9:00 – 18:30 EST<br />By appointment outside hours</div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-7">
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="glass-strong relative p-8 md:p-12"
            >
              <div className="grid gap-10 md:grid-cols-2">
                <Field label="Full Name" name="name" />
                <Field label="Email Address" name="email" type="email" />
                <Field label="Phone" name="phone" type="tel" />
                <Field label="Practice Area of Interest" name="area" />
                <div className="md:col-span-2">
                  <Field label="Tell us about your matter (confidential)" name="matter" textarea />
                </div>
              </div>

              <p className="mt-8 text-xs leading-relaxed text-muted-foreground/80">
                Submitting this form does not create an attorney-client relationship. All communications
                are treated as confidential and reviewed by our intake team within one business day.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
                <MagneticButton type="submit">
                  {submitted ? "Received — we'll be in touch" : "Request Consultation"}
                </MagneticButton>
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Secure · TLS Encrypted
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

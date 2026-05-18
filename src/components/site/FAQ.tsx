import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/fx/Reveal";
import { Kicker } from "@/components/fx/Kicker";

const ITEMS = [
  { q: "How are consultations conducted?", a: "Initial consultations are confidential and may be conducted in person, by phone, or by secure video. We will outline scope, fees, and next steps before any engagement begins." },
  { q: "Do you handle international matters?", a: "Yes. We regularly coordinate counsel and represent clients across the United States, Europe, the Gulf, and South Asia, with deep treaty and cross-border expertise." },
  { q: "How do you structure fees?", a: "We offer flat-fee, hourly, and hybrid arrangements depending on the matter. All fee structures are agreed in writing and reviewed at every milestone." },
  { q: "What is your response time?", a: "We commit to a substantive response within twenty-four hours of any client inquiry — always, without exception." },
  { q: "Will a partner handle my case?", a: "Every engagement is led by a partner who remains your point of contact for the life of the matter, supported by our team as scope requires." },
  { q: "Is my matter kept confidential?", a: "Absolute confidentiality is foundational to our practice. We maintain rigorous information security and strict need-to-know access internally." },
  { q: "Do you offer second opinions?", a: "Yes. We frequently provide independent second-opinion engagements for clients already represented by other counsel." },
  { q: "How do I begin?", a: "Submit the consultation form below or call our intake line. We will schedule a confidential conversation within one business day." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-[20px] md:py-[50px]">
      <div className="mx-auto grid max-w-[1520px] gap-16 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal><Kicker>Inquiries</Kicker></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.02] tracking-[-0.015em] text-balance">
              Questions,
              <span className="block gold-text italic">answered plainly.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              If your question isn't covered, our intake team is one message away — and ready to respond within a day.
            </p>
          </Reveal>
        </div>

        <ul className="lg:col-span-8">
          {ITEMS.map((it, i) => {
            const active = open === i;
            return (
              <Reveal as="li" key={it.q} delay={i * 40} className="border-b border-border/60">
                <button
                  onClick={() => setOpen(active ? null : i)}
                  className="group flex w-full items-start justify-between gap-6 py-7 text-left"
                  aria-expanded={active}
                >
                  <span className="flex items-start gap-6">
                    <span className="font-display text-sm text-gold/70">0{i + 1}</span>
                    <span className="font-display text-xl text-foreground transition-colors group-hover:text-gold md:text-2xl">
                      {it.q}
                    </span>
                  </span>
                  <span className={`mt-2 grid h-7 w-7 shrink-0 place-items-center border border-border transition-all ${active ? "border-gold bg-gold text-[oklch(0.18_0.03_260)] rotate-180" : "text-foreground"}`}>
                    <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 5l3 3 3-3" />
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 pl-14 pr-10 text-sm leading-relaxed text-muted-foreground md:text-base">
                        {it.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

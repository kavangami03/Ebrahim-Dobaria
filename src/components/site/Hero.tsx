import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero_new.png";
import { MagneticButton } from "@/components/fx/MagneticButton";
import { Counter } from "@/components/fx/Counter";
import { Kicker } from "@/components/fx/Kicker";

export function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      if (imgRef.current) imgRef.current.style.transform = `translate3d(${-x}px, ${-y}px, 0) scale(1.04)`;
      if (gridRef.current) gridRef.current.style.transform = `translate3d(${x * 0.3}px, ${y * 0.3}px, 0)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="home" className="noise relative min-h-[90svh] overflow-hidden pt-26 pb-16 md:pt-32">
      <div ref={gridRef} className="absolute inset-0 bg-grid opacity-60 transition-transform duration-700 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gold/[0.06] blur-3xl" />
      <div className="absolute -bottom-32 right-0 h-[500px] w-[700px] rounded-full bg-emerald/[0.08] blur-3xl" />

      <div className="relative mx-auto grid max-w-[1520px] gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <div className="animate-[fade-in_0.9s_ease-out]">
            <Kicker>Ibrahim & Dobaria Law · LLC</Kicker>
          </div>

          <h1 className="mt-6 font-display text-[clamp(2rem,5vw,4.5rem)] leading-[0.98] tracking-[-0.02em] text-balance">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Strategic counsel,
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              built on <em className="not-italic gold-text">trust,</em>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              precision <span className="text-muted-foreground/60">&</span> results.
            </motion.span>
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground opacity-0 [animation:fade-in_0.9s_ease-out_0.7s_forwards] md:text-base">
            Ibrahim & Dobaria Law LLC advises individuals, families, and enterprises across borders —
            delivering sophisticated legal strategy with clarity, conviction, and uncompromising advocacy.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 opacity-0 [animation:fade-in_0.9s_ease-out_0.85s_forwards]">
            <a href="#contact"><MagneticButton>Schedule Consultation</MagneticButton></a>
            <a href="#practice"><MagneticButton variant="ghost">Explore Practice Areas</MagneticButton></a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-8 border-t border-border/70 pt-8 sm:grid-cols-4">
            {[
              { v: 25, suffix: "+", label: "Years of\nCombined Practice" },
              { v: 40, suffix: "+", label: "Jurisdictions\nServed" },
              { v: 1200, suffix: "+", label: "Clients\nRepresented" },
              { v: 24, suffix: "h", label: "Response\nCommitment" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl text-foreground md:text-4xl">
                  <Counter to={s.v} suffix={s.suffix} />
                </div>
                <p className="mt-2 whitespace-pre-line text-[11px] uppercase tracking-[0.2em] text-muted-foreground/80">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden border border-border">
            <div ref={imgRef} className="absolute inset-0 transition-transform duration-500 ease-out will-change-transform">
              <img
                src={heroImg}
                alt="Abstract scales of justice made of glass and light"
                className="h-full w-full object-cover"
                width={1080}
                height={1350}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="divider-gold mb-5" />
              <p className="font-display text-xl text-foreground/90">
                "The measure of a counsel is the quality of judgment behind every decision."
              </p>
            </div>
          </div>

          <div className="glass animate-float absolute -left-6 top-12 hidden w-56 p-4 md:block">
            <div className="text-[10px] uppercase tracking-[0.28em] text-gold">Featured Practice</div>
            <div className="mt-2 font-display text-lg leading-tight">International Immigration & Corporate Law</div>
          </div>
        </div>
      </div>
    </section>
  );
}

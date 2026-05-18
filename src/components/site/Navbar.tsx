import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Wordmark } from "./Wordmark";
import { MagneticButton } from "@/components/fx/MagneticButton";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#practice", label: "Practice" },
  { href: "#why", label: "Why Us" },
  { href: "#attorneys", label: "Attorneys" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Voices" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto max-w-[1520px] px-5 md:px-8">
          <nav
            className={`flex items-center justify-between rounded-sm px-4 py-3 transition-all duration-500 md:px-6 ${
              scrolled ? "glass-strong" : ""
            }`}
          >
            <Wordmark />
            <ul className="hidden items-center gap-8 lg:flex">
              {LINKS.slice(1, -1).map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    data-active={active === l.href.slice(1)}
                    className="hover-line text-[12px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:block">
              <a href="#contact">
                <MagneticButton>Consult</MagneticButton>
              </a>
            </div>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-11 w-11 place-items-center border border-border text-foreground lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl lg:hidden overflow-y-auto"
          >
            <div className="flex items-center justify-between px-5 py-5">
              <Wordmark />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center border border-border"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="flex flex-col gap-1 px-6 md:pt-12">
              {LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border/60 py-5 font-display text-3xl text-foreground"
                  >
                    <span className="mr-3 text-xs text-gold align-top tracking-widest">
                      0{i + 1}
                    </span>
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

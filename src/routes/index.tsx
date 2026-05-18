import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { About } from "@/components/site/About";
import { PracticeAreas } from "@/components/site/PracticeAreas";
import { WhyUs } from "@/components/site/WhyUs";
import { SuccessStories } from "@/components/site/SuccessStories";
import { Attorneys } from "@/components/site/Attorneys";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const TITLE = "Ebrahim & Dobaria Law LLC — Strategic Counsel, Built on Trust";
const DESC =
  "Ebrahim & Dobaria Law LLC delivers sophisticated legal counsel across immigration, corporate, litigation, and family law — with partner-led representation worldwide.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Ebrahim & Dobaria Law LLC",
          description: DESC,
          areaServed: ["United States", "United Kingdom", "United Arab Emirates", "India"],
          telephone: "+1-212-555-0188",
          email: "counsel@edlaw.llc",
          address: {
            "@type": "PostalAddress",
            streetAddress: "445 Park Avenue, 14th Floor",
            addressLocality: "New York",
            addressRegion: "NY",
            postalCode: "10022",
            addressCountry: "US",
          },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <PracticeAreas />
        <WhyUs />
        <SuccessStories />
        <Attorneys />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

import AgentVsChatbot from "@/components/AgentVsChatbot";
import CalculatorSection from "@/components/CalculatorSection";
import DemoSection from "@/components/DemoSection";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import FounderSection from "@/components/FounderSection";
import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import PilotSection from "@/components/PilotSection";
import ProblemSection from "@/components/ProblemSection";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SpeakingSection from "@/components/SpeakingSection";
import WhatWeAutomate from "@/components/WhatWeAutomate";
import WhyNowSection from "@/components/WhyNowSection";
import { FAQS } from "@/lib/faqs";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // El contenido es estático y controlado por el sitio.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteHeader />
      <main id="contenido" className="flex-1">
        <Hero />
        <ProblemSection />
        <WhyNowSection />
        <WhatWeAutomate />
        <AgentVsChatbot />
        <DemoSection />
        <SpeakingSection />
        <HowWeWork />
        <PilotSection />
        <CalculatorSection />
        <FaqSection />
        <FounderSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}

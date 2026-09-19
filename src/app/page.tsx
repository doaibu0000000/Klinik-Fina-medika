import { Topbar } from "@/components/landing/topbar";
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { TrustBar } from "@/components/landing/trust-bar";
import { About } from "@/components/landing/about";
import { Services } from "@/components/landing/services";
import { Maternity } from "@/components/landing/maternity";
import { WhyUs } from "@/components/landing/why-us";
import { Testimonials } from "@/components/landing/testimonials";
import { Faq } from "@/components/landing/faq";
import { Contact } from "@/components/landing/contact";
import { CtaBand } from "@/components/landing/cta-band";
import { Footer } from "@/components/landing/footer";
import { FloatingWa } from "@/components/landing/floating-wa";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Maternity />
        <WhyUs />
        <Testimonials />
        <Faq />
        <Contact />
        <CtaBand />
      </main>
      <Footer />
      <FloatingWa />
    </div>
  );
}

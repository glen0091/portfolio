import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import FeaturedWork from "@/components/FeaturedWork";
import Expertise from "@/components/Expertise";
import Process from "@/components/Process";
import About from "@/components/About";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Intro />
      <FeaturedWork />
      <Expertise />
      <Process />
      <About />
      <Services />
      <TechStack />
      <Testimonials />
      <CTASection />
    </main>
  );
}

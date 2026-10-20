import type { Metadata } from "next";
import About from "@/components/sections/About";
import CallToAction from "@/components/sections/CallToAction";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services limit={6} />
      <About />
      <Projects limit={6} />
      <WhyUs />
      <Process />
      <CallToAction />
    </>
  );
}

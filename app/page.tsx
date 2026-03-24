import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Values from "@/sections/Values";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";
import { TracingBeam } from "@/components/ui/TracingBeam";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TracingBeam className="px-6">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Values />
        <Contact />
      </TracingBeam>
      <Footer />
    </main>
  );
}

import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Manifesto from "@/components/portfolio/Manifesto";
import Projects from "@/components/portfolio/Projects";
import Reels from "@/components/portfolio/Reels";
import Contact from "@/components/portfolio/Contact";
import FloatingCTA from "@/components/portfolio/FloatingCTA";

export default function Home() {
  return (
    <div id="top" className="relative bg-background">
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Projects />
        <Reels />
        <Contact />
      </main>
      <FloatingCTA />
    </div>
  );
}
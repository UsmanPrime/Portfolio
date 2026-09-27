import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import SectionMesh from "@/components/SectionMesh";
import { useMotionPreference } from "@/hooks/useMotionPreference";
import { useSectionEntrances } from "@/hooks/useSectionEntrances";
import { useAnchorNavigation } from "@/hooks/useAnchorNavigation";

const Index = () => {
  const reduced = useMotionPreference();
  const entranceRef = useSectionEntrances();
  useAnchorNavigation();
  return (
    <main ref={entranceRef} className="agency-page min-h-screen bg-background" data-mesh-motion={reduced ? "static" : "live"}>
      <SectionMesh reduced={reduced} />
      <a href="#about" className="skip-link">Skip to portfolio content</a>
      <Navbar />
      <Hero />
      <SectionDivider label="about" />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <SectionDivider label="projects" />
      <Projects />
      <Resume />
      <SectionDivider label="contact" />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;

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

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <SectionDivider label="about" />
      <About />
      <SectionDivider label="skills" />
      <Skills />
      <SectionDivider label="projects" />
      <Projects />
      <SectionDivider label="experience" />
      <Experience />
      <SectionDivider label="certifications" />
      <Certifications />
      <SectionDivider label="resume" />
      <Resume />
      <SectionDivider label="contact" />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;


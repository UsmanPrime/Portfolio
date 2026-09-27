import {
  ArrowDown,
  ArrowUpRight,
  FileText,
  Github,
} from "lucide-react";
import DefenseScene from "./DefenseScene";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-shell layout-container">
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="hero-kicker"><span aria-hidden="true">[</span> Cybersecurity student <span aria-hidden="true">]</span></p>
            <h1>
              Usman
              <br />
              Ibrahim
            </h1>
            <p className="hero-statement">
              Security Engineering · SOC/DFIR · Detection Engineering.
            </p>
            <p className="hero-description">
              I build secure software and detection workflows, bringing SOC operations
              and digital forensics into the way I engineer and investigate systems.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="panel-interactive hero-primary">
                Explore my work <ArrowUpRight aria-hidden="true" />
              </a>
              <a href="/Usman_Ibrahim.pdf" download className="panel-interactive hero-secondary">
                <FileText aria-hidden="true" /> Resume
              </a>
            </div>
          </div>
          <DefenseScene />
        </div>
        <div className="hero-status-row">
          <span>Islamabad, Pakistan / FAST NUCES ’28</span>
          <span>Open to cybersecurity opportunities</span>
          <span>Blue team mindset. Developer instinct.</span>
          <a href="https://github.com/UsmanPrime" target="_blank" rel="noopener noreferrer" className="panel-interactive">
            <Github aria-hidden="true" /> GitHub
          </a>
          <a href="#about" className="panel-interactive">
            Discover more <ArrowDown aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

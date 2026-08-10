<p align="center">
  <img src="https://img.shields.io/badge/SOC_Analyst-Cybersecurity-00b4d8?style=for-the-badge&logo=shield&logoColor=white" />
  <img src="https://img.shields.io/badge/DFIR-Blue_Team-34d399?style=for-the-badge&logo=hackthebox&logoColor=white" />
  <img src="https://img.shields.io/badge/FAST_NUCES-2024--2028-1e293b?style=for-the-badge&logo=university&logoColor=white" />
</p>

<h1 align="center">🛡️ Usman Ibrahim — Cybersecurity Portfolio</h1>

<p align="center">
  <strong>SOC Analyst · DFIR Specialist · Threat Hunter · Blue Team Operator</strong>
</p>

<p align="center">
  <a href="https://usmanprime-portfolio.vercel.app/">🌐 Live Demo</a> ·
  <a href="https://www.linkedin.com/in/usman-ibrahim-992253276/">LinkedIn</a> ·
  <a href="mailto:i242038@isb.nu.edu.pk">Email</a>
</p>

---

## 📋 Overview

Cybersecurity Portfolio — SOC Analyst & DFIR Specialist. Built with React, TypeScript, Tailwind CSS & Vite. Features interactive particle backgrounds, scroll-reveal animations, glassmorphism UI, typing terminal effects, and animated stats. Fully responsive dark-themed design.

> **Status:** Seeking SOC Analyst Internship — Open to Cybersecurity Opportunities

---

## 🚀 Recent Upgrades (August 2026)

**🎨 UI/UX & Visual Polish**
- Upgraded global typography to **Outfit** for a premium, modern aesthetic.
- Scaled up ambient cyber-motifs (reticles, data terminals, circuit traces) for higher visibility and engagement.
- Re-architected section layouts (e.g., balancing the About page) for flawless responsiveness across all screen sizes.

**🔒 Security Hardening (A+ Rating)**
- **Strict HTTP Headers:** Enforced `Strict-Transport-Security` (HSTS), `X-Frame-Options` (Clickjacking prevention), and `X-Content-Type-Options`.
- **Content Security Policy (CSP):** Implemented a rigorous CSP to prevent unauthorized script execution and cross-site injections.
- **API Protection:** Engineered robust server-side input validation and strict rate-limiting on the serverless contact API to eliminate spam and abuse vectors.
- **CORS Scoping:** Tightly scoped cross-origin resource sharing specifically to the production domain.

**🌐 SEO & AI Search Readiness**
- **Rich Meta Data:** Integrated JSON-LD Schema Markup, Open Graph tags, and Twitter Cards for flawless rich previews.
- **Bot Traffic Management:** Configured `robots.txt` to seamlessly allow modern AI Search Agents (like Perplexity and SearchGPT) and standard search engines, while explicitly opting out of unauthorized mass data scraping for core AI model training.

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🎆 **Interactive Particles** | Canvas-based particle network with mouse repulsion effect |
| ⌨️ **Typing Terminal** | Animated typewriter effect in the hero terminal panel |
| 🔄 **Rotating Roles** | Dynamic role titles cycling through SOC Analyst, DFIR Specialist, etc. |
| 📊 **Animated Count-Up** | Stats that count up when scrolled into view (30+ alerts, 20% reduction) |
| 👁️ **Scroll Reveal** | IntersectionObserver-based section reveal animations |
| 🪟 **Glassmorphism Cards** | Backdrop-blur cards with shine sweep on hover |
| 🎯 **Scroll Spy Navbar** | Active section highlighting as you scroll |
| 🧲 **Magnetic Buttons** | Radial glow expansion on hover |
| 🌈 **Gradient Animations** | Animated section title underlines, text gradients |
| 📱 **Fully Responsive** | Mobile-first design with smooth navigation |
| 📧 **Contact Form** | Working contact form with API backend |
| 📄 **Resume Download** | Direct PDF download and online view |

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| **React 18** | Component-based UI |
| **TypeScript** | Type-safe development |
| **Vite** | Lightning-fast build tool |
| **Tailwind CSS** | Utility-first styling |
| **shadcn/ui** | Premium component library |
| **Lucide React** | Icon library |

### Libraries & Tools
| Library | Purpose |
|---------|---------|
| **TanStack React Query** | Server state management |
| **React Router v6** | Client-side routing |
| **React Hook Form + Zod** | Form handling & validation |
| **Sonner** | Toast notifications |
| **Resend** | Email API for contact form |
| **Vercel** | Deployment & hosting |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx                 # Landing with particles & typing effect
│   ├── About.tsx                # Bio, photo, animated stats
│   ├── Skills.tsx               # 6 skill categories from resume
│   ├── Projects.tsx             # 5 project cards with highlights
│   ├── Experience.tsx           # Timeline + achievements section
│   ├── Certifications.tsx       # 7 certs with status badges
│   ├── Resume.tsx               # Download card + 6 competency panels
│   ├── Contact.tsx              # Form + social links + terminal
│   ├── Navbar.tsx               # Scroll spy + glassmorphism
│   ├── Footer.tsx               # Social links + back-to-top
│   ├── ParticlesBackground.tsx  # Canvas particle network
│   └── ui/                      # shadcn/ui base components
├── hooks/
│   ├── useAnimations.ts         # Scroll reveal, typing, count-up, parallax
│   └── use-toast.ts             # Toast notification hook
├── pages/
│   ├── Index.tsx                # Main portfolio page
│   └── NotFound.tsx             # 404 page
├── lib/                         # Utility functions
├── assets/                      # Images & media
├── App.tsx                      # Root with routing
├── index.css                    # Design system & animations
└── main.tsx                     # Entry point
```

---

## 🎯 Portfolio Sections

### 🏠 Hero
- Interactive particle network background with mouse repulsion
- Rotating role titles with smooth fade transitions
- Typing terminal effect showing security monitoring initialization
- Gradient name text and skill badges with hover micro-animations

### 👤 About
- Animated profile photo with orbital rings and availability indicator
- Count-up statistics: **30+** daily alerts, **5+** attack scenarios, **20%** false positive reduction
- 4 focus area cards: SOC Operations, Digital Forensics, Threat Detection, AI Solution Support

### 🔧 Skills
6 categories matching resume exactly:
1. **Security Operations** — SOC, Alert Triage, DFIR, Threat Hunting, IOC Analysis
2. **SIEM & Security Tools** — Splunk, Wazuh, ELK, Wireshark, Volatility 3, Autopsy, Belkasoft
3. **Digital Forensics** — Memory, Windows, PCAP, Log Analysis, OSINT
4. **Frameworks & Standards** — MITRE ATT&CK, ISO/IEC 27001, NIST CSF
5. **Programming Languages** — Python, Bash, C++, JavaScript, TypeScript
6. **Core Concepts & Web Tools** — TCP/IP, OOP, React, Node.js, MongoDB

### 💼 Projects
| Project | Stack | Highlights |
|---------|-------|------------|
| Smart Housing Society Portal | React, Node.js, MongoDB | JWT auth, 200+ resident records, 40% faster resolution |
| OSIM - Organizational Simulation | C++, OOP | 12+ class hierarchies, 1,000+ records, SOLID principles |
| SecureShop | C++, File I/O | Multi-factor auth, O(log n) search, injection prevention |
| Cybersecurity Portfolio | React, TypeScript | 95+ Lighthouse score, full responsive design |
| Xonix Game | C++, Data Structures | 60 FPS physics engine, 35% memory reduction |

### 📜 Experience
- **Business Development Intern** — Intellema (May 2026 – Present)
- **SOC Analyst Intern** — Tech Hierarchy (March 2026)
- **Challenge Author** — NASCON 2026 Forensics Arena
- **Organizer & Author** — RDX National CTF (100+ participants)
- **Technical Team & Head of Finance** — Cyber Space Legion (FAST NUCES)

### 🏆 Achievements
- 🥉 **3rd Place** — SudoFuzzers CTF (top 6% of 50+ teams)
- 🏅 **7th Place** — CyberFest 2025 National CTF (top 7% of 100+ teams)
- ⭐ **Star of CyberFest '25** — Individual Recognition Award

### 📜 Certifications
- CDSA — Hack The Box *(In Progress)*
- SOC & Network Security — Cisco
- ISO/IEC 27001:2022 — SkillFront
- Computer Networks & Network Security — IBM
- Advanced Digital Forensics Techniques
- Windows Forensics — Belkasoft (6 CPE Credits)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20.x
- npm or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/UsmanPrime/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server will start at `http://localhost:8080/`

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🌐 Deployment

This portfolio is deployed on **Vercel** with automatic deployments from the main branch.

**Live URL:** [usmanprime-portfolio.vercel.app](https://usmanprime-portfolio.vercel.app/)

---

## 📞 Contact

| Channel | Link |
|---------|------|
| 📧 Email | [i242038@isb.nu.edu.pk](mailto:i242038@isb.nu.edu.pk) |
| 📱 Phone | +92 334 2226620 |
| 💼 LinkedIn | [usman-ibrahim](https://www.linkedin.com/in/usman-ibrahim-992253276/) |
| 🐙 GitHub | [UsmanPrime](https://github.com/UsmanPrime) |
| 🌐 Portfolio | [usmanprime-portfolio.vercel.app](https://usmanprime-portfolio.vercel.app/) |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  <strong>Built with 🛡️ by Usman Ibrahim</strong><br/>
  <em>SOC Operations · DFIR · Threat Detection · Blue Team</em><br/><br/>
  <sub>Last Updated: August 2026</sub>
</p>

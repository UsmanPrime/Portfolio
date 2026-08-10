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
- Count-up statistics: **30+** Alerts/Day, **7** Projects, **5+** Lab Scenarios
- 5 focus area cards: SOC Operations, Digital Forensics, Full-Stack Development, Systems Programming, AI Solution Support
- Professional bio detailing current work at NetraLink Solutions and past experience at Tech Hierarchy and Intellema

### 🔧 Skills
7 comprehensive categories:
1. **Security & Forensics** — Application Security, SOC Operations, DFIR, Splunk, Wazuh, Volatility 3, MITRE ATT&CK
2. **Programming Languages** — Golang, Python, C++, x86 Assembly, TypeScript
3. **Web & Full-Stack** — React 18, Node.js, Express.js, MongoDB, JWT Auth
4. **Software Engineering** — OOP, Data Structures, SOLID Principles, Agile
5. **Networking** — TCP/IP, OSPF, EIGRP, RIPv2, NAT, ACLs
6. **Tools & Platforms** — Docker, Linux, Vercel, Git
7. **Business & Strategy** — Enterprise RAG Solutions, Agentic AI, Client Acquisition

### 💼 Projects
| Project | Stack | Highlights |
|---------|-------|------------|
| **NextGen Residency — Smart Housing Society** | React, Node.js, Express, MongoDB | RBAC, JWT auth with fingerprinting, Helmet.js security, 2FA, CI/CD deployed |
| **Xonix Game — Professional Edition** | C++11, SFML | Multiplayer arcade game, 10+ custom data structures (Hash Tables, AVL Trees) |
| **Enterprise Multi-Area Network Architecture** | Cisco Packet Tracer | 11 LANs, 22 WAN links, OSPF, EIGRP, RIPv2, Static NAT, Extended ACLs |
| **Dizzy Walk — Maze Adventure Game** | x86 Assembly, MASM32 | 2,700+ lines, Win32 API, GDI rendering, STDCALL convention |
| **Cybersecurity Portfolio** | React, TypeScript | 95+ Lighthouse score, full responsive dark-themed design |
| **OSIM — Organizational Simulation** | C++, OOP | 12+ class hierarchies, 1,000+ records, SOLID principles |
| **SecureShop** | C++, File I/O | Multi-factor auth, O(log n) search, injection prevention |

### 📜 Experience
- **Security Research Intern** — NetraLink Solutions (Jul 2026 – Present)
- **Business Development Intern** — Intellema (May 2026 – Present)
- **SOC Analyst Intern** — Tech Hierarchy (Mar 2026)
- **Challenge Author** — NASCON 2026 Forensics Arena (Feb 2026 – Aug 2026)
- **Organizer & Author** — RDX National CTF (Jun 2025 – Jul 2025)
- **Technical Team & Head of Finance** — Cyber Space Legion (FAST NUCES) (Sep 2024 – Present)

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

import { useRef, useState } from "react";
import { CornerDownLeft, Terminal } from "lucide-react";

const commands: Record<string, string | (() => string)> = {
  help: () => `Available commands: ${Object.keys(commands).join(", ")}, clear. Use ↑ and ↓ for command history.`,
  whoami:
    "Usman Ibrahim — BS Cyber Security, FAST NUCES Islamabad ’28. Focus: Security Engineering, SOC/DFIR, and Detection Engineering.",
  skills: () => Array.from(document.querySelectorAll('#skills .skills-tag'), item => item.textContent).join(', '),
  certifications: () => Array.from(document.querySelectorAll('#certifications .cert-row'), row => {
    const name = row.querySelector('.flex-1 p')?.textContent?.trim();
    const status = row.textContent?.includes('In Progress') ? 'in progress' : 'completed';
    return `${name} — ${status}`;
  }).join('\n'),
  email: "i242038@isb.nu.edu.pk",
  socials: () => Array.from(document.querySelectorAll<HTMLAnchorElement>('.portfolio-footer a[aria-label]'), link => `${link.getAttribute('aria-label')}: ${link.href}`).join('\n'),
  education: "BS Cyber Security · FAST NUCES Islamabad · Aug 2024 — Jun 2028",
  projects:
    "Opening my projects: PIMS, NextGen Residency, enterprise networking, systems programming, and more.",
  contact:
    "Email: i242038@isb.nu.edu.pk · GitHub: github.com/UsmanPrime. Opening the contact section.",
  resume: "Opening the resume section. View or download the PDF there.",
};
interface Entry {
  command: string;
  result: string;
}
export default function LiveTerminal() {
  const [input, setInput] = useState("");
  const [entries, setEntries] = useState<Entry[]>([]);
  const history = useRef<string[]>([]);
  const cursor = useRef(0);
  const output = useRef<HTMLDivElement>(null);
  function run(value: string) {
    const command = value.trim().toLowerCase();
    if (!command) return;
    history.current = [...history.current, value.trim()].slice(-30);
    cursor.current = history.current.length;
    setInput("");
    if (command === "clear") {
      setEntries([]);
      return;
    }
    const response = commands[command];
    const result = typeof response === "function" ? response() : response;
    setEntries((old) => [
      ...old.slice(-11),
      {
        command: value.trim(),
        result:
          result ||
          `Command not found: ${value.trim()}. Type help to see available commands.`,
      },
    ]);
    if (["projects", "contact", "resume"].includes(command))
      window.location.hash = command;
    requestAnimationFrame(() => {
      if (output.current)
        output.current.scrollTop = output.current.scrollHeight;
    });
  }
  return (
    <div id="terminal" className="interactive-terminal panel-interactive">
      <div className="terminal-titlebar">
        <span>
          <Terminal size={15} /> usman@portfolio: ~
        </span>
        <span>Portfolio shell</span>
      </div>
      <div className="terminal-content">
        <div className="terminal-welcome">
          <p>A little more comfortable in a terminal?</p>
          <span>
            Type <button onClick={() => run("help")}>help</button> to explore.
            This shell navigates the portfolio.
          </span>
        </div>
        <div
          className="terminal-output"
          ref={output}
          role="log"
          aria-live="polite"
          aria-label="Terminal output"
        >
          {entries.map((entry, index) => (
            <div key={index}>
              <p>
                <span>❯</span> {entry.command}
              </p>
              <p>{entry.result}</p>
            </div>
          ))}
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            run(input);
          }}
          className="terminal-input-row"
        >
          <span className="terminal-prompt" aria-hidden="true">❯</span>
          <label className="sr-only" htmlFor="terminal-command">
            Terminal command
          </label>
          <input
            id="terminal-command"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            maxLength={150}
            spellCheck={false}
            autoComplete="off"
            placeholder="Type a command…"
            onKeyDown={(event) => {
              if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
              event.preventDefault();
              cursor.current = Math.max(
                0,
                Math.min(
                  history.current.length,
                  cursor.current + (event.key === "ArrowUp" ? -1 : 1),
                ),
              );
              setInput(history.current[cursor.current] || "");
            }}
          />
          <button type="submit" aria-label="Run command">
            <CornerDownLeft size={17} />
          </button>
        </form>
      </div>
      <div className="terminal-shortcuts">
        {["whoami", "skills", "certifications", "contact"].map((command) => (
          <button key={command} onClick={() => run(command)}>
            {command}
          </button>
        ))}
        <span>No installation required.</span>
      </div>
    </div>
  );
}

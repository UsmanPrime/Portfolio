import { useState, useEffect } from "react";
import { Terminal as TerminalIcon } from "lucide-react";

const SEQUENCES = [
  {
    command: "./analyze_pcap --deep",
    output: [
      { text: "[OK] Packets captured: 14,203", delay: 200, color: "text-emerald-400" },
      { text: "[*] Analyzing signatures...", delay: 400, color: "text-muted-foreground" },
      { text: "[!] Suspicious payload (CVE-2024-38063) detected", delay: 800, color: "text-amber-400" },
      { text: ">> Escalate to Incident Response team? (Y/n)", delay: 300, color: "text-foreground font-bold" }
    ]
  },
  {
    command: "tail -f /var/log/wazuh/alerts.log",
    output: [
      { text: "Listening for events...", delay: 300, color: "text-muted-foreground" },
      { text: "!! Rule 1002 (Level 12) -> Multiple authentication failures", delay: 900, color: "text-destructive" },
      { text: "   Src: 192.168.1.45 | User: admin", delay: 100, color: "text-muted-foreground" },
      { text: ">> ACTION: IP auto-banned via active response", delay: 600, color: "text-emerald-400" }
    ]
  },
  {
    command: "nmap -sV -T4 10.0.0.12",
    output: [
      { text: "Starting Nmap 7.93 at 2026-08-29 EDT", delay: 300, color: "text-muted-foreground" },
      { text: "PORT     STATE SERVICE VERSION", delay: 500, color: "text-foreground" },
      { text: "22/tcp   open  ssh     OpenSSH 8.9p1", delay: 200, color: "text-emerald-400" },
      { text: "443/tcp  open  https   nginx 1.18.0", delay: 200, color: "text-emerald-400" },
      { text: "Nmap done: 1 IP scanned in 1.34 sec", delay: 600, color: "text-primary" }
    ]
  }
];

export default function LiveTerminal() {
  const [seqIndex, setSeqIndex] = useState(0);
  const [step, setStep] = useState<"typing" | "running" | "done">("typing");
  const [typedCommand, setTypedCommand] = useState("");
  const [outputLines, setOutputLines] = useState<any[]>([]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const seq = SEQUENCES[seqIndex];

    if (step === "typing") {
      if (typedCommand.length < seq.command.length) {
        timeoutId = setTimeout(() => {
          setTypedCommand(seq.command.slice(0, typedCommand.length + 1));
        }, Math.random() * 40 + 40); // 40-80ms per char
      } else {
        timeoutId = setTimeout(() => setStep("running"), 500);
      }
    } else if (step === "running") {
      if (outputLines.length < seq.output.length) {
        const nextLine = seq.output[outputLines.length];
        timeoutId = setTimeout(() => {
          setOutputLines([...outputLines, nextLine]);
        }, nextLine.delay);
      } else {
        timeoutId = setTimeout(() => setStep("done"), 4000); // Wait before clearing
      }
    } else if (step === "done") {
      setTypedCommand("");
      setOutputLines([]);
      setSeqIndex((prev) => (prev + 1) % SEQUENCES.length);
      setStep("typing");
    }

    return () => clearTimeout(timeoutId);
  }, [seqIndex, step, typedCommand, outputLines]);

  return (
    <div className="terminal-panel shadow-2xl shadow-primary/5 w-full max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.55s" }}>
      <div className="terminal-header">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-destructive/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <span className="text-[11px] text-muted-foreground ml-2 font-mono flex items-center gap-1.5">
          <TerminalIcon className="w-3 h-3 hidden sm:block" /> threat_monitor.sh
        </span>
      </div>
      <div className="p-4 sm:p-5 font-mono text-[11px] sm:text-[13px] space-y-2 bg-card/50 h-[220px] sm:h-[200px] overflow-hidden flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-primary font-medium shrink-0">usman@soc:~$</span>
          <span className="text-foreground flex items-center whitespace-pre-wrap break-all">
            {typedCommand}
            {step === "typing" && (
              <span className="inline-block w-1.5 h-3.5 sm:h-4 bg-primary ml-1 animate-pulse" />
            )}
          </span>
        </div>
        <div className="flex-1 flex flex-col gap-2 overflow-hidden text-[11px] sm:text-[13px] leading-relaxed break-words whitespace-pre-wrap">
          {outputLines.map((line, i) => (
            <div key={i} className={line.color}>
              {line.text}
            </div>
          ))}
          {step === "running" && outputLines.length === SEQUENCES[seqIndex].output.length && (
            <div className="flex items-center gap-2 mt-1">
              <span className="text-primary font-medium shrink-0">usman@soc:~$</span>
              <span className="inline-block w-1.5 h-3 bg-primary ml-0.5 animate-pulse" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

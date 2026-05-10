import { useEffect, useState } from "react";
import { Check } from "lucide-react";

interface StatusLine {
  name: string;
  meta: string;
}

const statusLines: StatusLine[] = [
  { name: "foundation-cli", meta: "v0.4.0 · scaffolding" },
  { name: "vendro", meta: "live · multi-tenant" },
  { name: "amend-notes", meta: "live · notes + tags" },
  { name: "homelab", meta: "12 svc · proxmox" },
];

const cyclingPrompts = [
  "ssh homelab",
  "git push origin main",
  "pnpm dev foundation-cli",
  "code feat/ai-tools",
  "claude --resume",
];

const TYPE_SPEED = 55;
const HOLD_AFTER_TYPED = 1400;
const ERASE_SPEED = 28;
const HOLD_AFTER_ERASED = 400;

const TerminalVisual = () => {
  const [promptIndex, setPromptIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"typing" | "erasing">("typing");

  useEffect(() => {
    const target = cyclingPrompts[promptIndex];

    if (phase === "typing") {
      if (typed.length < target.length) {
        const t = setTimeout(
          () => setTyped(target.slice(0, typed.length + 1)),
          TYPE_SPEED
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("erasing"), HOLD_AFTER_TYPED);
      return () => clearTimeout(t);
    }

    if (typed.length > 0) {
      const t = setTimeout(() => setTyped(typed.slice(0, -1)), ERASE_SPEED);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setPromptIndex((i) => (i + 1) % cyclingPrompts.length);
      setPhase("typing");
    }, HOLD_AFTER_ERASED);
    return () => clearTimeout(t);
  }, [typed, phase, promptIndex]);

  return (
    <div
      className="w-full max-w-md overflow-hidden rounded-lg border bg-card text-left shadow-sm"
      style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}
    >
      <div className="flex items-center gap-2 border-b bg-muted/40 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span className="ml-3 text-xs text-muted-foreground">
          anmol@dev:~/portfolio
        </span>
      </div>

      <div className="space-y-1.5 px-4 py-4 text-sm leading-6">
        <div>
          <span className="text-primary">$</span>{" "}
          <span className="text-foreground">stack --status</span>
        </div>
        {statusLines.map((line) => (
          <div key={line.name} className="flex items-center gap-2">
            <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
            <span className="w-32 truncate text-foreground">{line.name}</span>
            <span className="truncate text-muted-foreground">{line.meta}</span>
          </div>
        ))}
        <div className="h-3" />
        <div>
          <span className="text-primary">$</span>{" "}
          <span className="text-foreground">{typed}</span>
          <span className="ml-px inline-block h-4 w-2 translate-y-[3px] animate-pulse bg-primary" />
        </div>
      </div>
    </div>
  );
};

export default TerminalVisual;

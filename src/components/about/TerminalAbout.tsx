import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  profile,
  stack,
  interests,
  funFacts,
  now,
  socials,
} from "@/components/about/aboutData";

/* ------------------------------------------------------------------ */
/* Virtual filesystem — `cat`-able output nodes for each file.        */
/* ------------------------------------------------------------------ */

const bioFile = (
  <p className="max-w-2xl text-sm text-muted-foreground">{profile.bio}</p>
);

const nowFile = (
  <div className="space-y-1 text-sm">
    {now.map((i) => (
      <p key={i.title}>
        <span className="text-foreground">{i.title}</span>
        <span className="text-muted-foreground"> — {i.note}</span>
      </p>
    ))}
  </div>
);

const interestsFile = (
  <div className="space-y-0.5 text-sm text-muted-foreground">
    {interests.map((i) => (
      <p key={i}>
        <span className="text-lime-500">- </span>
        {i}
      </p>
    ))}
  </div>
);

const factsFile = (
  <div className="space-y-0.5 text-sm text-muted-foreground">
    {funFacts.map((f) => (
      <p key={f}>
        <span className="text-amber-400/70"># </span>
        {f}
      </p>
    ))}
  </div>
);

const contactFile = (
  <div className="space-y-0.5 text-sm">
    {socials.map((s) => (
      <p key={s.label}>
        <span className="inline-block w-20 text-sky-400">{s.label}</span>
        <a
          href={s.href}
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
        >
          {s.href.replace("mailto:", "")}
        </a>
      </p>
    ))}
  </div>
);

const STACK_FILENAMES: Record<string, string> = {
  Languages: "languages.txt",
  Frontend: "frontend.txt",
  Backend: "backend.txt",
  "Infra / DevOps": "infra.txt",
  "Tools / Other": "tools.txt",
};

const stackFiles: Record<string, ReactNode> = {};
stack.forEach(({ group, items }) => {
  stackFiles[STACK_FILENAMES[group]] = (
    <p className="text-sm text-lime-400">{items.join("  ")}</p>
  );
});
const stackFileNames = Object.keys(stackFiles);

const rootFiles: Record<string, ReactNode> = {
  "bio.txt": bioFile,
  "now.txt": nowFile,
  "interests.md": interestsFile,
  "facts.log": factsFile,
  "contact.txt": contactFile,
};
const rootFileNames = Object.keys(rootFiles);

/* ------------------------------------------------------------------ */
/* Command engine                                                     */
/* ------------------------------------------------------------------ */

type Cwd = "root" | "stack";
type ExecResult = {
  output?: ReactNode;
  clear?: boolean;
  cd?: Cwd;
  exit?: boolean;
};

const pathOf = (cwd: Cwd) => (cwd === "stack" ? "~/about/stack" : "~/about");

const longestCommonPrefix = (items: string[]) => {
  if (!items.length) return "";
  let prefix = items[0];
  for (const item of items) {
    while (!item.startsWith(prefix)) prefix = prefix.slice(0, -1);
  }
  return prefix;
};

const err = (msg: string) => <p className="text-sm text-red-400">{msg}</p>;

const helpOutput = (() => {
  const rows: [string, string][] = [
    ["help", "show this help"],
    ["ls [dir]", "list files in a directory"],
    ["cat <file>", "print a file's contents"],
    ["cd <dir>", "change directory (stack, ..)"],
    ["whoami", "who you're looking at"],
    ["pwd", "print working directory"],
    ["clear", "clear the screen"],
    ["exit", "end the guest session"],
  ];
  return (
    <div className="space-y-0.5 text-sm">
      <p className="text-muted-foreground">Available commands:</p>
      {rows.map(([cmd, desc]) => (
        <p key={cmd}>
          <span className="inline-block w-32 text-lime-400">{cmd}</span>
          <span className="text-muted-foreground">{desc}</span>
        </p>
      ))}
      <p className="pt-1 text-muted-foreground">
        Tip: try <span className="text-foreground">cat bio.txt</span> or{" "}
        <span className="text-foreground">ls stack</span>.
      </p>
    </div>
  );
})();

const whoamiOutput = (
  <div className="text-sm">
    <p className="text-lg font-bold text-lime-400">{profile.name}</p>
    <p className="text-muted-foreground">
      {profile.role} · {profile.location} · {profile.experience}
    </p>
  </div>
);

const Listing = ({ dirs, files }: { dirs: string[]; files: string[] }) => (
  <div className="flex flex-wrap gap-x-4 gap-y-0.5 text-sm">
    {dirs.map((d) => (
      <span key={d} className="font-medium text-sky-400">
        {d}/
      </span>
    ))}
    {files.map((f) => (
      <span key={f} className="text-foreground">
        {f}
      </span>
    ))}
  </div>
);

function resolveFile(cwd: Cwd, arg: string): ReactNode | undefined {
  if (arg.startsWith("stack/")) return stackFiles[arg.slice(6)];
  if (cwd === "stack") return stackFiles[arg];
  return rootFiles[arg];
}

function execute(raw: string, cwd: Cwd): ExecResult {
  const parts = raw.trim().split(/\s+/).filter(Boolean);
  const cmd = parts[0];
  const args = parts.slice(1);
  const arg = args[0] ?? "";

  if (!cmd) return {};

  switch (cmd) {
    case "help":
      return { output: helpOutput };
    case "whoami":
      return { output: whoamiOutput };
    case "pwd":
      return { output: <p className="text-sm text-foreground">{pathOf(cwd)}</p> };
    case "clear":
      return { clear: true };
    case "exit":
      return {
        exit: true,
        output: <p className="text-sm text-muted-foreground">logout</p>,
      };
    case "ls": {
      if (!arg || arg === "." || arg === "~" || arg === "/") {
        return cwd === "stack"
          ? { output: <Listing dirs={[]} files={stackFileNames} /> }
          : { output: <Listing dirs={["stack"]} files={rootFileNames} /> };
      }
      if ((arg === "stack" || arg === "stack/") && cwd === "root")
        return { output: <Listing dirs={[]} files={stackFileNames} /> };
      if (arg === "..")
        return { output: <Listing dirs={["stack"]} files={rootFileNames} /> };
      return { output: err(`ls: ${arg}: No such file or directory`) };
    }
    case "cat": {
      if (args.length === 0) return { output: err("usage: cat <file> [file...]") };
      const nodes = args.map((name, i) => {
        const file = resolveFile(cwd, name);
        return (
          <div key={i}>
            {file === undefined
              ? err(`cat: ${name}: No such file or directory`)
              : file}
          </div>
        );
      });
      return { output: <div className="space-y-2">{nodes}</div> };
    }
    case "cd": {
      if (!arg || arg === "~" || arg === "/" || arg === "..")
        return { cd: "root" };
      if ((arg === "stack" || arg === "stack/" || arg === "./stack") && cwd === "root")
        return { cd: "stack" };
      return { output: err(`cd: no such directory: ${arg}`) };
    }
    default:
      return {
        output: (
          <p className="text-sm text-red-400">
            zsh: command not found: {cmd}. Type{" "}
            <span className="text-foreground">help</span>.
          </p>
        ),
      };
  }
}

/* ------------------------------------------------------------------ */
/* Rendering                                                          */
/* ------------------------------------------------------------------ */

type Entry =
  | { kind: "command"; user: string; path: string; cmd: string }
  | { kind: "output"; node: ReactNode };

const PromptHead = ({ user, path }: { user: string; path: string }) => (
  <>
    <span className="text-primary">{user}@portfolio</span>
    <span className="text-muted-foreground">:</span>
    <span className="text-sky-400">{path}</span>
    <span className="text-muted-foreground">$ </span>
  </>
);

const DEMO = ["whoami", "ls", "cat bio.txt", "cat interests.md", "cat facts.log"];

const TerminalAbout = () => {
  const [history, setHistory] = useState<Entry[]>([]);
  const [typing, setTyping] = useState("");
  const [mode, setMode] = useState<"auto" | "interactive">("auto");
  const [autoDone, setAutoDone] = useState(false);
  const [input, setInput] = useState("");
  const [cwd, setCwd] = useState<Cwd>("root");
  const [cmdLog, setCmdLog] = useState<string[]>([]);
  const logIdx = useRef<number | null>(null);

  const cancelled = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // auto-play demo
  useEffect(() => {
    cancelled.current = false;
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    (async () => {
      await sleep(700);
      for (const cmd of DEMO) {
        if (cancelled.current) return;
        for (let i = 1; i <= cmd.length; i++) {
          if (cancelled.current) return;
          setTyping(cmd.slice(0, i));
          await sleep(48);
        }
        await sleep(320);
        if (cancelled.current) return;
        const res = execute(cmd, "root");
        setTyping("");
        setHistory((h) => [
          ...h,
          { kind: "command", user: "anmol", path: "~/about", cmd },
          ...(res.output ? [{ kind: "output" as const, node: res.output }] : []),
        ]);
        await sleep(650);
      }
      if (!cancelled.current) setAutoDone(true);
    })();
    return () => {
      cancelled.current = true;
    };
  }, []);

  // keep scrolled to bottom
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [history, typing, mode, autoDone]);

  const takeOver = () => {
    cancelled.current = true;
    setTyping("");
    setAutoDone(false);
    setMode("interactive");
    setHistory((h) => [
      ...h,
      {
        kind: "output",
        node: (
          <p className="text-sm text-muted-foreground">
            Guest session started. Type{" "}
            <span className="text-foreground">help</span> to list commands.
          </p>
        ),
      },
    ]);
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const runInteractive = (raw: string) => {
    const res = execute(raw, cwd);
    if (raw.trim()) setCmdLog((l) => [...l, raw]);
    logIdx.current = null;
    if (res.clear) {
      setHistory([]);
      return;
    }
    setHistory((h) => [
      ...h,
      { kind: "command", user: "guest", path: pathOf(cwd), cmd: raw },
      ...(res.output ? [{ kind: "output" as const, node: res.output }] : []),
    ]);
    if (res.exit) {
      setMode("auto");
      setAutoDone(true);
      setCwd("root");
      return;
    }
    if (res.cd) setCwd(res.cd);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runInteractive(input);
    setInput("");
  };

  const handleTab = () => {
    const parts = input.split(/\s+/);
    if (parts.length < 2) return; // nothing to complete yet
    const cmd = parts[0];
    if (!["cat", "ls", "cd"].includes(cmd)) return;

    const token = parts[parts.length - 1];
    let baseDir: Cwd = cwd;
    let prefix = token;
    let pathPrefix = "";
    if (token.startsWith("stack/") && cwd === "root") {
      baseDir = "stack";
      prefix = token.slice(6);
      pathPrefix = "stack/";
    }

    let dirNames: string[];
    let fileNames: string[];
    if (cmd === "cd") {
      dirNames = baseDir === "root" ? ["stack"] : [".."];
      fileNames = [];
    } else {
      dirNames = baseDir === "root" ? ["stack"] : [];
      fileNames = baseDir === "root" ? rootFileNames : stackFileNames;
    }

    const names = [...dirNames, ...fileNames];
    const matches = names.filter((n) => n.startsWith(prefix));
    if (matches.length === 0) return;

    const setLast = (value: string) => {
      parts[parts.length - 1] = value;
      setInput(parts.join(" "));
    };

    if (matches.length === 1) {
      const name = matches[0];
      const suffix = dirNames.includes(name) ? "/" : " ";
      setLast(pathPrefix + name + suffix);
      return;
    }

    const common = longestCommonPrefix(matches);
    if (common.length > prefix.length) setLast(pathPrefix + common);
    // ambiguous — list the options like a real shell
    setHistory((h) => [
      ...h,
      {
        kind: "output",
        node: (
          <Listing
            dirs={matches.filter((m) => dirNames.includes(m))}
            files={matches.filter((m) => fileNames.includes(m))}
          />
        ),
      },
    ]);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.ctrlKey && (e.key === "l" || e.key === "L")) {
      e.preventDefault();
      setHistory([]);
      return;
    }
    if (e.key === "Tab") {
      e.preventDefault();
      handleTab();
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!cmdLog.length) return;
      const next =
        logIdx.current === null
          ? cmdLog.length - 1
          : Math.max(0, logIdx.current - 1);
      logIdx.current = next;
      setInput(cmdLog[next]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (logIdx.current === null) return;
      const next = logIdx.current + 1;
      if (next >= cmdLog.length) {
        logIdx.current = null;
        setInput("");
      } else {
        logIdx.current = next;
        setInput(cmdLog[next]);
      }
    }
  };

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-[#0c0f0a] shadow-2xl shadow-black/40">
      {/* title bar */}
      <div className="flex items-center gap-2 border-b border-border bg-black/40 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">
          {mode === "interactive" ? "guest" : "anmol"}@portfolio: ~/about — zsh
        </span>
        <div className="ml-auto">
          {mode === "auto" ? (
            <button
              type="button"
              onClick={takeOver}
              className="rounded-md border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs font-medium text-primary transition-colors hover:bg-primary/20"
            >
              login as guest →
            </button>
          ) : (
            <span className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              guest session
            </span>
          )}
        </div>
      </div>

      {/* body */}
      <div
        ref={scrollRef}
        onClick={() => mode === "interactive" && inputRef.current?.focus()}
        className="flex max-h-[70vh] min-h-[440px] flex-col gap-2 overflow-y-auto p-6 font-mono leading-relaxed"
      >
        {history.map((entry, i) =>
          entry.kind === "command" ? (
            <p key={i} className="text-sm">
              <PromptHead user={entry.user} path={entry.path} />
              <span className="text-foreground">{entry.cmd}</span>
            </p>
          ) : (
            <div key={i} className="pb-2">
              {entry.node}
            </div>
          ),
        )}

        {/* live line */}
        {mode === "auto" && !autoDone && (
          <p className="text-sm">
            <PromptHead user="anmol" path="~/about" />
            <span className="text-foreground">{typing}</span>
            <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-lime-400" />
          </p>
        )}

        {mode === "auto" && autoDone && (
          <button
            type="button"
            onClick={takeOver}
            className="mt-2 self-start text-left text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="text-primary">»</span> Want to explore? Click{" "}
            <span className="rounded border border-primary/40 bg-primary/10 px-1.5 py-0.5 text-primary">
              login as guest
            </span>{" "}
            to type your own commands.
          </button>
        )}

        {mode === "interactive" && (
          <form onSubmit={onSubmit} className="flex items-center text-sm">
            <PromptHead user="guest" path={pathOf(cwd)} />
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              spellCheck={false}
              autoComplete="off"
              autoCapitalize="off"
              aria-label="terminal input"
              className="flex-1 bg-transparent font-mono text-foreground caret-lime-400 outline-none"
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default TerminalAbout;

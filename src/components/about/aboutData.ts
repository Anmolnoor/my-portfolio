/** Shared content for the About page design variants. */

export const profile = {
  name: "Anmol Noor",
  role: "Software Engineer",
  avatar: "/anmol.jpg",
  bio: "I'm a software engineer and builder who loves turning ideas into robust products. I enjoy full-stack development, distributed systems, and developer tooling. Outside of code, you'll find me tinkering with infrastructure, reading, or exploring new technologies.",
  location: "Vancouver, BC, Canada",
  focus: "Software · Systems · AI Tools",
  experience: "5+ years",
  currently: "Building, learning, shipping",
};

export const stack: { group: string; items: { name: string; note: string }[] }[] = [
  {
    group: "Languages",
    items: [
      { name: "Python", note: "Daily driver for agents, tooling & scripts." },
      { name: "TypeScript", note: "Typed JavaScript for apps and the web." },
      { name: "JavaScript", note: "Where it all started." },
      { name: "Shell", note: "Glue for automation and dotfiles." },
      { name: "Swift", note: "Native iOS experiments (HoldIt)." },
      { name: "Java", note: "Android and coursework roots." },
      { name: "C++", note: "Data structures & algorithms." },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "React", note: "My default for building UI." },
      { name: "Next.js", note: "Full-stack React apps." },
      { name: "Vue", note: "Powered a few earlier builds." },
      { name: "Astro", note: "Runs this portfolio." },
      { name: "Tailwind CSS", note: "Utility-first styling everywhere." },
      { name: "React Native", note: "Cross-platform mobile." },
      { name: "Redux", note: "Predictable state when it's needed." },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Node.js", note: "JavaScript on the server." },
      { name: "Express", note: "Quick REST APIs." },
      { name: "PostgreSQL", note: "Relational workhorse." },
      { name: "MongoDB", note: "Document store for MERN apps." },
      { name: "Prisma", note: "Type-safe database access." },
      { name: "EJS", note: "Server-rendered templates." },
      { name: "REST APIs", note: "The contracts between services." },
    ],
  },
  {
    group: "Infra / DevOps",
    items: [
      { name: "Linux", note: "Every box I run." },
      { name: "Proxmox", note: "The homelab hypervisor." },
      { name: "Pi-hole", note: "Network-wide DNS & ad-blocking." },
      { name: "Docker", note: "Containers for self-hosted apps." },
      { name: "Prometheus", note: "Metrics collection." },
      { name: "Grafana", note: "Dashboards for everything." },
      { name: "Tailscale", note: "Private mesh VPN for remote access." },
    ],
  },
  {
    group: "Tools / Other",
    items: [
      { name: "Git", note: "Version control, always." },
      { name: "Claude Code", note: "My AI pair in the terminal." },
      { name: "CLI", note: "I live on the command line." },
      { name: "Vim", note: "Fast, keyboard-first editing." },
      { name: "Solana / Web3", note: "On-chain experiments." },
      { name: "WebRTC", note: "Real-time audio and video." },
    ],
  },
];

export const interests = [
  "All about the music vibe, alongside my coding adventures.",
  "Tech articles are my guilty pleasure. I love reading them.",
  "TryHackMe challenges? Count me in for some hacking fun!",
  "Like to get my hands dirty in the kitchen, cooking up tasty stuff.",
  "Running a homelab — Proxmox, Pi-hole, and self-hosting whatever I can.",
  "Tinkering with infrastructure: monitoring dashboards, automation, and clean wiring.",
  "Building coding agents and exploring how AI changes the way we ship software.",
];

export const funFacts = [
  "Totally hooked on VSCode.",
  "A Linux lover, no doubt.",
  "I practically live in the terminal — Claude Code is my daily driver.",
  "Self-host first, subscribe later.",
  "There's a Proxmox box humming away at home 24/7.",
];

export const now = [
  {
    title: "Foundation CLI",
    note: "Building a local-first, shell-native coding agent in public.",
  },
  {
    title: "Beekeeper & agent-policy-gate",
    note: "Open-sourcing governed agent infrastructure.",
  },
  {
    title: "Homelab foundation",
    note: "Proxmox, Pi-hole, monitoring, dashboards, and automation.",
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/Anmolnoor" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anmolnoor/" },
  { label: "X", href: "https://twitter.com/noor_anmol" },
  { label: "Email", href: "mailto:anmolnoor59@gmail.com" },
  { label: "Cal.com", href: "https://cal.com/anmolnoor" },
];

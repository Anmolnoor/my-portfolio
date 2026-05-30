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

export const stack: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "PostgreSQL", "MongoDB", "Prisma"] },
  {
    group: "Infra / DevOps",
    items: ["Linux", "Proxmox", "Prometheus", "Grafana"],
  },
  { group: "Tools / Other", items: ["CLI", "Claude Code", "Solana", "WebRTC"] },
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

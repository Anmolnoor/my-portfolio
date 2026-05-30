export interface Project {
  title: string;
  description: string;
  link: string;
  /** Short tagline shown under the title (e.g. "E-commerce SaaS Platform"). */
  tagline?: string;
  /** Lucide/Tabler icon name slug — resolved at render time. */
  iconKey?:
    | "notes"
    | "shoppingCart"
    | "diamond"
    | "messages"
    | "wallet"
    | "photo"
    | "trophy"
    | "broadcast"
    | "calendar"
    | "users"
    | "route"
    | "mountain"
    | "ticket"
    | "checklist"
    | "leaf"
    | "lock"
    | "list"
    | "book"
    | "mail"
    | "cloud"
    | "device"
    | "music"
    | "dice"
    | "dog"
    | "terminal"
    | "markdown"
    | "code"
    | "server"
    | "robot"
    | "shield"
    | "gear";
  techTags?: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Foundation CLI",
    tagline: "Coding agent, built in public",
    description:
      "A local-first, shell-native coding agent built in the open, exploring how agents should run real engineering workflows from the terminal.",
    link: "https://github.com/Anmolnoor/fcli",
    iconKey: "terminal",
    techTags: ["Python", "CLI", "Agents"],
    featured: true,
  },
  {
    title: "Beekeeper",
    tagline: "Governed multi-agent runtime",
    description:
      "A governed agent runtime with tool-level policy enforcement — coordinating agents with guardrails, review, and accountability for safer workflows.",
    link: "https://github.com/Anmolnoor/beekeeper",
    iconKey: "robot",
    techTags: ["Python", "Agents", "Policy"],
    featured: true,
  },
  {
    title: "agent-policy-gate",
    tagline: "Guardrails for agent tool calls",
    description:
      "Small policy, review, and audit primitives for gating agent tool calls before they run. Carved out of Beekeeper.",
    link: "https://github.com/Anmolnoor/agent-policy-gate",
    iconKey: "shield",
    techTags: ["Python", "Policy", "Audit"],
    featured: true,
  },
  {
    title: "scripts",
    tagline: "Dev environment automation",
    description:
      "Personal shell scripts and setup shortcuts for a consistent, reproducible dev environment that does the boring parts for you.",
    link: "https://github.com/Anmolnoor/scripts",
    iconKey: "code",
    techTags: ["Shell", "Automation", "CLI"],
  },
  {
    title: "claude-dotfiles",
    tagline: "Portable Claude Code setup",
    description:
      "A portable Claude Code configuration — clone on a new machine, run ./install.sh, and rebuild an agent-ready environment from scratch.",
    link: "https://github.com/Anmolnoor/claude-dotfiles",
    iconKey: "gear",
    techTags: ["Shell", "Claude Code", "Dotfiles"],
  },
  {
    title: "Amend Notes",
    tagline: "Tag-driven notepad",
    description:
      "A note taking application with a focus on Simplicity of notepad along with the power of tags.",
    link: "https://amendnotes.com/",
    iconKey: "notes",
    techTags: ["React", "TypeScript", "IndexedDB"],
  },
  {
    title: "Vendro",
    tagline: "E-commerce SaaS Platform",
    description:
      "Multi-tenant e-commerce platform with product management, payments, analytics, and role-based access.",
    link: "/vendro",
    iconKey: "shoppingCart",
    techTags: ["Next.js", "Tailwind CSS", "PostgreSQL", "Stripe"],
  },
  {
    title: "NFT Dropper",
    tagline: "Solana NFT mint",
    description:
      "A Solana Chain NFT dropper with candy-machine integration and a minimal mint UI.",
    link: "https://nft-drop-gold.vercel.app/",
    iconKey: "diamond",
    techTags: ["Solana", "React", "Web3"],
  },
  {
    title: "D-twitter",
    tagline: "Decentralized social app",
    description: "A decentralized Twitter platform.",
    link: "https://d-itter.netlify.app/#/",
    iconKey: "messages",
    techTags: ["Solidity", "Vue", "Web3"],
  },
  {
    title: "wallet-dapp",
    tagline: "Solana wallet playground",
    description:
      "A Solana dApp to create a new wallet or recover an old one.",
    link: "https://6205df9cef9c0122a08aba3a--sleepy-galileo-ce19c5.netlify.app/",
    iconKey: "wallet",
    techTags: ["Solana", "TypeScript", "Web3"],
  },
  {
    title: "Image-Portal",
    tagline: "Solana image portal",
    description: "A Solana IMG Portal Project developed at buildspace.",
    link: "https://upbeat-bartik-f06847.netlify.app/",
    iconKey: "photo",
    techTags: ["Solana", "JavaScript", "Web3"],
  },
  {
    title: "solana-riptide-leader-board",
    tagline: "Hackathon leaderboard",
    description: "Leader board for the Solana riptide Hackathon.",
    link: "https://solana-riptide-leader-board.vercel.app/",
    iconKey: "trophy",
    techTags: ["React", "TypeScript", "Solana"],
  },
  {
    title: "Flashback",
    tagline: "Realtime social app",
    description:
      "RealTime Social Media WebAPP built with MERN stack, featuring post management.",
    link: "https://github.com/Anmolnoor/flashback",
    iconKey: "broadcast",
    techTags: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Next Events",
    tagline: "Next.js events app",
    description: "A Next.js application with all the benefits of Next.js.",
    link: "https://next-event-livid.vercel.app/",
    iconKey: "calendar",
    techTags: ["Next.js", "React"],
  },
  {
    title: "Meetup",
    tagline: "React meetup app",
    description: "A React application with all the benefits of React.js.",
    link: "https://meetup-smoky.vercel.app/",
    iconKey: "users",
    techTags: ["React", "JavaScript"],
  },
  {
    title: "Next Routing",
    tagline: "Next.js routing demo",
    description: "A Next.js application for testing routing.",
    link: "https://next-routing-ebon.vercel.app/",
    iconKey: "route",
    techTags: ["Next.js", "React"],
  },
  {
    title: "natours",
    tagline: "Secure tours backend",
    description: "A full backend for a secure tours website.",
    link: "https://github.com/Anmolnoor/natours",
    iconKey: "mountain",
    techTags: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Reservation System",
    tagline: "Food reservation app",
    description:
      "A food reservation system built with React and TypeScript along with Redux Toolkit.",
    link: "https://reservation-system-ten.vercel.app/",
    iconKey: "ticket",
    techTags: ["React", "TypeScript", "Redux"],
  },
  {
    title: "College Task Management System",
    tagline: "Task management system",
    description:
      "A system for managing college tasks developed using EJS, Node.js, and Express.",
    link: "https://github.com/Anmolnoor/bgiet",
    iconKey: "checklist",
    techTags: ["Node.js", "Express", "EJS"],
  },
  {
    title: "Node Farm",
    tagline: "Pure Node.js site",
    description: "A website built with just Node.js.",
    link: "https://github.com/Anmolnoor/nodefarm",
    iconKey: "leaf",
    techTags: ["Node.js"],
  },
  {
    title: "Security",
    tagline: "Auth & encryption demo",
    description:
      "A simple login and registration app implementing various encryptions like BcryptJS, OAuth, Hashing, etc.",
    link: "https://github.com/Anmolnoor/Security",
    iconKey: "lock",
    techTags: ["Node.js", "Express", "Passport.js"],
  },
  {
    title: "Todo List",
    tagline: "Todo with MongoDB",
    description:
      "A todo list application with MongoDB database for storing states.",
    link: "https://github.com/Anmolnoor/todolist",
    iconKey: "list",
    techTags: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Daily Journal",
    tagline: "Blog with database",
    description:
      "A blog application with a MongoDB database on the Express server.",
    link: "https://github.com/Anmolnoor/Blog-with-Database",
    iconKey: "book",
    techTags: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "News letter",
    tagline: "Mailchimp signup",
    description: "A newsletter application integrated with Mailchimp.",
    link: "https://github.com/Anmolnoor/Newsletter-Singup",
    iconKey: "mail",
    techTags: ["Node.js", "Express", "Mailchimp"],
  },
  {
    title: "Weather Project",
    tagline: "Weather via API",
    description:
      "An app featuring weather data using an API from OpenWeatherMap.",
    link: "https://github.com/Anmolnoor/weather-project",
    iconKey: "cloud",
    techTags: ["Node.js", "Express", "API"],
  },
  {
    title: "Simon Game",
    tagline: "Memory game",
    description: "An online version of the classic Simon game.",
    link: "https://anmolnoor.github.io/Simon-Game/",
    iconKey: "device",
    techTags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Drum Kit",
    tagline: "Interactive drum kit",
    description: "An interactive drum kit implemented on a website.",
    link: "https://anmolnoor.github.io/Drum_Kit/",
    iconKey: "music",
    techTags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Dice Roll",
    tagline: "Dice roller",
    description: "A dice roller application.",
    link: "https://anmolnoor.github.io/Dice_Roller/",
    iconKey: "dice",
    techTags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Tindog",
    tagline: "Bootstrap landing page",
    description: "A playful take on a 'tinder for dogs' application.",
    link: "https://tin-dog-roan.vercel.app/",
    iconKey: "dog",
    techTags: ["HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Vim Cheatsheet",
    tagline: "Vim reference",
    description: "A reference guide for Vim commands.",
    link: "https://github.com/Anmolnoor/vimCS/blob/main/README.md",
    iconKey: "terminal",
    techTags: ["Vim", "Reference"],
  },
  {
    title: "Markdown Syntax Cheat Sheet",
    tagline: "Markdown reference",
    description: "A cheat sheet for Markdown syntax.",
    link: "https://github.com/Anmolnoor/markdownSCS/blob/main/README.md",
    iconKey: "markdown",
    techTags: ["Markdown", "Reference"],
  },
];

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
    | "markdown";
  techTags?: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Amend Notes",
    tagline: "Tag-driven notepad",
    description:
      "A note taking application with a focus on Simplicity of notepad along with the power of tags.",
    link: "https://amendnotes.com/",
    iconKey: "notes",
    techTags: ["React", "TypeScript", "IndexedDB"],
    featured: true,
  },
  {
    title: "Vendro",
    tagline: "E-commerce SaaS Platform",
    description:
      "Multi-tenant e-commerce platform with product management, payments, analytics, and role-based access.",
    link: "/vendro",
    iconKey: "shoppingCart",
    techTags: ["Next.js", "Tailwind CSS", "PostgreSQL", "Stripe"],
    featured: true,
  },
  {
    title: "NFT Dropper",
    tagline: "Solana NFT mint",
    description:
      "A Solana Chain NFT dropper with candy-machine integration and a minimal mint UI.",
    link: "https://nft-drop-gold.vercel.app/",
    iconKey: "diamond",
    techTags: ["Solana", "React", "Web3"],
    featured: true,
  },
  {
    title: "D-twitter",
    description: "A decentralized Twitter platform.",
    link: "https://d-itter.netlify.app/#/",
    iconKey: "messages",
    techTags: ["Solidity", "React"],
  },
  {
    title: "wallet-dapp",
    description: "A Solana wallet playground.",
    link: "https://6205df9cef9c0122a08aba3a--sleepy-galileo-ce19c5.netlify.app/",
    iconKey: "wallet",
    techTags: ["Solana", "React"],
  },
  {
    title: "Image-Portal",
    description: "A Solana IMG Portal Project developed at buildspace.",
    link: "https://upbeat-bartik-f06847.netlify.app/",
    iconKey: "photo",
  },
  {
    title: "solana-riptide-leader-board",
    description: "Leader board for the Solana riptide Hackathon.",
    link: "https://solana-riptide-leader-board.vercel.app/",
    iconKey: "trophy",
  },
  {
    title: "Flashback",
    description:
      "RealTime Social Media WebAPP built with MERN stack, featuring post management.",
    link: "https://github.com/Anmolnoor/flashback",
    iconKey: "broadcast",
    techTags: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Next Events",
    description: "A Next.js application with all the benefits of Next.js.",
    link: "https://next-event-livid.vercel.app/",
    iconKey: "calendar",
  },
  {
    title: "Meetup",
    description: "A React application with all the benefits of React.js.",
    link: "https://meetup-smoky.vercel.app/",
    iconKey: "users",
  },
  {
    title: "Next Routing",
    description: "A Next.js application for testing routing.",
    link: "https://next-routing-ebon.vercel.app/",
    iconKey: "route",
  },
  {
    title: "natours",
    description: "A full backend for a secure tours website.",
    link: "https://github.com/Anmolnoor/natours",
    iconKey: "mountain",
  },
  {
    title: "Reservation System",
    description: "A reservation system implemented in TypeScript.",
    link: "https://reservation-system-ten.vercel.app/",
    iconKey: "ticket",
  },
  {
    title: "College Task Management System",
    description:
      "A system for managing college tasks developed using EJS, Node.js, and Express.",
    link: "https://github.com/Anmolnoor/bgiet",
    iconKey: "checklist",
  },
  {
    title: "Node Farm",
    description: "A website built with just Node.js.",
    link: "https://github.com/Anmolnoor/nodefarm",
    iconKey: "leaf",
  },
  {
    title: "Security",
    description:
      "A simple login and registration app implementing various encryptions like BcryptJS, OAuth, Hashing, etc.",
    link: "https://github.com/Anmolnoor/Security",
    iconKey: "lock",
  },
  {
    title: "Todo List",
    description:
      "A todo list application with MongoDB database for storing states.",
    link: "https://github.com/Anmolnoor/todolist",
    iconKey: "list",
  },
  {
    title: "Daily Journal",
    description:
      "A blog application with a MongoDB database on the Express server.",
    link: "https://github.com/Anmolnoor/Blog-with-Database",
    iconKey: "book",
  },
  {
    title: "News letter",
    description: "A newsletter application integrated with Mailchimp.",
    link: "https://github.com/Anmolnoor/Newsletter-Singup",
    iconKey: "mail",
  },
  {
    title: "Weather Project",
    description:
      "An app featuring weather data using an API from OpenWeatherMap.",
    link: "https://github.com/Anmolnoor/weather-project",
    iconKey: "cloud",
  },
  {
    title: "Simon Game",
    description: "An online version of the classic Simon game.",
    link: "https://anmolnoor.github.io/Simon-Game/",
    iconKey: "device",
  },
  {
    title: "Drum Kit",
    description: "An interactive drum kit implemented on a website.",
    link: "https://anmolnoor.github.io/Drum_Kit/",
    iconKey: "music",
  },
  {
    title: "Dice Roll",
    description: "A dice roller application.",
    link: "https://anmolnoor.github.io/Dice_Roller/",
    iconKey: "dice",
  },
  {
    title: "Tindog",
    description: "A playful take on a 'tinder for dogs' application.",
    link: "https://tin-dog-roan.vercel.app/",
    iconKey: "dog",
  },
  {
    title: "Vim Cheatsheet",
    description: "A reference guide for Vim commands.",
    link: "https://github.com/Anmolnoor/vimCS/blob/main/README.md",
    iconKey: "terminal",
  },
  {
    title: "Markdown Syntax Cheat Sheet",
    description: "A cheat sheet for Markdown syntax.",
    link: "https://github.com/Anmolnoor/markdownSCS/blob/main/README.md",
    iconKey: "markdown",
  },
];

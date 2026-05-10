import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/anmolnoor",
    Icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anmolnoor/",
    Icon: Linkedin,
    external: true,
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/noor_anmol",
    Icon: Twitter,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:anmolnoor59@gmail.com",
    Icon: Mail,
    external: false,
  },
];

const SiteFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-12 border-t">
      <div className="container mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8">
        <p className="font-mono text-sm text-muted-foreground">
          © {year} Anmol Noor. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {socials.map(({ label, href, Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;

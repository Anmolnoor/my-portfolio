import {
  CalendarDots as CalendarClock,
  PaperPlaneTilt as Send,
  GithubLogo,
  LinkedinLogo,
  XLogo,
  EnvelopeSimple,
  ArrowUpRight,
  type Icon,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import IconTile from "@/components/home/IconTile";

interface Channel {
  label: string;
  handle: string;
  href: string;
  icon: Icon;
}

const channels: Channel[] = [
  {
    label: "GitHub",
    handle: "@Anmolnoor",
    href: "https://github.com/Anmolnoor",
    icon: GithubLogo,
  },
  {
    label: "LinkedIn",
    handle: "in/anmolnoor",
    href: "https://www.linkedin.com/in/anmolnoor/",
    icon: LinkedinLogo,
  },
  {
    label: "X (Twitter)",
    handle: "@noor_anmol",
    href: "https://twitter.com/noor_anmol",
    icon: XLogo,
  },
  {
    label: "Email",
    handle: "Drop me a line",
    href: "mailto:anmolnoor59@gmail.com",
    icon: EnvelopeSimple,
  },
  {
    label: "Cal.com",
    handle: "Book a 30-min call",
    href: "https://cal.com/anmolnoor",
    icon: CalendarClock,
  },
];

const Contact = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* hero */}
      <Card className="p-8">
        <div className="flex flex-col gap-5">
          <span className="inline-flex w-fit items-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            available for work
          </span>

          <div className="space-y-2">
            <h2 className="font-mono text-3xl font-bold tracking-tight">
              Let's talk
            </h2>
            <p className="max-w-xl text-muted-foreground">
              Got a project, a role, or an idea worth building? The fastest way
              to reach me is email or by booking a call — I read everything and
              reply quickly.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <a
                href="https://cal.com/anmolnoor"
                target="_blank"
                rel="noreferrer"
              >
                <CalendarClock />
                Book a call
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="mailto:anmolnoor59@gmail.com">
                <Send />
                Email me
              </a>
            </Button>
          </div>
        </div>
      </Card>

      {/* channels */}
      <section>
        <p className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-primary">
          Find me online
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map(({ label, handle, href, icon: Icon }) => {
            const external = href.startsWith("http");
            return (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="group text-inherit no-underline"
              >
                <Card className="flex items-center gap-3 p-4 transition-colors group-hover:border-primary/40 group-hover:bg-muted/40">
                  <IconTile>
                    <Icon className="h-5 w-5" />
                  </IconTile>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono font-bold">{label}</p>
                    <p className="truncate text-sm text-muted-foreground">
                      {handle}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </Card>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Contact;

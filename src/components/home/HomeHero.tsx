import { CalendarClock, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useMediaQuery } from "@/hooks/use-media-query";
import TerminalVisual from "./TerminalVisual";

const HomeHero = () => {
  const isDesktop = useMediaQuery("(min-width: 900px)");

  return (
    <section className="py-6">
      <div className="mb-4 flex justify-end">
        <Badge
          variant="outline"
          className="gap-2 border-primary/30 bg-primary/10 px-3 py-1 font-mono text-sm font-medium text-primary"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          available
        </Badge>
      </div>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-6">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
              Software Engineer
            </span>
          </div>
          <h1 className="font-mono text-3xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-[clamp(2.25rem,4vw,3.25rem)]">
            In the world of 0s and 1s,
            <br />
            I'm the one who{" "}
            <span className="whitespace-nowrap text-primary">
              bridges the gap
            </span>
            .
          </h1>
          <p className="max-w-xl text-base text-muted-foreground">
            I build full-stack applications, real-time systems, and developer
            tools. I care about clean architecture, performance, and great
            developer experience — and I love to experiment.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild>
              <Link to="https://cal.com/anmolnoor" target="_blank">
                <CalendarClock />
                Book a call
              </Link>
            </Button>
            <Button asChild variant="outline">
              <a href="mailto:anmolnoor59@gmail.com">
                <Send />
                E-Mail
              </a>
            </Button>
          </div>
        </div>
        {isDesktop && (
          <div className="flex items-center justify-center">
            <TerminalVisual />
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeHero;

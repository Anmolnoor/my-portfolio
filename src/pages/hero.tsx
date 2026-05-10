import { CalendarClock, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import TitleWithDot from "@/components/elements/titleWithDot";
import TitleWithSubTitle from "@/components/elements/titleWithSubTitle";

const Hero = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <TitleWithDot title="Software Engineer" />
        <Badge variant="success" className="gap-2 px-3 py-1">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          available
        </Badge>
      </div>
      <div className="my-6 flex flex-col items-center gap-4 py-6">
        <img
          src="/anmol.jpg"
          alt="Anmol Noor"
          className="h-48 w-48 rounded-full object-cover"
        />
        <TitleWithSubTitle
          title="Anmol Noor"
          order={1}
          subTitle="In the world of 0s and 1s, I'm the one who bridges the gap."
        />
        <div className="grid w-full max-w-sm grid-cols-2 gap-3">
          <Button asChild>
            <Link to="https://cal.com/anmolnoor" target="_blank">
              Book
              <CalendarClock />
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
    </Card>
  );
};

export default Hero;

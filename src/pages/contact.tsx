import { CalendarClock, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <Card className="p-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
        <p className="text-muted-foreground">
          The fastest way to reach me is email or by booking a call.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link to="https://cal.com/anmolnoor" target="_blank">
              <CalendarClock />
              Book a call
            </Link>
          </Button>
          <Button asChild variant="outline">
            <a href="mailto:anmolnoor59@gmail.com">
              <Send />
              anmolnoor59@gmail.com
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Contact;

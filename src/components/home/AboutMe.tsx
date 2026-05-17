import type { ReactNode } from "react";
import {
  Briefcase,
  MapPin,
  Target,
  Lightning as Zap,
} from "@phosphor-icons/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import SectionHeader from "./SectionHeader";

const MetaRow = ({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-start gap-3">
    <span className="mt-0.5 shrink-0 text-muted-foreground">{icon}</span>
    <div>
      <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  </div>
);

const AboutMe = () => {
  return (
    <section>
      <SectionHeader title="About Me" />
      <Card className="p-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex items-start gap-4">
            <Avatar className="h-[72px] w-[72px]">
              <AvatarImage src="/anmol.jpg" alt="Anmol Noor" />
              <AvatarFallback className="bg-primary/10 text-primary">
                AN
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1 space-y-1">
              <p className="font-mono text-lg font-bold">Anmol Noor</p>
              <p className="text-sm text-muted-foreground">
                I'm a software engineer and builder who loves turning ideas into
                robust products. I enjoy full-stack development, distributed
                systems, and developer tooling. Outside of code, you'll find me
                tinkering with infrastructure, reading, or exploring new
                technologies.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <MetaRow
              icon={<MapPin className="h-4 w-4" />}
              label="Location"
              value="Vancouver, BC, Canada"
            />
            <MetaRow
              icon={<Target className="h-4 w-4" />}
              label="Focus"
              value="Software · Systems · AI Tools"
            />
            <MetaRow
              icon={<Briefcase className="h-4 w-4" />}
              label="Experience"
              value="5+ years"
            />
            <MetaRow
              icon={<Zap className="h-4 w-4" />}
              label="Currently"
              value="Building, learning, shipping"
            />
          </div>
        </div>
      </Card>
    </section>
  );
};

export default AboutMe;

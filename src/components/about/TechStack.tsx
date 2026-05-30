import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import SectionHeader from "@/components/home/SectionHeader";

const stack: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "PostgreSQL", "MongoDB", "Prisma"] },
  {
    group: "Infra / DevOps",
    items: ["Linux", "Proxmox", "Prometheus", "Grafana"],
  },
  { group: "Tools / Other", items: ["CLI", "Claude Code", "Solana", "WebRTC"] },
];

const TechStack = () => {
  return (
    <section>
      <SectionHeader title="Tech Stack" />
      <Card className="p-6">
        <div className="flex flex-col gap-5">
          {stack.map(({ group, items }) => (
            <div
              key={group}
              className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4"
            >
              <p className="w-32 shrink-0 font-mono text-xs uppercase tracking-wider text-lime-400">
                {group}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <Badge
                    key={item}
                    variant="neon"
                    className="rounded-sm font-mono font-medium"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default TechStack;

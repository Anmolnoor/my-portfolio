import { Card } from "@/components/ui/card";
import SectionHeader from "@/components/home/SectionHeader";

const interests = [
  "All about the music vibe, alongside my coding adventures.",
  "Tech articles are my guilty pleasure. I love reading them.",
  "TryHackMe challenges? Count me in for some hacking fun!",
  "Like to get my hands dirty in the kitchen, cooking up tasty stuff.",
  "Running a homelab — Proxmox, Pi-hole, and self-hosting whatever I can.",
  "Tinkering with infrastructure: monitoring dashboards, automation, and clean wiring.",
  "Building coding agents and exploring how AI changes the way we ship software.",
];

const funFacts = [
  "Totally hooked on VSCode.",
  "A Linux lover, no doubt.",
  "I practically live in the terminal — Claude Code is my daily driver.",
  "Self-host first, subscribe later.",
  "There's a Proxmox box humming away at home 24/7.",
];

const CardGrid = ({ items }: { items: string[] }) => (
  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
    {items.map((item) => (
      <Card key={item} className="p-4">
        <p className="text-sm text-muted-foreground">{item}</p>
      </Card>
    ))}
  </div>
);

const BeyondKeyboard = () => {
  return (
    <>
      <section>
        <SectionHeader title="Passions Beyond the Keyboard" />
        <CardGrid items={interests} />
      </section>
      <section>
        <SectionHeader title="Unusual Intel" />
        <CardGrid items={funFacts} />
      </section>
    </>
  );
};

export default BeyondKeyboard;

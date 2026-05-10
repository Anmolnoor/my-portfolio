import NewCard from "@/components/elements/newCard";
import { Card } from "@/components/ui/card";

const interests = [
  "All about the music vibe, alongside my coding adventures.",
  "Tech articles are my guilty pleasure. I love reading them.",
  "TryHackME challenges? Count me in for some hacking fun!",
  "Like to get my hands dirty in the kitchen, cooking up tasty stuff.",
];

const funFacts = ["Totally hooked on VSCode.", "A Linux lover, no doubt."];

export const Interests = () => {
  return (
    <NewCard title="Passions Beyond the Keyboard">
      <div className="flex flex-col gap-3">
        {interests.map((interest) => (
          <Card key={interest} className="p-4">
            <p className="text-sm text-muted-foreground">{interest}</p>
          </Card>
        ))}
      </div>
    </NewCard>
  );
};

export const FunFacts = () => {
  return (
    <NewCard title="Unusual Intel">
      <div className="flex flex-col gap-3">
        {funFacts.map((fact) => (
          <Card key={fact} className="p-4">
            <p className="text-sm text-muted-foreground">{fact}</p>
          </Card>
        ))}
      </div>
    </NewCard>
  );
};

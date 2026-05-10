import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import TitleWithDot from "@/components/elements/titleWithDot";

const handles = [
  {
    title: "Twitter",
    href: "https://twitter.com/noor_anmol",
    Icon: Twitter,
  },
  {
    title: "GitHub",
    href: "https://github.com/anmolnoor",
    Icon: Github,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/anmolnoor/",
    Icon: Linkedin,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/_anmol_noor/",
    Icon: Instagram,
  },
];

const FollowMe = () => {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <TitleWithDot title="Follow Me" />
        <div className="flex items-center gap-2">
          {handles.map(({ title, href, Icon }) => (
            <Button
              key={title}
              asChild
              variant="outline"
              size="icon"
              title={`${title} handle`}
            >
              <a href={href} target="_blank" rel="noreferrer">
                <Icon className="h-4 w-4" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default FollowMe;

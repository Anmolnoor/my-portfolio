import NewCard from "@/components/elements/newCard";
import { Card } from "@/components/ui/card";

const expertise = [
  {
    title: "Frontend",
    subTitles: ["React", "Next.js", "React Native"],
  },
  {
    title: "Backend",
    subTitles: ["Node.js", "Express.js"],
  },
  {
    title: "Web3 Development",
    subTitles: ["Solana"],
  },
  {
    title: "Real-Time Communication",
    subTitles: ["Socket.io", "WebRTC", "MediaSoup"],
  },
  {
    title: "Database",
    subTitles: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Prisma"],
  },
  {
    title: "UI/UX Design",
    subTitles: ["Figma", "Adobe XD", "Adobe Photoshop"],
  },
  {
    title: "CSS Frameworks",
    subTitles: ["TailwindCSS", "Bootstrap", "Material UI", "Mantine"],
  },
  {
    title: "Version Control",
    subTitles: ["Git", "Github"],
  },
  {
    title: "Linux Enthusiast",
    subTitles: [
      "Ubuntu",
      "Debian",
      "Arch Linux",
      "Fedora",
      "CentOS",
      "Pop!_OS",
      "Kali Linux",
    ],
  },
];

interface ExpertiseProps {
  items: number;
}

const Expertise = ({ items }: ExpertiseProps) => {
  return (
    <NewCard title="Expertise" viewAll>
      <p className="my-6 text-center text-sm text-muted-foreground">
        I specialize in a range of technologies and development areas
      </p>
      <div className="flex flex-col gap-6 p-4">
        {expertise.slice(0, items).map((item) => (
          <Card key={item.title} className="p-4">
            <div className="border-b pb-3">
              <h3 className="text-2xl font-semibold text-muted-foreground">
                {item.title}
              </h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 p-3">
              {item.subTitles.map((subTitle) => (
                <Card
                  key={subTitle}
                  className="px-3 py-2 text-sm text-muted-foreground"
                >
                  {subTitle}
                </Card>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </NewCard>
  );
};

export default Expertise;

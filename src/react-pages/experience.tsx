import { Link as LinkIcon } from "lucide-react";
import NewCard from "@/components/elements/newCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const internshipsAndExperience = [
  {
    position: "Founder",
    duration: "Present",
    company: "Dynamic Nexus Solutions",
    link: "https://www.dynamicnexussolutions.com/",
  },
  {
    position: "Frontend Engineer",
    duration: "2 Months (Full time)",
    company: "Huddle01",
    link: "https://huddle01.com/",
  },
  {
    position: "Frontend Engineer",
    duration: "3 Months (Part time)",
    company: "Huddle01",
    link: "https://huddle01.com/",
  },
  {
    position: "MERN Stack Training",
    duration: "6 Months",
    company: "Techlive Solutions, Mohali",
    link: "#",
  },
  {
    position: "React Native Internship",
    duration: "1 Month",
    company: "Fortec Solutions, Mohali",
    link: "#",
  },
  {
    position: "MERN Stack Internship",
    duration: "6 Months",
    company: "SWPL, Jaipur",
    link: "#",
  },
  {
    position: "Android Development Training",
    duration: "2 Months",
    company: "Solitaire Infosys, Mohali",
    link: "#",
  },
  {
    position: "Web Developer Internship",
    duration: "1 Month",
    company: "Autumn Leaves Solutions",
    link: "#",
  },
];

const Experience = () => {
  return (
    <NewCard title="Experience" viewAll>
      <div className="flex flex-col gap-4">
        {internshipsAndExperience.map((item, idx) => (
          <Card key={`${item.company}-${idx}`} className="p-6">
            <div className="flex items-center justify-between gap-4">
              <h4 className="text-xl font-semibold">{item.company}</h4>
              {item.link !== "#" && (
                <Button asChild variant="outline" size="icon">
                  <a href={item.link} target="_blank" rel="noreferrer" title={item.link}>
                    <LinkIcon className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              - {item.position} - {item.duration}
            </p>
          </Card>
        ))}
      </div>
    </NewCard>
  );
};

export default Experience;

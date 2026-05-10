import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Resume = () => {
  return (
    <Card className="p-8">
      <div className="flex flex-col gap-4">
        <h2 className="font-mono text-3xl font-bold tracking-tight">Resume</h2>
        <p className="text-muted-foreground">
          A printable resume is on the way. In the meantime, my project list
          and writing reflect my current focus.
        </p>
        <Button asChild variant="outline" className="self-start">
          <a href="/resume.pdf" target="_blank">
            <FileDown />
            Download PDF
          </a>
        </Button>
      </div>
    </Card>
  );
};

export default Resume;

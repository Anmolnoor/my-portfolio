import { useState } from "react";
import { Link as LinkIcon } from "lucide-react";
import NewCard from "@/components/elements/newCard";
import TitleWithDot from "@/components/elements/titleWithDot";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import SignUpFormReact from "@/components/elements/waitlist";

const Vendro = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <NewCard title="Vendro" viewAll>
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Sign up for waitlist</DialogTitle>
          </DialogHeader>
          <SignUpFormReact />
        </DialogContent>
      </Dialog>

      <div className="flex flex-col gap-4">
        <Card className="p-6 shadow-sm">
          <p className="pb-3 text-sm">
            Our retail store platform was developed to address the challenges
            that many small businesses face when it comes to setting up an
            online store. Traditional ecommerce platforms can be expensive and
            require technical knowledge, which can be a significant barrier to
            entry for small business owners with limited budgets. Our platform
            offers an affordable, user-friendly, and feature-rich alternative
            to these platforms, designed to help small businesses get online
            quickly and easily.
          </p>
          <p className="py-3 text-sm">
            To stay up-to-date with the latest news and receive early access to
            our platform, sign up for our waitlist today. We'll keep you in the
            loop and let you know as soon as our platform is live.
          </p>
          <div className="pt-3">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setShowModal(true)}
            >
              Sign up for waitlist
            </Button>
          </div>
        </Card>

        <Card className="p-6 shadow-sm">
          <div className="flex items-center justify-between border-b pb-3">
            <TitleWithDot title="Store front - demo" />
            <Button asChild variant="outline" size="icon" title="Demo store front">
              <a href="https://vendro-store.vercel.app/" target="_blank" rel="noreferrer">
                <LinkIcon className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <img
              src="/vendro-demo-store-front.png"
              alt="Vendro demo store front"
              className="w-full rounded-md object-cover"
            />
            <p className="text-sm text-muted-foreground">
              The retail store platform offers a customizable online storefront
              that allows businesses to create a unique look and feel for their
              brand. With a variety of themes to choose from, businesses can
              easily create a professional-looking storefront that reflects
              their brand identity.
            </p>
            <Button asChild variant="outline">
              <a href="https://vendro-store.vercel.app/" target="_blank" rel="noreferrer">
                visit demo store
              </a>
            </Button>
          </div>
        </Card>

        <Card className="p-6 shadow-sm">
          <div className="border-b pb-3">
            <TitleWithDot title="Admin Panel - Demo" />
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <img
              src="/vendro-demo-admin.png"
              alt="Vendro admin panel demo"
              className="w-full rounded-md object-cover"
            />
            <p className="text-sm text-muted-foreground">
              The admin panel for the retail store platform provides a
              user-friendly interface for managing all aspects of the online
              store. This includes managing products, orders, and customers, as
              well as customizing the storefront and accessing analytics and
              reporting tools.
            </p>
            <Button asChild variant="outline">
              <a href="https://cal.com/anmolnoor" target="_blank" rel="noreferrer">
                Book Admin Panel Demo
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </NewCard>
  );
};

export default Vendro;

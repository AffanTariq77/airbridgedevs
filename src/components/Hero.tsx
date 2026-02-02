import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import ContactForm from "./ContactForm";

const Hero = () => {
  return (
    <Dialog>
    <section className="pt-32 pb-10 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Build, Scale, and Transform With AI-Centric Software Development
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We help start-ups and enterprises turn product ideas into powerful,
            scalable digital solutions, from MVP to full-fledged AI-driven platforms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <DialogTrigger asChild>
            <Button
              size="lg"
              className="bg-primary hover:bg-sky-400 text-primary-foreground gap-2 hover:shadow-sky-blue"
            >
              Book a Strategy Call
              <ArrowRight className="h-5 w-5" />
            </Button>
            </DialogTrigger>
          </div>

          <div className="pt-8 w-full">
            <p className="text-sm text-muted-foreground mb-6">
             Trusted by 50+ Industries with a 90% Client Retention.
            </p>
          </div>
        </div>
      </div>
      <DialogContent className="max-w-xl p-0 bg-transparent border-0 shadow-none">
        <div className="rounded-2xl bg-white shadow-xl border border-border p-0 overflow-hidden">
          <div className="p-0">
            <ContactForm onlyForm />
          </div>
        </div>
      </DialogContent>
    </section>
    </Dialog>

  );
};

export default Hero;

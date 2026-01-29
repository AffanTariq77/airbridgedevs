import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ClientMarquee from "./ClientMarquee";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Build, Scale, and Transform With{" "}
            <span className="text-primary">AI-Centric</span> Software
            Development
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We help start-ups and enterprises turn product ideas into powerful,
            scalable digital solutions — from MVP to full-fledged AI-driven
            platforms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-sky-400 text-primary-foreground gap-2 hover:shadow-sky-blue"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Book a Strategy Call
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="pt-8 w-full">
            <p className="text-sm text-muted-foreground mb-6">
              Trusted by innovative companies
            </p>
            <div className="w-full">
              <ClientMarquee />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

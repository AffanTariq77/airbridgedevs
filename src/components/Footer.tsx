import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="text-secondary-foreground border-t-[0.5px] border-[#b3c7e6]/50"
      style={{ background: "#F3F9FF" }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-14 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-7 md:space-y-8">
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: "#192841" }}
          >
            Let's Build Something Extraordinary
          </h2>
          <p className="text-xl text-[#23395d] max-w-2xl mx-auto">
            Book a consultation and see how we can accelerate your product
            journey with AI-powered engineering.
          </p>
          <Button
            size="lg"
            className="bg-[#23395d] hover:bg-sky-400 text-white gap-2 hover:shadow-[0_4px_24px_0_rgba(25,40,65,0.15)]"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Book Consultation
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="border-t border-[#b3c7e6]">
        <div className="container mx-auto px-4 sm:px-6 py-6 md:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#23395d] opacity-50">
              © 2026 AirBridge Devs. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#23395d] opacity-40 hover:text-sky-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-sm text-[#23395d] opacity-40 hover:text-sky-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

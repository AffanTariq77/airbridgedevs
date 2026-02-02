import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="text-secondary-foreground border-t-[0.5px] border-[#b3c7e6]/50"
      style={{ background: "#98cfecff" }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-10">
        <div className="flex flex-col items-center space-y-4 md:space-y-5">
          <div className="flex items-center justify-center mb-4">
            <img
              src="/src/assets/airbridge-logo.png"
              alt="AIRBRIDGE DEVS Logo"
              className="h-10 md:h-12 w-auto object-contain"
              style={{ maxWidth: '181px' }}
            />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: "#192841" }}
          >
            Let's Build Something Extraordinary
          </h2>
          <p className="text-xl text-[#23395d] max-w-2xl mx-auto text-center">
            Book a consultation and see how we can accelerate your product journey with AI-powered engineering.
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
        <div className="container mx-auto px-4 sm:px-6 py-3 md:py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#23395d] opacity-50">
              © 2026 AirBridge Devs. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <nav className="flex gap-6">
                <a href="#services" className="text-sm text-[#23395d] opacity-70 hover:text-sky-400 transition-colors font-medium">Services</a>
                <a href="#process" className="text-sm text-[#23395d] opacity-70 hover:text-sky-400 transition-colors font-medium">Process</a>
                <a href="#techstack" className="text-sm text-[#23395d] opacity-70 hover:text-sky-400 transition-colors font-medium">Tech Stack</a>
              </nav>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#23395d] opacity-40 hover:text-sky-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#contact"
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

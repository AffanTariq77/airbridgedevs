import { Card } from "@/components/ui/card";
import { Brain, Rocket, Zap } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "AI-First Development",
    description:
      "We embed AI into every layer of your product — from smart workflows to automation, predictive analytics, and LLM integrations.",
  },
  {
    icon: Rocket,
    title: "End-to-End Delivery",
    description:
      "Whether building from scratch or leveling up, we handle the lifecycle: MVP, Custom Engineering, and Scale.",
  },
  {
    icon: Zap,
    title: "Future-Ready Engineering",
    description:
      "Our teams work with modern stacks ensuring scalability, performance, and top-tier code quality.",
  },
];

const WhyWorkWithUs = () => {
  return (
    <section className="py-16 px-2 sm:px-6 md:py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#192841" }}
          >
            Why Work With Us?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering your growth with AI
          </p>
        </div>
        {/* SVG gradient definition rendered once */}
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <linearGradient
              id="why-gradient"
              x1="0"
              y1="0"
              x2="32"
              y2="32"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8923cb" />
              <stop offset="1" stopColor="#8923cb" stopOpacity="0.7" />
            </linearGradient>
          </defs>
        </svg>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={index}
                className="p-6 md:p-8 border border-border/60 hover:border-border/80 transition-all duration-300 hover:shadow-sky-blue"
                style={{ background: "#F3F9FF" }}
              >
                <div className="mb-6 flex justify-center items-center">
                  <Icon className="h-8 w-8" color="url(#why-gradient)" />
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#192841" }}
                >
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;

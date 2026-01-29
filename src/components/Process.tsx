import React from "react";
import { Card } from "@/components/ui/card";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Understand",
      description: "Deep exploration of goals and user needs.",
      details:
        "We conduct workshops, interviews, and research to fully understand your business objectives and user pain points.",
    },
    {
      number: "02",
      title: "Architect",
      description: "Mapping user flows and scalable architecture.",
      details:
        "We design robust system architectures and user journeys, ensuring scalability and maintainability from the start.",
    },
    {
      number: "03",
      title: "Build (AI Core)",
      description: "Shipping fast, stable code powered by AI.",
      details:
        "Our engineers rapidly develop and integrate AI-driven features, focusing on quality and speed.",
    },
    {
      number: "04",
      title: "Iterate",
      description: "Refining based on real user data.",
      details:
        "We analyze user feedback and data to continuously improve the product, releasing updates quickly.",
    },
    {
      number: "05",
      title: "Scale",
      description: "Infrastructure and automation for long-term growth.",
      details:
        "We implement automation, monitoring, and scaling strategies to support your growth and reliability.",
    },
  ];

  const [hovered, setHovered] = React.useState<number | null>(null);

  return (
    <section id="process" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#192841" }}
          >
            How We Work
          </h2>
          <p className="text-xl text-muted-foreground">
            A proven process from concept to scale
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <Card
                  className={`p-6 h-full border border-border/40 transition-all duration-300 bg-[#F3F9FF] ${
                    hovered === index
                      ? "scale-105 shadow-2xl z-20"
                      : "hover:shadow-sky-blue"
                  }`}
                  style={{ background: "#F3F9FF" }}
                >
                  <div className="mb-4 flex justify-center items-center">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="process-gradient"
                          x1="0"
                          y1="0"
                          x2="48"
                          y2="48"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#8923cb" />
                          <stop offset="1" stopColor="#374c70ff" />
                        </linearGradient>
                      </defs>
                      <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize="2.2rem"
                        fontWeight="bold"
                        fill="url(#process-gradient)"
                      >
                        {step.number}
                      </text>
                    </svg>
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "#192841" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      hovered === index
                        ? "max-h-40 opacity-100 mt-4"
                        : "max-h-0 opacity-0 mt-0"
                    }`}
                  >
                    <p className="text-xs text-slate-600">{step.details}</p>
                  </div>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

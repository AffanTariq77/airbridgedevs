import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const TechStack = () => {
  // Add details for each technology (richer content, can add icons if desired)
  const techCategories = {
    ai: [
      {
        name: "OpenAI",
        details: {
          title: "OpenAI",
          desc: "Industry-leading LLMs (GPT-4) providing the reasoning engine for complex enterprise automation.",
          url: "https://openai.com/",
        },
      },
      {
        name: "Anthropic",
        details: {
          title: "Anthropic",
          desc: "High-security models with massive context windows, ideal for analyzing large documents and datasets.",
          url: "https://www.anthropic.com/",
        },
      },
      {
        name: "LlamaIndex",
        details: {
          title: "LlamaIndex",
          desc: "The premier data framework for connecting your private data sources to Large Language Models.",
          url: "https://www.llamaindex.ai/",
        },
      },
      {
        name: "PyTorch",
        details: {
          title: "PyTorch",
          desc: "Flexible deep learning framework used for building and training custom, high-performance neural networks.",
          url: "https://pytorch.org/",
        },
      },
      {
        name: "TensorFlow",
        details: {
          title: "TensorFlow",
          desc: "Production-grade machine learning platform designed for scalable model deployment in enterprise environments.",
          url: "https://www.tensorflow.org/",
        },
      },
      {
        name: "Pinecone",
        details: {
          title: "Pinecone",
          desc: "High-performance vector database enabling real-time semantic search and long-term memory for AI.",
          url: "https://www.pinecone.io/",
        },
      },
      {
        name: "LangChain",
        details: {
          title: "LangChain",
          desc: "The standard architecture for chaining LLMs into cognitive applications that can reason and act.",
          url: "https://www.langchain.com/",
        },
      },
      {
        name: "Cohere",
        details: {
          title: "Cohere",
          desc: "Enterprise-focused NLP models optimized for secure search, classification, and retrieval tasks.",
          url: "https://cohere.com/",
        },
      },
      {
        name: "Mistral",
        details: {
          title: "Mistral",
          desc: "Efficient, high-performance open-source models offering cost-effective scalability for on-premise solutions.",
          url: "https://mistral.ai/",
        },
      },
      {
        name: "Hugging Face",
        details: {
          title: "Hugging Face",
          desc: "The global hub for state-of-the-art open-source models, enabling rapid prototyping and deployment.",
          url: "https://huggingface.co/",
        },
      },
      {
        name: "Scikit-learn",
        details: {
          title: "Scikit-learn",
          desc: "Robust library for predictive data analysis and classical machine learning algorithms.",
          url: "https://scikit-learn.org/",
        },
      },
      {
        name: "RAG pipelines",
        details: {
          title: "RAG pipelines",
          desc: "Custom retrieval architectures that ground AI responses in your verified business data to prevent hallucinations.",
          url: "https://www.llamaindex.ai/guides/retrieval-augmented-generation",
        },
      },
      {
        name: "Vector DBs (Weaviate, ChromaDB, Milvus)",
        details: {
          title: "Vector DBs",
          desc: "Optimized storage engines giving your AI instant access to vast knowledge bases.",
          url: "https://weaviate.io/",
        },
      },
      {
        name: "AI Agents (CrewAI, AutoGen, DSPy)",
        details: {
          title: "AI Agents",
          desc: "Autonomous systems capable of planning multi-step workflows and executing tasks independently.",
          url: "https://crewai.com/",
        },
      },
    ],
    backend: [
      {
        name: "Node.js",
        details: {
          title: "Node.js",
          desc: "Event-driven runtime for building scalable, high-throughput network applications and real-time APIs.",
          url: "https://nodejs.org/",
        },
      },
      {
        name: "Python (FastAPI)",
        details: {
          title: "FastAPI",
          desc: "Modern, high-performance web framework for building rapid, data-intensive APIs with automatic validation.",
          url: "https://fastapi.tiangolo.com/",
        },
      },
      {
        name: "Python (Django)",
        details: {
          title: "Django",
          desc: "Secure, high-level framework for rapid development of robust, enterprise-grade backend systems.",
          url: "https://www.djangoproject.com/",
        },
      },
      {
        name: "Go",
        details: {
          title: "Go",
          desc: "Ultra-fast, compiled language ideal for high-concurrency cloud services and microservices.",
          url: "https://go.dev/",
        },
      },
      {
        name: "Ruby on Rails",
        details: {
          title: "Ruby on Rails",
          desc: "The 'startup speed' framework for rapid prototyping and launching MVPs in record time.",
          url: "https://rubyonrails.org/",
        },
      },
      {
        name: "GraphQL",
        details: {
          title: "GraphQL",
          desc: "Flexible query language that optimizes data fetching, reducing network load for complex applications.",
          url: "https://graphql.org/",
        },
      },
      {
        name: "Microservices",
        details: {
          title: "Microservices",
          desc: "Modular architecture ensuring independent scaling, fault isolation, and easier long-term maintenance.",
          url: "https://microservices.io/",
        },
      },
      {
        name: "Serverless",
        details: {
          title: "Serverless",
          desc: "Event-driven architecture that eliminates infrastructure management and scales costs purely on usage.",
          url: "https://serverless.com/",
        },
      },
      {
        name: "Real-time systems",
        details: {
          title: "Real-time systems",
          desc: "WebSocket-based architecture enabling instant data synchronization and live user collaboration.",
          url: "https://ably.com/concepts/real-time",
        },
      },
    ],
    frontend: [
      {
        name: "React",
        details: {
          title: "React",
          desc: "The industry standard for building dynamic, interactive, and high-performance user interfaces.",
          url: "https://react.dev/",
        },
      },
      {
        name: "Next.js",
        details: {
          title: "Next.js",
          desc: "Production-grade React framework offering server-side rendering for superior speed and SEO performance.",
          url: "https://nextjs.org/",
        },
      },
      {
        name: "Vue.js",
        details: {
          title: "Vue.js",
          desc: "Progressive framework for building lightweight, maintainable, and highly performant interfaces.",
          url: "https://vuejs.org/",
        },
      },
      {
        name: "Flutter",
        details: {
          title: "Flutter",
          desc: "Google’s UI toolkit for compiling beautiful, natively compiled mobile apps from a single codebase.",
          url: "https://flutter.dev/",
        },
      },
      {
        name: "React Native",
        details: {
          title: "React Native",
          desc: "Cross-platform framework delivering native mobile performance with the efficiency of React development.",
          url: "https://reactnative.dev/",
        },
      },
    ],
    cloud: [
      {
        name: "AWS",
        details: {
          title: "AWS",
          desc: "The world’s most comprehensive cloud platform, offering unlimited scalability for mission-critical apps.",
          url: "https://aws.amazon.com/",
        },
      },
      {
        name: "GCP",
        details: {
          title: "GCP",
          desc: "Google’s cloud infrastructure, specifically optimized for AI workloads, data analytics, and containerization.",
          url: "https://cloud.google.com/",
        },
      },
      {
        name: "Azure",
        details: {
          title: "Azure",
          desc: "Enterprise-grade cloud computing with seamless integration for Microsoft-centric organizations.",
          url: "https://azure.microsoft.com/",
        },
      },
      {
        name: "Docker",
        details: {
          title: "Docker",
          desc: "Containerization standard ensuring your software runs consistently across development and production.",
          url: "https://www.docker.com/",
        },
      },
      {
        name: "Kubernetes",
        details: {
          title: "Kubernetes",
          desc: "Automated container orchestration for managing massive scale and reliability in cloud environments.",
          url: "https://kubernetes.io/",
        },
      },
      {
        name: "Terraform",
        details: {
          title: "Terraform",
          desc: "Infrastructure as Code (IaC) allowing for safe, predictable, and reproducible cloud provisioning.",
          url: "https://www.terraform.io/",
        },
      },
      {
        name: "CI/CD",
        details: {
          title: "CI/CD",
          desc: "Automated pipelines ensuring rapid, reliable code delivery, testing, and deployment cycles.",
          url: "https://www.redhat.com/en/topics/devops/what-is-ci-cd",
        },
      },
    ],
    data: [
      {
        name: "Snowflake",
        details: {
          title: "Snowflake",
          desc: "Cloud-native data warehousing for seamless storage, analysis, and sharing across multiple clouds.",
          url: "https://www.snowflake.com/",
        },
      },
      {
        name: "BigQuery",
        details: {
          title: "BigQuery",
          desc: "Serverless, highly scalable data warehouse designed for real-time business insights and analytics.",
          url: "https://cloud.google.com/bigquery",
        },
      },
      {
        name: "Redshift",
        details: {
          title: "Redshift",
          desc: "Fast, simple, and cost-effective data warehousing fully integrated with the AWS ecosystem.",
          url: "https://aws.amazon.com/redshift/",
        },
      },
      {
        name: "Airflow",
        details: {
          title: "Airflow",
          desc: "Platform to programmatically author, schedule, and monitor complex data processing workflows.",
          url: "https://airflow.apache.org/",
        },
      },
      {
        name: "dbt",
        details: {
          title: "dbt",
          desc: "Analytics engineering tool that transforms raw data in the warehouse into reliable business insights.",
          url: "https://www.getdbt.com/",
        },
      },
      {
        name: "ETL / Data Lakes",
        details: {
          title: "ETL / Data Lakes",
          desc: "Centralized repositories and pipelines capable of processing and storing vast amounts of raw data.",
          url: "https://aws.amazon.com/big-data/datalakes-and-analytics/what-is-a-data-lake/",
        },
      },
    ],
  };

  const [hovered, setHovered] = useState<{ cat: string; idx: number } | null>(
    null,
  );

  return (
    <section id="tech-stack" className="py-8 px-2 sm:px-6 md:py-10">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#192841" }}
          >
            Our Unified Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We engineer with modern, scalable technologies combined with
advanced AI frameworks to ensure your product is fast, intelligent, and built for
long-term growth.
          </p>
        </div>

        <Tabs defaultValue="ai" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-5 w-full mb-12">
            <TabsTrigger value="ai">AI & ML</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="cloud">Cloud/DevOps</TabsTrigger>
            <TabsTrigger value="data">Data</TabsTrigger>
          </TabsList>

          {Object.entries(techCategories).map(([key, technologies]) => (
            <TabsContent key={key} value={key}>
              <div className="flex flex-wrap gap-2 sm:gap-4 justify-center p-2 sm:p-6 md:p-8">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setHovered({ cat: key, idx: index })}
                    onMouseLeave={() => setHovered(null)}
                    className="relative"
                  >
                    <Badge
                      variant="secondary"
                      className={`px-6 py-3 text-base bg-card/80 text-foreground border border-border/40 transition-all duration-300 opacity-100 cursor-pointer ${
                        hovered && hovered.cat === key && hovered.idx === index
                          ? "scale-105 shadow-2xl z-30 border-sky-400"
                          : "hover:border-sky-400 hover:shadow-sky-blue"
                      }`}
                    >
                      {tech.name}
                    </Badge>
                    {/* Tooltip with pointer and richer content */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 mt-3 w-[320px] max-w-xs bg-background border border-border rounded-xl shadow-2xl p-5 text-sm text-muted-foreground font-sans transition-all duration-300 z-40 pointer-events-none flex flex-col items-center gap-2 ${
                        hovered && hovered.cat === key && hovered.idx === index
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                      style={{
                        boxShadow: "0 8px 32px 0 rgba(0, 80, 180, 0.10)",
                      }}
                    >
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 mb-1">
                        <span className="text-primary text-lg font-bold">
                          {tech.name[0]}
                        </span>
                      </div>
                      <div className="text-base font-semibold text-primary mb-1 text-center">
                        {tech.details.title}
                      </div>
                      <div className="text-xs text-muted-foreground text-center mb-2">
                        {tech.details.desc}
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 bg-background border-l border-t border-border rotate-45 z-10"></div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TechStack;

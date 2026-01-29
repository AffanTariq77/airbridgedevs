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
          desc: "Creators of ChatGPT, DALL·E, and leading LLM APIs. Used for generative AI, chatbots, and advanced NLP tasks in production environments.",
          url: "https://openai.com/",
        },
      },
      {
        name: "Anthropic",
        details: {
          title: "Anthropic",
          desc: "AI safety pioneers and creators of Claude, a powerful conversational LLM for enterprise and research.",
          url: "https://www.anthropic.com/",
        },
      },
      {
        name: "LlamaIndex",
        details: {
          title: "LlamaIndex",
          desc: "Framework for building LLM-powered data applications, especially for retrieval-augmented generation (RAG).",
          url: "https://www.llamaindex.ai/",
        },
      },
      {
        name: "PyTorch",
        details: {
          title: "PyTorch",
          desc: "Flexible, developer-friendly deep learning library. Preferred for research and production AI models.",
          url: "https://pytorch.org/",
        },
      },
      {
        name: "TensorFlow",
        details: {
          title: "TensorFlow",
          desc: "Production-grade ML framework by Google. Used for scalable, cross-platform ML and deep learning.",
          url: "https://www.tensorflow.org/",
        },
      },
      {
        name: "Pinecone",
        details: {
          title: "Pinecone",
          desc: "Managed vector database for fast, scalable AI search and semantic retrieval.",
          url: "https://www.pinecone.io/",
        },
      },
      {
        name: "LangChain",
        details: {
          title: "LangChain",
          desc: "Orchestrate LLM workflows, agents, and tools for advanced AI applications.",
          url: "https://www.langchain.com/",
        },
      },
      {
        name: "Cohere",
        details: {
          title: "Cohere",
          desc: "Enterprise NLP, embeddings, and LLMs for search, classification, and more.",
          url: "https://cohere.com/",
        },
      },
      {
        name: "Mistral",
        details: {
          title: "Mistral",
          desc: "Open-source LLMs for advanced AI, with a focus on transparency and performance.",
          url: "https://mistral.ai/",
        },
      },
      {
        name: "Hugging Face",
        details: {
          title: "Hugging Face",
          desc: "Hub for ML models, datasets, and tools. The go-to place for open-source AI.",
          url: "https://huggingface.co/",
        },
      },
      {
        name: "Scikit-learn",
        details: {
          title: "Scikit-learn",
          desc: "Classical ML algorithms and tools in Python. Great for data science and prototyping.",
          url: "https://scikit-learn.org/",
        },
      },
      {
        name: "RAG pipelines",
        details: {
          title: "RAG pipelines",
          desc: "Retrieval-augmented generation: combine LLMs with external data for more accurate, up-to-date answers.",
          url: "https://www.llamaindex.ai/guides/retrieval-augmented-generation",
        },
      },
      {
        name: "Vector DBs (Weaviate, ChromaDB, Milvus)",
        details: {
          title: "Vector DBs",
          desc: "Store and search embeddings at scale for semantic search and AI applications.",
          url: "https://weaviate.io/",
        },
      },
      {
        name: "AI Agents (CrewAI, AutoGen, DSPy)",
        details: {
          title: "AI Agents",
          desc: "Multi-agent frameworks for complex, autonomous AI workflows.",
          url: "https://crewai.com/",
        },
      },
    ],
    backend: [
      {
        name: "Node.js",
        details: {
          title: "Node.js",
          desc: "Fast, scalable JavaScript runtime for backend APIs and microservices.",
          url: "https://nodejs.org/",
        },
      },
      {
        name: "Python (FastAPI)",
        details: {
          title: "FastAPI",
          desc: "Modern, fast Python web framework for building APIs with automatic docs.",
          url: "https://fastapi.tiangolo.com/",
        },
      },
      {
        name: "Python (Django)",
        details: {
          title: "Django",
          desc: "Robust Python web framework for rapid development and clean design.",
          url: "https://www.djangoproject.com/",
        },
      },
      {
        name: "Go",
        details: {
          title: "Go",
          desc: "Efficient, compiled backend language for high-performance services.",
          url: "https://go.dev/",
        },
      },
      {
        name: "Ruby on Rails",
        details: {
          title: "Ruby on Rails",
          desc: "Rapid web app development framework with convention over configuration.",
          url: "https://rubyonrails.org/",
        },
      },
      {
        name: "GraphQL",
        details: {
          title: "GraphQL",
          desc: "Flexible API query language for efficient data fetching.",
          url: "https://graphql.org/",
        },
      },
      {
        name: "Microservices",
        details: {
          title: "Microservices",
          desc: "Decoupled, scalable backend architecture for large systems.",
          url: "https://microservices.io/",
        },
      },
      {
        name: "Serverless",
        details: {
          title: "Serverless",
          desc: "Deploy code without managing servers, pay only for usage.",
          url: "https://serverless.com/",
        },
      },
      {
        name: "Real-time systems",
        details: {
          title: "Real-time systems",
          desc: "Live data and event-driven backends for instant updates.",
          url: "https://ably.com/concepts/real-time",
        },
      },
    ],
    frontend: [
      {
        name: "React",
        details: {
          title: "React",
          desc: "Component-based UI library for building interactive web apps.",
          url: "https://react.dev/",
        },
      },
      {
        name: "Next.js",
        details: {
          title: "Next.js",
          desc: "React framework for SSR, SSG, and full-stack web apps.",
          url: "https://nextjs.org/",
        },
      },
      {
        name: "Vue.js",
        details: {
          title: "Vue.js",
          desc: "Progressive JavaScript framework for building UIs.",
          url: "https://vuejs.org/",
        },
      },
      {
        name: "Flutter",
        details: {
          title: "Flutter",
          desc: "Cross-platform mobile UI toolkit by Google.",
          url: "https://flutter.dev/",
        },
      },
      {
        name: "React Native",
        details: {
          title: "React Native",
          desc: "Native mobile apps using React and JavaScript.",
          url: "https://reactnative.dev/",
        },
      },
    ],
    cloud: [
      {
        name: "AWS",
        details: {
          title: "AWS",
          desc: "Comprehensive cloud platform for hosting, compute, and storage.",
          url: "https://aws.amazon.com/",
        },
      },
      {
        name: "GCP",
        details: {
          title: "GCP",
          desc: "Google's cloud infrastructure for scalable apps.",
          url: "https://cloud.google.com/",
        },
      },
      {
        name: "Azure",
        details: {
          title: "Azure",
          desc: "Microsoft's cloud services for enterprise and startups.",
          url: "https://azure.microsoft.com/",
        },
      },
      {
        name: "Docker",
        details: {
          title: "Docker",
          desc: "Containerization for portability and consistency across environments.",
          url: "https://www.docker.com/",
        },
      },
      {
        name: "Kubernetes",
        details: {
          title: "Kubernetes",
          desc: "Container orchestration at scale for microservices.",
          url: "https://kubernetes.io/",
        },
      },
      {
        name: "Terraform",
        details: {
          title: "Terraform",
          desc: "Infrastructure as code for automated cloud provisioning.",
          url: "https://www.terraform.io/",
        },
      },
      {
        name: "CI/CD",
        details: {
          title: "CI/CD",
          desc: "Automated build, test, and deployment pipelines.",
          url: "https://www.redhat.com/en/topics/devops/what-is-ci-cd",
        },
      },
    ],
    data: [
      {
        name: "Snowflake",
        details: {
          title: "Snowflake",
          desc: "Cloud data warehouse platform for analytics and BI.",
          url: "https://www.snowflake.com/",
        },
      },
      {
        name: "BigQuery",
        details: {
          title: "BigQuery",
          desc: "Serverless data warehouse by Google for big data analytics.",
          url: "https://cloud.google.com/bigquery",
        },
      },
      {
        name: "Redshift",
        details: {
          title: "Redshift",
          desc: "Amazon's data warehouse service for scalable analytics.",
          url: "https://aws.amazon.com/redshift/",
        },
      },
      {
        name: "Airflow",
        details: {
          title: "Airflow",
          desc: "Workflow automation and scheduling for data pipelines.",
          url: "https://airflow.apache.org/",
        },
      },
      {
        name: "dbt",
        details: {
          title: "dbt",
          desc: "Analytics engineering for data teams, enabling transformation and modeling.",
          url: "https://www.getdbt.com/",
        },
      },
      {
        name: "ETL / Data Lakes",
        details: {
          title: "ETL / Data Lakes",
          desc: "Data integration, transformation, and storage at scale.",
          url: "https://aws.amazon.com/big-data/datalakes-and-analytics/what-is-a-data-lake/",
        },
      },
    ],
  };

  const [hovered, setHovered] = useState<{ cat: string; idx: number } | null>(
    null,
  );

  return (
    <section id="tech-stack" className="py-16 px-2 sm:px-6 md:py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#192841" }}
          >
            Our Unified Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We engineer with modern, scalable technologies—combined with
            advanced AI frameworks—to ensure your product is fast, intelligent,
            and built for long-term growth.
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

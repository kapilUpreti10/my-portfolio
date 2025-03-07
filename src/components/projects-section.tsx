import { ArrowUpRight, Github } from "lucide-react";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoLink: string;
  githubLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform with advanced filtering and payment integration.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image:
      "https://cdn.pixabay.com/photo/2020/08/03/10/00/money-5459709_1280.png",
    demoLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A minimalist portfolio website with smooth animations and responsive design.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image:
      "https://cdn.pixabay.com/photo/2021/12/29/02/10/idea-6900632_1280.png",
    demoLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A productivity app for managing tasks with a drag-and-drop interface.",
    tags: ["React", "Redux", "Firebase", "Material-UI"],
    image:
      "https://media.istockphoto.com/id/1348671346/vector/vector-set-of-illustration-project-management-concept-line-art-style-background-design-for.jpg?s=2048x2048&w=is&k=20&c=WNOtBfzeCAUUM72jNPNnY5H7HtBG7WXXOmtYaMkZ0_Q=",
    demoLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "A beautiful weather application with real-time updates and forecast visualization.",
    tags: ["React", "Chart.js", "API Integration", "Geolocation"],
    image:
      "https://media.istockphoto.com/id/1346734927/vector/hacker-and-cyber-criminals-phishing-stealing-private-personal-data-user-login-password.jpg?s=2048x2048&w=is&k=20&c=F5XDAuu4d5rhXp_4F88gscU_cHnsp-6aaOaCdZDrew4=",
    demoLink: "https://example.com",
    githubLink: "https://github.com",
  },
];

export function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Here are some of my recent projects. Each project represents
            different challenges and learning experiences that have helped me
            grow as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`glassmorphism rounded-2xl overflow-hidden group transition-all duration-500 animate-fade-in hover:shadow-xl`}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredId === project.id ? "scale-110" : "scale-100"
                    }`}
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-4">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-primary-foreground rounded-full p-2 transform transition-transform hover:scale-110"
                      aria-label={`View ${project.title} demo`}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary text-secondary-foreground rounded-full p-2 transform transition-transform hover:scale-110"
                      aria-label={`View ${project.title} source code`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
          >
            <span>View more projects on GitHub</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl opacity-70"></div>
    </section>
  );
}

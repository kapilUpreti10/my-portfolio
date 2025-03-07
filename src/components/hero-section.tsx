import { ArrowDown } from "lucide-react";
import myImage from "../images/kapil.jpg";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 animate-fade-in">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
              Welcome to my portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-tight tracking-tight text-balance">
              Hi, I'm <span className="text-gradient">Kapil Upreti</span>
              <br />
              <span className="text-3xl md:text-5xl font-semibold">
                Computer Engineer
              </span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed">
              I design and build digital experiences that are intuitive,
              accessible, and focused on user needs.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="bg-primary text-primary-foreground rounded-full px-8 py-3 font-medium transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 active:translate-y-0 duration-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="bg-secondary text-secondary-foreground rounded-full px-8 py-3 font-medium transition-all hover:bg-secondary/80 hover:-translate-y-1 active:translate-y-0 duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center animate-slide-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl opacity-70 animate-float"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-white/10 shadow-xl glassmorphism">
                <img
                  src={myImage}
                  alt="Profile"
                  className="w-full h-full object-cover object-center transform transition duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          aria-label="Scroll down"
          className="flex justify-center items-center w-10 h-10 rounded-full glassmorphism"
        >
          <ArrowDown className="h-5 w-5 text-foreground" />
        </a>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl opacity-70"></div>
    </section>
  );
}

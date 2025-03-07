
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 relative">
      <div className="container mx-auto">
        <div className="border-t border-border pt-12 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex flex-col items-center md:items-start">
              <a href="#home" className="text-xl font-semibold tracking-tight mb-4 hover-lift">
                <span className="text-gradient">Portfolio</span>
              </a>
              <p className="text-muted-foreground text-center md:text-left max-w-md">
                Creating meaningful digital experiences through thoughtful design 
                and innovative technology.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-full bg-secondary w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-full bg-secondary w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-full bg-secondary w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="mailto:hello@example.com" 
                className="rounded-full bg-secondary w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-border text-sm text-muted-foreground">
            <p>© {currentYear} Your Name. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset form status after 3 seconds
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind or just want to say hello? Feel free to reach out 
            through the form below or connect with me on social media.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-in">
            <div className="glassmorphism rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="How can I help you?"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full bg-primary text-primary-foreground rounded-lg px-6 py-3 font-medium transition-all hover:shadow-lg hover:shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === "submitting" ? "Sending..." : 
                   formStatus === "success" ? "Message Sent!" : 
                   "Send Message"}
                </button>
              </form>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="glassmorphism rounded-2xl p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <p className="text-muted-foreground mb-8">
                  Prefer to connect through other channels? Reach out via email or 
                  connect with me on social media platforms.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a 
                        href="mailto:hello@example.com" 
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        hello@example.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-lg font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="rounded-full bg-secondary w-12 h-12 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="rounded-full bg-secondary w-12 h-12 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="rounded-full bg-secondary w-12 h-12 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl opacity-70"></div>
    </section>
  );
}

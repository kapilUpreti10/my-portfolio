
import { Code, Lightbulb, Puzzle, User } from "lucide-react";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: string;
}

const SkillCard = ({ icon, title, description, delay = "animate-slide-in" }: SkillCardProps) => (
  <div className={`glassmorphism rounded-2xl p-6 shadow-sm ${delay}`}>
    <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Passionate about creating <span className="text-gradient">beautiful experiences</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            I'm a creative developer with a focus on user-centered design principles. 
            With experience in both design and development, I create seamless digital 
            experiences that are both functional and aesthetically pleasing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard 
            icon={<User className="h-6 w-6 text-primary" />}
            title="User Experience"
            description="Creating intuitive and accessible user interfaces that provide meaningful experiences."
          />
          <SkillCard 
            icon={<Code className="h-6 w-6 text-primary" />}
            title="Development"
            description="Building responsive websites and applications using modern technologies."
            delay="animate-slide-in-delayed"
          />
          <SkillCard 
            icon={<Lightbulb className="h-6 w-6 text-primary" />}
            title="Creative Solutions"
            description="Finding innovative approaches to solve complex design and technical challenges."
            delay="animate-slide-in-delayed-more"
          />
          <SkillCard 
            icon={<Puzzle className="h-6 w-6 text-primary" />}
            title="Strategy"
            description="Developing comprehensive strategies to achieve business goals through design."
            delay="animate-slide-in-delayed-more"
          />
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-4">
              With over 5 years of experience in the field, I've worked on a variety of projects 
              ranging from small business websites to complex web applications. My approach 
              combines technical expertise with creative problem-solving.
            </p>
            <p className="text-muted-foreground mb-4">
              I'm constantly learning and experimenting with new technologies and design 
              techniques to stay at the forefront of the industry and deliver cutting-edge solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">React</span>
              <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">TypeScript</span>
              <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">Tailwind CSS</span>
              <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">UI/UX Design</span>
              <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">Node.js</span>
              <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">Next.js</span>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-3xl blur-3xl opacity-70"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-xl glassmorphism">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&q=80&fit=crop" 
                  alt="Workspace" 
                  className="w-full h-auto transform transition duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl opacity-70"></div>
    </section>
  );
}

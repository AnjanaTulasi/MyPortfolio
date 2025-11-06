import { Button } from "@/components/ui/button";
import profileImage from "@assets/generated_images/Professional_engineer_headshot_portrait_a49ac224.png";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2" data-testid="text-name">
                Anjana Tulasi D
              </h1>
              <p className="text-xl md:text-2xl text-primary font-medium" data-testid="text-title">
                DevOps & Middleware Engineer
              </p>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed" data-testid="text-bio">
              Dynamic and results-oriented DevOps and Middleware Engineer with 4 years extensive experience in Oracle Fusion Middleware administration, WebLogic Server management, and cloud infrastructure automation. Skilled in deploying, monitoring, and optimizing enterprise-grade systems across on-premises and hybrid cloud environments (OCI, AWS). Strong background in Infrastructure as Code (Terraform), CI/CD automation, and middleware performance tuning. Proficient in Python, WLST, and Shell scripting to streamline deployments, automate maintenance, and enhance system reliability.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button 
                onClick={() => onNavigate('experience')} 
                variant="default"
                data-testid="button-navigate-experience"
              >
                Experience
              </Button>
              <Button 
                onClick={() => onNavigate('skills')} 
                variant="default"
                data-testid="button-navigate-skills"
              >
                Skills
              </Button>
              <Button 
                onClick={() => onNavigate('projects')} 
                variant="default"
                data-testid="button-navigate-projects"
              >
                Projects
              </Button>
              <Button 
                onClick={() => onNavigate('education')} 
                variant="default"
                data-testid="button-navigate-education"
              >
                Education
              </Button>
              <Button 
                onClick={() => onNavigate('contact')} 
                variant="default"
                data-testid="button-navigate-contact"
              >
                Contact
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-md overflow-hidden shadow-lg">
              <img
                src={profileImage}
                alt="Anjana Tulasi D - DevOps Engineer"
                className="w-full h-full object-cover"
                data-testid="img-profile"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

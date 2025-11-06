import { Linkedin, Github, Mail, FileText, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StickyHeaderProps {
  onNavigate: (section: string) => void;
}

export default function StickyHeader({ onNavigate }: StickyHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b shadow-sm">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Left side - Home button */}
          <Button
            size="default"
            variant="outline"
            onClick={() => onNavigate('hero')}
            className="rounded-full shadow-sm transition-all duration-200 hover:scale-110 hover:shadow-md"
            data-testid="button-home"
          >
            <Home className="h-4 w-4 mr-2" />
            Home
          </Button>

          {/* Center - Navigation buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => onNavigate('experience')}
              className="rounded-full shadow-sm transition-all duration-200 hover:scale-110 hover:shadow-md"
              data-testid="button-nav-experience"
            >
              Experience
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => onNavigate('skills')}
              className="rounded-full shadow-sm transition-all duration-200 hover:scale-110 hover:shadow-md"
              data-testid="button-nav-skills"
            >
              Skills
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => onNavigate('projects')}
              className="rounded-full shadow-sm transition-all duration-200 hover:scale-110 hover:shadow-md"
              data-testid="button-nav-projects"
            >
              Projects
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => onNavigate('education')}
              className="rounded-full shadow-sm transition-all duration-200 hover:scale-110 hover:shadow-md"
              data-testid="button-nav-education"
            >
              Education
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => onNavigate('contact')}
              className="rounded-full shadow-sm transition-all duration-200 hover:scale-110 hover:shadow-md"
              data-testid="button-nav-contact"
            >
              Contact
            </Button>
          </div>

          {/* Right side - Social buttons */}
          <div className="flex items-center gap-2">
            <Button
              size="default"
              variant="outline"
              asChild
              className="rounded-full shadow-sm transition-all duration-200 hover:scale-110 hover:shadow-md hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]"
              data-testid="button-linkedin"
            >
              <a
                href="https://www.linkedin.com/in/anjanatulasid/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button
              size="default"
              variant="outline"
              asChild
              className="rounded-full shadow-sm transition-all duration-200 hover:scale-110 hover:shadow-md hover:bg-[#181717] hover:text-white hover:border-[#181717]"
              data-testid="button-github"
            >
              <a
                href="https://github.com/anjanatdeverapalli"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              size="default"
              variant="outline"
              asChild
              className="rounded-full shadow-sm transition-all duration-200 hover:scale-110 hover:shadow-md hover:bg-[#EA4335] hover:text-white hover:border-[#EA4335]"
              data-testid="button-email"
            >
              <a
                href="mailto:anjanatdeverapalli@gmail.com"
                aria-label="Send Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </Button>
            <Button
              size="default"
              variant="outline"
              asChild
              className="rounded-full shadow-sm transition-all duration-200 hover:scale-110 hover:shadow-md hover:bg-[#0056b3] hover:text-white hover:border-[#0056b3]"
              data-testid="button-resume"
            >
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Resume"
              >
                <FileText className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

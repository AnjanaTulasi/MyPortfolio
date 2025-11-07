import { Linkedin, Github, Mail, FileText, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StickyHeaderProps {
  onNavigate: (section: string) => void;
}

export default function StickyHeader({ onNavigate }: StickyHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-50 via-blue-100 to-indigo-100 backdrop-blur-md border-b border-blue-200 shadow-sm">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-4">
        <div className="flex items-center justify-between gap-4 text-gray-800">

          {/* Left side - Home button */}
          <Button
            size="lg"
            variant="outline"
            onClick={() => onNavigate('hero')}
            className="rounded-full bg-white/70 border-blue-200 hover:bg-blue-100 hover:border-blue-300 text-blue-700 font-semibold shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-md px-5 py-3"
            data-testid="button-home"
          >
            <Home className="h-5 w-5 mr-2" />
          </Button>

          {/* Center - Navigation buttons */}
          <div className="hidden md:flex items-center gap-3">
            {["experience", "skills", "projects", "education", "contact"].map((section) => (
              <Button
                key={section}
                size="lg"
                variant="outline"
                onClick={() => onNavigate(section)}
                className="rounded-full bg-white/70 border-blue-200 text-blue-700 font-medium hover:bg-blue-100 hover:border-blue-300 hover:text-blue-800 shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-md px-6 py-3 text-sm md:text-base"
                data-testid={`button-nav-${section}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            ))}
          </div>

          {/* Right side - Social buttons */}
          <div className="flex items-center gap-3">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-full bg-white/70 border-blue-200 text-blue-700 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:shadow-lg hover:scale-110 transition-all duration-300 p-4"
              data-testid="button-linkedin"
            >
              <a
                href="https://www.linkedin.com/in/anjanatulasid/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-full bg-white/70 border-blue-200 text-black-700 hover:bg-[#181717] hover:text-white hover:border-[#181717] hover:shadow-lg hover:scale-110 transition-all duration-300 p-4"
              data-testid="button-github"
            >
              <a
                href="https://github.com/anjanatdeverapalli"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-full bg-white/70 border-blue-200 text-red-700 hover:bg-[#EA4335] hover:text-white hover:border-[#EA4335] hover:shadow-lg hover:scale-110 transition-all duration-300 p-4"
              data-testid="button-email"
            >
              <a
                href="mailto:anjanatdeverapalli@gmail.com"
                aria-label="Send Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-full bg-white/70 border-blue-200 text-green-700 hover:bg-[#16A34A] hover:text-white hover:border-[#16A34A] hover:shadow-lg hover:scale-110 transition-all duration-300 p-4"

              data-testid="button-resume"
            >
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Resume"
              >
                <FileText className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

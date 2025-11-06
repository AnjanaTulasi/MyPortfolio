import { Linkedin, Github, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StickyHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b shadow-sm">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-4">
        <div className="flex items-center justify-end gap-3">
          <Button
            size="default"
            variant="outline"
            asChild
            className="rounded-full shadow-sm transition-all duration-200 hover:scale-110 hover:shadow-md hover:bg-[#007bff] hover:text-white hover:border-[#007bff]"
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
            className="rounded-full shadow-sm transition-all duration-200 hover:scale-110 hover:shadow-md hover:bg-[#007bff] hover:text-white hover:border-[#007bff]"
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
            className="rounded-full shadow-sm transition-all duration-200 hover:scale-110 hover:shadow-md hover:bg-[#007bff] hover:text-white hover:border-[#007bff]"
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
            className="rounded-full shadow-sm transition-all duration-200 hover:scale-110 hover:shadow-md hover:bg-[#007bff] hover:text-white hover:border-[#007bff]"
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
    </header>
  );
}

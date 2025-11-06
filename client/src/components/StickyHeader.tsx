import { Linkedin, Github, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StickyHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-end gap-2">
          <Button
            size="icon"
            variant="ghost"
            asChild
            className="hover-elevate active-elevate-2"
            data-testid="button-linkedin"
          >
            <a
              href="https://www.linkedin.com/in/anjana-tulasi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5 text-[#0A66C2]" />
            </a>
          </Button>
          <Button
            size="icon"
            variant="ghost"
            asChild
            className="hover-elevate active-elevate-2"
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
            size="icon"
            variant="ghost"
            asChild
            className="hover-elevate active-elevate-2"
            data-testid="button-email"
          >
            <a
              href="mailto:anjanatdeverapalli@gmail.com"
              aria-label="Send Email"
            >
              <Mail className="h-5 w-5 text-[#EA4335]" />
            </a>
          </Button>
          <Button
            size="icon"
            variant="ghost"
            asChild
            className="hover-elevate active-elevate-2"
            data-testid="button-resume"
          >
            <a
              href="/AnjanaTulasi_D_.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Resume"
            >
              <FileText className="h-5 w-5 text-accent" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

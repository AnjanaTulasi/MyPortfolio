import { Linkedin, Github, Mail, FileText, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StickyHeaderProps {
  onNavigate: (section: string) => void;
}

export default function StickyHeader({ onNavigate }: StickyHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-50 via-blue-100 to-indigo-100 backdrop-blur-md border-b border-blue-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-3 md:py-4">
        {/* Outer container: stacks on mobile, side-by-side on desktop */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 sm:gap-3 md:gap-4 text-gray-800">
          {/* Row 1 - Home + Section Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3">
            {/* Home Button */}
            <Button
              size="sm"
              variant="outline"
              onClick={() => onNavigate("hero")}
              className="rounded-full bg-white/70 border-blue-200 hover:bg-blue-100 hover:border-blue-300 text-blue-700 font-semibold shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-md px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-3"
              data-testid="button-home"
            >
              <Home className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
            </Button>

            {/* Section Buttons */}
            {["experience", "skills", "projects", "education", "contact"].map(
              (section) => (
                <Button
                  key={section}
                  size="sm"
                  variant="outline"
                  onClick={() => onNavigate(section)}
                  className="rounded-full bg-white/70 border-blue-200 text-blue-700 font-medium hover:bg-blue-100 hover:border-blue-300 hover:text-blue-800 shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-md px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 text-xs sm:text-sm md:text-base"
                  data-testid={`button-nav-${section}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Button>
              ),
            )}
          </div>

          {/* Row 2 - Social & Resume Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-3">
            {[
              {
                href: "https://www.linkedin.com/in/anjanatulasid/",
                icon: <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />,
                hover:
                  "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]",
                color: "text-blue-700",
                testid: "button-linkedin",
                label: "LinkedIn Profile",
              },
              {
                href: "https://github.com/anjanatdeverapalli",
                icon: <Github className="h-4 w-4 sm:h-5 sm:w-5" />,
                hover:
                  "hover:bg-[#181717] hover:text-white hover:border-[#181717]",
                color: "text-gray-800",
                testid: "button-github",
                label: "GitHub Profile",
              },
              {
                href: "mailto:anjanatdeverapalli@gmail.com",
                icon: <Mail className="h-4 w-4 sm:h-5 sm:w-5" />,
                hover:
                  "hover:bg-[#EA4335] hover:text-white hover:border-[#EA4335]",
                color: "text-red-700",
                testid: "button-email",
                label: "Send Email",
              },
              {
                href: `${import.meta.env.BASE_URL}Resume.pdf`,
                icon: <FileText className="h-4 w-4 sm:h-5 sm:w-5" />,
                hover:
                  "hover:bg-[#16A34A] hover:text-white hover:border-[#16A34A]",
                color: "text-green-700",
                testid: "button-resume",
                label: "Download Resume",
                download: "Resume.pdf",
              },
            ].map((btn, i) => (
              <div key={i} className="relative group">
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className={`rounded-full bg-white/70 border-blue-200 ${btn.color} ${btn.hover} hover:shadow-lg hover:scale-110 transition-all duration-300 p-2 sm:p-3 md:p-4`}
                  data-testid={btn.testid}
                >
                  <a
                    href={btn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={btn.label}
                    {...(btn.download ? { download: btn.download } : {})}
                  >
                    {btn.icon}
                  </a>
                </Button>

                {/* Tooltip */}
                <span className="absolute bottom-[-1.8rem] left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] sm:text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                  {btn.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

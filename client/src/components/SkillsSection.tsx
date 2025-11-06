import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Scripting",
    skills: ["Python", "Shell Scripting", "WLST", "C", "C++", "SQL"]
  },
  {
    title: "Frontend Technologies",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Backend Frameworks",
    skills: ["Node.js", "Express.js", "Flask", "PostgreSQL", "MongoDB"]
  },
  {
    title: "Databases",
    skills: ["Linux", "Unix", "Windows", "Ubuntu"]
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["Oracle Cloud Infrastructure (OCI)", "AWS", "Terraform", "Kubernetes"]
  },
  {
    title: "Middleware & Application Servers",
    skills: ["Oracle WebLogic 11g/12c", "Oracle Fusion Middleware", "SOA Suite", "OSB", "AIA", "Apache Tomcat"]
  },
  {
    title: "DevOps & CI/CD Tools",
    skills: ["Git", "GitHub", "Jenkins", "CI/CD"]
  },
  {
    title: "Monitoring & Ticketing Systems",
    skills: ["Splunk", "AppDynamics", "BMC Remedy"]
  },
  {
    title: "Collaborations & Productivity",
    skills: ["MS Office", "Microsoft Teams", "Zoom", "Canva"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-skills-title">
          Skills
        </h2>
        <div className="max-w-5xl mx-auto space-y-8">
          {skillCategories.map((category, index) => (
            <div key={index} data-testid={`skill-category-${index}`}>
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-foreground" data-testid={`text-category-${index}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="text-sm px-3 py-1"
                    data-testid={`badge-skill-${index}-${idx}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

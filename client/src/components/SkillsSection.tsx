import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  title: string;
  skills: string[];
  gradient: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Scripting",
    skills: ["Python", "Shell Scripting", "WLST", "C", "C++", "SQL"],
    gradient: "from-blue-100 to-blue-50"
  },
  {
    title: "Frontend Technologies",
    skills: ["HTML", "CSS", "JavaScript"],
    gradient: "from-blue-100 to-blue-50"
  },
  {
    title: "Backend Frameworks",
    skills: ["Node.js", "Express.js", "Flask", "PostgreSQL", "MongoDB"],
    gradient: "from-blue-100 to-blue-50"
  },
  {
    title: "Databases & Operating Systems",
    skills: ["Linux", "Unix", "Windows", "Ubuntu"],
    gradient: "from-blue-100 to-blue-50"
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["Oracle Cloud Infrastructure (OCI)", "AWS", "Terraform", "Kubernetes"],
    gradient: "from-blue-100 to-blue-50"
  },
  {
    title: "Middleware & Application Servers",
    skills: [
      "Oracle WebLogic 11g/12c",
      "Oracle Fusion Middleware",
      "SOA Suite",
      "OSB",
      "AIA",
      "Apache Tomcat"
    ],
    gradient: "from-blue-100 to-blue-50"
  },
  {
    title: "DevOps & CI/CD Tools",
    skills: ["Git", "GitHub", "Jenkins", "CI/CD"],
    gradient: "from-blue-100 to-blue-50"
  },
  {
    title: "Monitoring & Ticketing Systems",
    skills: ["Splunk", "AppDynamics", "BMC Remedy"],
    gradient: "from-blue-100 to-blue-50"
  },
  {
    title: "Collaboration & Productivity Tools",
    skills: ["MS Office", "Microsoft Teams", "Zoom", "Canva"],
    gradient: "from-blue-100 to-blue-50"
  }
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-gradient-to-b from-blue-50 via-blue-100/40 to-blue-50"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <h2
          className="text-3xl md:text-4xl text-center mb-12 font-semibold text-blue-900 tracking-tight"
          data-testid="text-skills-title"
        >
          Skills
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`
                shadow-md hover:shadow-2xl hover:border-blue-300 transition-all duration-300
                transform hover:-translate-y-2 border rounded-2xl 
                bg-gradient-to-br ${category.gradient}
              `}
              data-testid={`skill-category-${index}`}
            >
              <CardHeader>
                <CardTitle
                  className="text-lg md:text-xl text-blue-900 font-semibold"
                  data-testid={`text-category-${index}`}
                >
                  {category.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 justify-start">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="
                        text-sm border-blue-300 text-blue-700 bg-white/50
                        px-3 py-1 transition-all duration-200 transform
                        hover:scale-110 hover:bg-blue-200 hover:text-blue-900
                      "
                      data-testid={`badge-skill-${index}-${idx}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

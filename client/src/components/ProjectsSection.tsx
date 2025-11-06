import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  publicationUrl?: string;
}

const projects: Project[] = [
  {
    title: "AVATAR",
    description: "Built an open-source project with the Cloud Computing Club (SCSU) using ML and brainwave data from an Arduino headset to remotely pilot a drone.",
    technologies: ["Machine Learning", "Arduino", "Apache Spark", "Python", "IoT"],
    highlights: [
      "Processed anonymized brainwave signals with Apache Spark for real-time flight prediction and client-side drone control"
    ]
  },
  {
    title: "HEALTHCARE RECORDS MANAGEMENT SYSTEM HRMS",
    description: "Developed a full-stack web app for patient, doctor, billing, and admin modules using React.js, JavaScript, PostgreSQL, MongoDB, HTML, and CSS.",
    technologies: ["React.js", "JavaScript", "PostgreSQL", "MongoDB", "HTML", "CSS"],
    highlights: [
      "Designed a responsive UI for appointments, billing, and records, improving usability and data flow efficiency"
    ]
  },
  {
    title: "VEHICLE PARKING OCCUPANCY USING IOT",
    description: "Built an IoT-based parking solution, specializing in authorization module development, incorporating RFID and ALPR technologies for secure entry.",
    technologies: ["IoT", "RFID", "ALPR", "MQTT", "Python"],
    highlights: [
      "Integrated MQTT for real-time reservations and streamlined payment processing based on entry and exit times, revolutionizing urban parking management",
      "Published a paper on this project"
    ],
    publicationUrl: "http://sersc.org/journals/index.php/IJAST/article/view/14154"
  },
  {
    title: "PART OF SPEECH TAGGING FOR HINDI",
    description: "Developed a Hidden Markov Model for Hindi POS tagging, improving handling of unknown words and smoothing techniques.",
    technologies: ["NLP", "Hidden Markov Model", "Python"],
    highlights: [
      "Advanced Hindi NLP technologies #RHUR2Is8"
    ]
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-projects-title">
          Projects
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover-elevate flex flex-col" data-testid={`card-project-${index}`}>
              <CardHeader>
                <CardTitle className="text-xl" data-testid={`text-project-title-${index}`}>
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm" data-testid={`text-project-description-${index}`}>
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="text-xs"
                      data-testid={`badge-tech-${index}-${idx}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <ul className="list-disc list-outside ml-5 space-y-1 flex-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground" data-testid={`text-highlight-${index}-${idx}`}>
                      {highlight}
                    </li>
                  ))}
                </ul>
                {project.publicationUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-fit"
                    data-testid={`button-publication-${index}`}
                  >
                    <a
                      href={project.publicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Publication
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

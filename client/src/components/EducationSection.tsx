import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

interface Education {
  degree: string;
  institution: string;
  location: string;
  year?: string;
}

const education: Education[] = [
  {
    degree: "Computer Science",
    institution: "St Cloud State University",
    location: "USA",
    year: "GRADUATION"
  },
  {
    degree: "Information Technology",
    institution: "SRM Institute of Science and technology",
    location: "India",
    year: "UNDER GRADUATION"
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl text-center mb-12" data-testid="text-education-title">
          Education
        </h2>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-200" data-testid={`card-education-${index}`}>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1" data-testid={`text-degree-type-${index}`}>
                      {edu.year}
                    </CardTitle>
                    <p className="text-base font-semibold text-foreground" data-testid={`text-degree-${index}`}>
                      {edu.degree}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-primary mb-1" data-testid={`text-institution-${index}`}>
                  {edu.institution}
                </p>
                <p className="text-sm text-muted-foreground" data-testid={`text-edu-location-${index}`}>
                  {edu.location}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

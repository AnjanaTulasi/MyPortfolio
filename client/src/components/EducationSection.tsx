import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
const baseUrl = import.meta.env.BASE_URL;

interface Education {
  degree: string;
  institution: string;
  location: string;
  year?: string;
  logo?: string;
  link?: string;
}

const education: Education[] = [
  {
    degree: "Computer Science",
    institution: "St Cloud State University",
    location: "USA - 2025",
    year: "GRADUATION",
    logo: `${baseUrl}logos/scsu.png`, // place in /public/logos/
    link: "https://www.stcloudstate.edu/"
  },
  {
    degree: "Information Technology",
    institution: "SRM Institute of Science and Technology",
    location: "India - 2020",
    year: "UNDER GRADUATION",
    logo: `${baseUrl}logos/srm.png`, // place in /public/logos/
    link: "https://www.srmist.edu.in/"
  }
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-16 md:py-24 bg-gradient-to-b from-blue-50/50 to-white"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <h2
          className="text-3xl md:text-4xl text-center mb-12 font-semibold text-blue-900 tracking-tight"
          data-testid="text-education-title"
        >
          Education
        </h2>

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="
                shadow-md hover:shadow-2xl hover:border-blue-300 hover:bg-blue-50 
                transition-all duration-300 transform hover:-translate-y-2 
                border border-blue-100 rounded-2xl
              "
              data-testid={`card-education-${index}`}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  {/* Clickable logo without background */}
                  {edu.logo ? (
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-105 transition-transform"
                    >
                      <img
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        className="h-10 w-10 object-contain rounded-md"
                      />
                    </a>
                  ) : (
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                  )}

                  <div className="flex-1">
                    <CardTitle
                      className="text-lg mb-1 text-blue-900 font-semibold"
                      data-testid={`text-degree-type-${index}`}
                    >
                      {edu.year}
                    </CardTitle>
                    <p
                      className="text-base font-semibold text-gray-800"
                      data-testid={`text-degree-${index}`}
                    >
                      {edu.degree}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="text-justify">
                <p
                  className="text-sm font-medium text-blue-700 mb-1"
                  data-testid={`text-institution-${index}`}
                >
                  {edu.institution}
                </p>
                <p
                  className="text-sm text-gray-600"
                  data-testid={`text-edu-location-${index}`}
                >
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

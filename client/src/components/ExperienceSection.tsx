import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const baseUrl = import.meta.env.BASE_URL;

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  logo: string; // Added logo field
  link: string; // Added link field
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    title: "Middleware Engineer",
    company: "NEXT GEN SOFTWARE SOLUTIONS LLC",
    location: "Remote",
    period: "09/2024 to 04/2025",
    logo: `${baseUrl}logos/nextgen.png`,
    link: "https://www.nextgensoftwaresolutions.com/",
    responsibilities: [
      "Administered Oracle WebLogic, Java Fusion Middleware environments, managing deployments, domain administration, and operational efficiency.",
      "Automated routine operations and monitoring using WLST, Bash, and Python, enhancing efficiency and reducing manual intervention.",
      "Troubleshot and resolved technical SOA/IAS and Weblogic performance issues, improving platform uptime and service reliability.",
      "Collaborated in Agile teams via Jira, contributing to infrastructure optimization and cloud adoption initiatives."
    ]
  },
  {
    title: "TRIO Tutor",
    company: "ST CLOUD STATE UNIVERSITY, St. Cloud, MN",
    location: "St. Cloud, MN",
    period: "03/2024 to 05/2025",
    logo: `${baseUrl}logos/scsu.png`,
    link: "https://www.stcloudstate.edu/",
    responsibilities: [
      "Trained students in Mathematics and Computer Science, simplifying complex technical topics through personalized instruction.",
      "Implemented one-on-one tutoring methods and workshops, increasing student engagement and program usability.",
      "Helped students in academic planning, financial aid, and career development, ensuring equitable access to educational resources.",
      "Tracked academic progress and adapted tutoring methods to support diverse learning styles and needs."
    ]
  },
  {
    title: "Graduate Assistantship",
    company: "ST CLOUD STATE UNIVERSITY",
    location: "St. Cloud, MN",
    period: "01/2023 to 01/2024",
    logo: `${baseUrl}logos/scsu.png`,
    link: "https://www.stcloudstate.edu/",
    responsibilities: [
      "Mentored undergraduate students in app development and cloud computing, delivering technical guidance and support.",
      "Guided lab assignments and exam coordination, contributing to preparation of lecture materials and assessments.",
      "Reviewed and tested research papers for clarity, technical accuracy, and proper formatting.",
      "Conducted code reviews, providing feedback to improve coding standards and development practices."
    ]
  },
  {
    title: "Oracle Fusion Middleware / WebLogic Application Support Engineer",
    company: "_VOIS(Vodafone Intelligent Solutions), Pune, India",
    location: "Pune, India",
    period: "11/2019 to 12/2023",
    logo: `${baseUrl}logos/vodafone.png`,
    link: "https://www.vodafone.com/",
    responsibilities: [
      "Administered and supported Oracle Fusion Middleware components including WebLogic 12c, SOA Suite, OSB, and EM, ensuring high availability and peak system performance across production clusters.",
      "Automated deployment workflows to 95% through scripting in Python, WLST, and Bash, reducing deployment complexity.",
      "Reduced incident volume by 70% through proactive health checks, automated monitoring, and preventive strategies using Splunk, AppDynamics, and OCI tools.",
      "Managed performance tuning via JVM optimizations, JMS/JDBC resource allocation, and log rotation for better efficiency.",
      "Integrated Oracle Middleware with OCI services using SSO/LDAP for seamless authentication and SSO integration.",
      "Led deployments using Git and Jenkins, coordinating release cycles and ensuring smooth production rollouts.",
      "Automated deployments, restarts, and configuration management using Python, WLST, Shell scripting, and Terraform, enhancing scalability.",
      "Installed, patched, and upgraded Oracle Middleware platforms, ensuring seamless rollout of new features and security enhancements.",
      "Enhanced SOA Suite and Oracle BPM reliability, reducing downtime by 50%.",
      "Resolved production incidents through capacity analysis and alerting dashboards, cutting response time by 50%.",
      "Performed thread and heap dump analysis to diagnose performance bottlenecks and resolve memory leaks.",
      "Delivered technical consultation and training on Middleware best practices, fostering skill development for scalable CI/CD deployments."
    ]
  },
  {
    title: "Internship",
    company: "ECR ELECTRONICS CORPORATION OF INDIA LIMITED, Hyderabad, India",
    location: "Hyderabad, India",
    period: "03/2017 to 07/2017",
    logo: `${baseUrl}logos/ecil.png`,
    link: "https://www.ecil.co.in/",
    responsibilities: [
      "Developed an Android-based voting app with user registration and ballot submission features using Java and Android SDK.",
      "Designed and implemented a user-friendly UI to simplify polling, improving usability.",
      "Integrated the app with a backend server for secure data storage, authentication, and real-time synchronization.",
      "Collaborated on API development and testing, improving backend efficiency and scalability.",
      "Strengthened skills in application integration, database management, and system performance optimization."
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-16 md:py-24 bg-gradient-to-b from-blue-50/50 to-white"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <h2
          className="text-3xl md:text-4xl text-center mb-12 font-bold text-blue-700"
          data-testid="text-experience-title"
        >
          Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 border border-transparent hover:border-blue-300 hover:bg-blue-50"
              data-testid={`card-experience-${index}`}
            >
              <CardHeader className="pb-3">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <CardTitle
                    className="text-xl md:text-2xl flex-1 text-left text-blue-900"
                    data-testid={`text-job-title-${index}`}
                  >
                    {exp.title}
                  </CardTitle>
                  <Badge
                    variant="secondary"
                    className="text-sm bg-blue-200 text-blue-900"
                    data-testid={`badge-period-${index}`}
                  >
                    {exp.period}
                  </Badge>
                </div>

                {/* Company logo + name row */}
                <div className="flex items-center gap-3 text-left">
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0"
                  >
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-md object-contain hover:scale-105 transition-transform"
                    />
                  </a>
                  <div>
                    <p
                      className="text-base font-semibold text-blue-700"
                      data-testid={`text-company-${index}`}
                    >
                      {exp.company}
                    </p>
                    <p
                      className="text-sm text-gray-600"
                      data-testid={`text-location-${index}`}
                    >
                      {exp.location}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="text-justify">
                <ul className="list-disc list-outside ml-5 space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-sm md:text-base text-gray-700 leading-relaxed"
                      data-testid={`text-responsibility-${index}-${idx}`}
                    >
                      {resp}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

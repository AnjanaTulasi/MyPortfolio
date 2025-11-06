import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    title: "Middleware Engineer",
    company: "NEXT GEN SOFTWARE SOLUTIONS LLC",
    location: "Remote",
    period: "09/2024 to 04/2025",
    responsibilities: [
      "Administered Oracle WebLogic, Java Fusion Middleware environments, managing deployments, domain administration, and operational efficiency",
      "Automated routine operations and monitoring using WLST, Bash, and Python, enhancing efficiency and reducing manual intervention",
      "Troubleshot and resolved technical SOA/IAS and Weblogic performance issues, improving platform uptime and service reliability",
      "Collaborated in Agile teams via Jira, contributing to infrastructure optimization and cloud adoption initiatives"
    ]
  },
  {
    title: "TRIO Tutor",
    company: "ST CLOUD STATE UNIVERSITY, St. Cloud, MN",
    location: "St. Cloud, MN",
    period: "03/2024 to 05/2025",
    responsibilities: [
      "Trained students in Mathematics and Computer Science, simplifying complex technical topics through personalized instruction",
      "Implemented one-on-one tutoring methods and workshops, increasing student engagement and program usability",
      "Helped students in academic planning, financial aid, and career development, ensuring equitable access to educational resources",
      "Tracked academic progress and adapted tutoring methods to support diverse learning styles and needs"
    ]
  },
  {
    title: "Graduate Assistantship",
    company: "ST CLOUD STATE UNIVERSITY",
    location: "St. Cloud, MN",
    period: "03/2024 to 05/2025",
    responsibilities: [
      "Mentored undergraduate students in app development and cloud computing, delivering technical guidance and support",
      "Guided lab assignments and exam coordination, contributing to preparation of lecture materials and assessments",
      "Reviewed and tested test research papers for clarity, technical accuracy, and proper formatting",
      "Conducted code reviews, providing feedback to improve coding standards and development practices"
    ]
  },
  {
    title: "Oracle Fusion Middleware / WebLogic Application Support Engineer",
    company: "VGS VODAFONE, Pune, India",
    location: "Pune, India",
    period: "11/2019 to 08/2024",
    responsibilities: [
      "Administered and supported Oracle Fusion Middleware components including WebLogic 12c, SOA Suite, OSB, and EM, ensuring high availability and peak system performance across production clusters",
      "Automated deployment workflows to 95% through scripting in Python, WLST, and Bash, reducing deployment complexity while reducing deployment complexity",
      "Reduced incident volume by 70% through proactive health checks, automated health checks, and preventive monitoring strategies using Splunk, AppDynamics, and OCI tools",
      "Managed performance tuning via JVM optimizations, JMS/JDBC resource allocation, and log rotation, automated health checks, and preventive monitoring strategies",
      "Integrated Oracle Middleware with OCI services using SSO/LDAP for seamless user authentication and SSO integration",
      "Led deployments using Git and Jenkins, coordinating release cycles, WLST/Python scripts, ensuring production deployments ran smoothly",
      "Automated deployments, restarts, and configuration management using Python, WLST, Shell scripting, and Terraform, enhancing scalability and enabling proactive diagnostics for container orchestration, and CI/CD pipelines for automated rollouts",
      "Installed, patched, and upgraded Oracle Middleware platforms, ensuring seamless rollout of new features and security enhancements",
      "Enhanced SOA Suite and Oracle BPM reliability, reducing downtime time by 50%",
      "Resolved production incidents by 50% through proactive health checks, capacity sizing tables, AppDynamics, and custom alerting dashboards, cutting incident response time by 50%",
      "Consulted detailed thread and heap dump analysis to diagnose performance bottlenecks, resolve memory leaks, and improve application responsiveness, ensuring smooth deployment across distributed enterprise systems",
      "Delivered technical consultation and training to teams on Middleware best practices and CI/CD workflows, fostering skills development for scalable deployments, Kubernetes for container orchestration, and CI/CD pipelines for automated rollouts",
      "Reviewed API-level integrations to validate service functionality across distributed enterprise systems and ensure system stability and compliance across environments"
    ]
  },
  {
    title: "Internship",
    company: "ECR ELECTRONICS CORPORATION OF INDIA LIMITED, Hyderabad, India",
    location: "Hyderabad, India",
    period: "03/2017 to 07/2017",
    responsibilities: [
      "Developed an Android-based app using app with features like user registration and ballot submission using Java and Android SDK",
      "Designed and implemented a user-friendly UI to simplify polling, improving usability",
      "Integrated the application with a backend server to enable data storage, vote data, secure authentication, and real-time data synchronization",
      "Collaborated on API development and testing, improving backend efficiency and scalability",
      "Strengthened skills in application integration, database management, and system performance optimization"
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl text-center mb-12" data-testid="text-experience-title">
          Experience
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-200" data-testid={`card-experience-${index}`}>
              <CardHeader className="pb-3">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <CardTitle className="text-xl md:text-2xl flex-1" data-testid={`text-job-title-${index}`}>
                    {exp.title}
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm" data-testid={`badge-period-${index}`}>
                    {exp.period}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <p className="text-base font-semibold text-primary" data-testid={`text-company-${index}`}>
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid={`text-location-${index}`}>
                    {exp.location}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-outside ml-5 space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-sm md:text-base text-muted-foreground" data-testid={`text-responsibility-${index}-${idx}`}>
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

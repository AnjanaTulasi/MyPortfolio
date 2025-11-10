import { motion } from "framer-motion";
import profileImage from "@assets/IMG_0864_1762449106433.jpeg";

export default function HeroSection() {
  return (
    <section id="hero" className="py-16 md:py-24 bg-gradient-to-b from-blue-50/40 to-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        <div className="grid md:grid-cols-[1.3fr_1fr] items-center gap-6 md:gap-12">

          {/* Image Section — first on mobile, second on desktop */}
          <motion.div
            className="flex justify-center md:justify-end order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-blue-200">
              <img
                src={profileImage}
                alt="Anjana Tulasi D"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 25%", transform: "scale(1.3)" }}
              />
            </div>
          </motion.div>

          {/* Text Section — second on mobile, first on desktop */}
          <motion.div
            className="space-y-6 max-w-4xl order-2 md:order-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-blue-900"
                data-testid="text-name"
              >
                Anjana Tulasi D
              </h1>
              <p
                className="text-xl md:text-2xl text-blue-600 font-medium text-left"
                data-testid="text-title"
              >
                DevOps & Middleware Engineer
              </p>
            </div>

            <p
              className="text-base md:text-lg leading-relaxed text-justify text-gray-700"
              data-testid="text-bio"
            >
              Dynamic and results-oriented <b>DevOps and Middleware Engineer</b> with 4 years of extensive experience in 
              <b> Oracle Fusion Middleware administration</b>, <b>WebLogic Server management</b>, and 
              <b> cloud infrastructure automation</b>. Skilled in deploying, monitoring, and optimizing enterprise-grade 
              systems across on-premises and hybrid cloud environments (<b>OCI, AWS</b>). Strong background in 
              <b> Infrastructure as Code (Terraform)</b>, <b>CI/CD automation</b>, and <b>middleware performance tuning</b>. 
              Proficient in <b>Python</b>, <b>WLST</b>, and <b>Shell scripting</b> to streamline deployments, automate 
              maintenance, and enhance system reliability. Hands-on experience with <b>WebLogic migrations (11g → 12c)</b>, 
              <b> SOA Suite</b>, <b>OSB</b>, and <b>AIA integration</b>. Adept at implementing monitoring and alerting solutions 
              using <b>Splunk</b>, <b>AppDynamics</b>, and <b>OCI tools</b>, driving incident reduction and uptime improvement. 
              Known for a proactive, analytical approach to problem-solving, cross-functional collaboration, and delivering 
              secure, high-availability environments that align with <b>DevOps best practices</b>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

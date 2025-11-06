import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 relative overflow-hidden"
    >
      {/* Decorative gradient circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200/50 rounded-full blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-6 md:px-8 lg:px-12 text-center">
        <h2 className="text-4xl font-bold mb-4 text-blue-900">Let’s Connect!</h2>
        <p className="max-w-2xl mx-auto mb-10 text-gray-700 text-lg text-justify">
          I’d love to connect with professionals, recruiters, and collaborators interested in technology, 
          cloud infrastructure, and innovation. Whether you want to discuss an opportunity, a project, 
          or just share ideas, feel free to reach out anytime!
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            variant="outline"
            className="flex items-center gap-2 px-6 py-3 bg-white text-blue-700 border-blue-300 
              shadow-md hover:shadow-xl hover:-translate-y-1 hover:bg-blue-100 transition-all duration-300"
          >
            <a
              href="https://www.linkedin.com/in/anjanatulasid/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="flex items-center gap-2 px-6 py-3 bg-white text-gray-800 border-gray-300 
              shadow-md hover:shadow-xl hover:-translate-y-1 hover:bg-gray-100 transition-all duration-300"
          >
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" /> GitHub
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="flex items-center gap-2 px-6 py-3 bg-white text-purple-700 border-purple-300 
              shadow-md hover:shadow-xl hover:-translate-y-1 hover:bg-purple-100 transition-all duration-300"
          >
            <a href="mailto:anjanatdeverapalli@gmail.com">
              <Mail className="w-5 h-5" /> Email Me
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="flex items-center gap-2 px-6 py-3 bg-white text-green-700 border-green-300 
              shadow-md hover:shadow-xl hover:-translate-y-1 hover:bg-green-100 transition-all duration-300"
          >
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="w-5 h-5" /> Resume
            </a>
          </Button>
        </div>

        
      </div>
    </section>
  );
}

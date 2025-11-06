import profileImage from "@assets/IMG_0864_1762449106433.jpeg";

export default function HeroSection() {
  return (
    <section id="hero" className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2" data-testid="text-name">
                Anjana Tulasi D
              </h1>
              <p className="text-xl md:text-2xl text-primary font-medium text-left" data-testid="text-title">
                DevOps & Middleware Engineer
              </p>
            </div>
            <p className="text-base md:text-lg leading-relaxed" data-testid="text-bio">
              Dynamic and results-oriented DevOps and Middleware Engineer with 4 years extensive experience in Oracle Fusion Middleware administration, WebLogic Server management, and cloud infrastructure automation. Skilled in deploying, monitoring, and optimizing enterprise-grade systems across on-premises and hybrid cloud environments (OCI, AWS). Strong background in Infrastructure as Code (Terraform), CI/CD automation, and middleware performance tuning. Proficient in Python, WLST, and Shell scripting to streamline deployments, automate maintenance, and enhance system reliability.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md rounded-lg overflow-hidden shadow-xl" style={{ aspectRatio: '2/3' }}>
              <img
                src={profileImage}
                alt="Anjana Tulasi D - DevOps Engineer"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 15%', transform: 'scale(1.4)' }}
                data-testid="img-profile"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

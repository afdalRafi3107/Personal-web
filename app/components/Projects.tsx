export default function Projects() {
  const projects = [
    {
      title: "Circle",
      description:
        "A social media web app inspired by Threads that enables users to post, interact, and engage in real-time through an intuitive interface and a robust backend system.",
      tech: ["React", "TypeScript", "Tailwind", "Express.js"],
      image: "img/portofolio/circle.png",
      git: "https://github.com/afdalRafi3107/circle-fe.git",
      demo: "https://circle-umber.vercel.app/login",
    },
    {
      title: "AuraForecast",
      description:
        "An interactive weather app that provides real-time global weather updates in a clear and engaging interface.",
      tech: ["React", "Tailwind", "Golang"],
      image: "img/portofolio/aura.png",
      git: "https://github.com/afdalRafi3107/WeatherApp.git",
      demo: "",
    },
    {
      title: "DapurKu",
      description:
        "AI-powered recipe generator that creates instant, step-by-step cooking recipes based on ingredients users have at home, complete with real-time previews and downloadable PDFs.",
      tech: ["Vue.js", "tailwind", "Google Ai Studio"],
      image: "img/portofolio/dapurku.png",
      git: "https://github.com/afdalRafi3107/ResepAi.git",
      demo: "https://dapurku.vercel.app",
    },
    {
      title: "CVKU",
      description:
        "A web application that allows users to easily design and generate professional resumes with customizable layouts and a modern interface.",
      tech: ["React", "Tailwind", "JsPDF"],
      image: "img/portofolio/cvku.png",
      git: "https://github.com/afdalRafi3107/CVKU.git",
      demo: "https://cvku-omega.vercel.app",
    },
  ];
  return (
    <>
      <section
        id="projects"
        className="w-full flex flex-col gap-10 justify-center py-15"
      >
        {/* garis */}
        <div className=" relative flex flex-row w-full items-center">
          <div className=" text-white px-2 py-2 w-fit rounded font-bold text-sm nptransform whitespace-nowrap shadow-xl bg-orange-500">
            PROJECTS
          </div>
          <div className="h-0.5 w-full bg-orange-500"></div>
        </div>

        {/* grid project */}
        <div className="grid md:grid-cols-2 gap-6 w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full p-5 group overflow-hidden border border-purple-700/40 bg-gradient-to-b from-[#1a103d]/60 to-[#0b0c1a]/60 shadow-[0_0_20px_rgba(147,51,234,0.3)] rounded-xl hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500  group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>

              <div className="p-6 space-y-4 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  {project.demo != "" && (
                    <a
                      href={`${project.demo}`}
                      className=" text-sm text-primary hover:underline"
                    >
                      Live Demo
                    </a>
                  )}

                  <a
                    href={`${project.git}`}
                    className=" text-sm text-primary hover:underline"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

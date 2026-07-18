function Projects() {
  const projects = [
    {
      title: "AI Update Tracker",
      desc: "Tracks latest AI app updates automatically.",
      tech: "React, Tailwind"
    },
    {
      title: "Book Management System",
      desc: "Manages books and availability tracking.",
      tech: "Power Automate, SharePoint"
    },
    {
      title: "Teacher Availability System",
      desc: "Tracks teacher assignments and requirements.",
      tech: "Power Automate"
    }
  ]

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4">
                {project.desc}
              </p>

              <p className="text-cyan-400">
                {project.tech}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
const skills = [
  "Python", "SQL", "C",
  "Git", "GitHub", "Docker",
  "Snowflake", "Google Cloud Platform", "Kafka", "ETL",
  "Power BI", "Excel", "SharePoint", "Power Automate", "Power Apps", "Microsoft 365",
]

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span key={skill} className="px-4 py-2 bg-gray-100 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
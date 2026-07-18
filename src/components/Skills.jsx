import { motion } from "framer-motion"

const skills = [
  "Python", "SQL", "C",
  "Git", "GitHub", "Docker",
  "Snowflake", "Google Cloud Platform", "Kafka", "ETL",
  "Power BI", "Excel", "SharePoint", "Power Automate", "Power Apps", "Microsoft 365",
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <motion.div
        className="flex flex-wrap gap-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        {skills.map((skill) => (
          <motion.span
            key={skill}
            variants={item}
            className="px-4 py-2 bg-gray-100 rounded-full text-sm text-black"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  )
}
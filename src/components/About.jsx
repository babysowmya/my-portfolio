import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-6 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p>
          I'm a final-year B.Tech student in Computer Science (Data Science) at Aditya College
          of Engineering and Technology, with a CGPA of 8.7. My interest in data engineering
          grew through hands-on projects — from building an end-to-end ETL pipeline for
          e-commerce analytics with Airflow and Docker, to designing a data quality validation
          framework in Python and Pandas, to provisioning cloud infrastructure with Terraform.
          I work comfortably across Python, SQL, and tools like Snowflake, Kafka, and Google
          Cloud Platform, and I enjoy turning messy, real-world data into pipelines and systems
          that are reliable and scalable. I'm currently focused on deepening my data engineering
          skills and looking for opportunities to apply them on real production systems.
        </p>
      </motion.div>
    </section>
  )
}
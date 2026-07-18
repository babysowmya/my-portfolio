import { motion } from "framer-motion"

const projects = [
  {
    title: "End-to-End ETL Pipeline for E-Commerce Analytics",
    description: "Built an ETL pipeline to ingest, transform, and load e-commerce data into a PostgreSQL data warehouse. Automated scheduling and monitoring with Apache Airflow and Docker, with CI/CD via GitHub, plus Power BI dashboards for business insights.",
    tech: "Python, SQL, PostgreSQL, Airflow, Docker, Power BI",
    link: "https://github.com/babysowmya/ecommerce-data-pipeline-23P31A4444",
  },
  {
    title: "Offline Customer Support Chatbot (Llama 3.2)",
    description: "Built an offline chatbot using Ollama and Llama 3.2 for e-commerce customer support. Compared Zero-Shot and One-Shot prompting techniques and evaluated responses for accuracy and helpfulness.",
    tech: "Python, Ollama, Llama 3.2",
    link: "https://github.com/babysowmya/offline_chatbot",
  },
  {
    title: "Data Quality Validation Framework",
    description: "Built a framework to validate data quality across datasets using Python and Pandas, catching inconsistencies and errors before data reaches downstream systems.",
    tech: "Python, Pandas",
    link: "https://github.com/babysowmya/data_quality_framework",
  },
  {
    title: "Automated Data Pipeline Infrastructure",
    description: "Provisioned and automated data pipeline infrastructure using Terraform and Docker, with LocalStack for local AWS service emulation and testing.",
    tech: "Terraform, Docker, LocalStack, AWS",
    link: "https://github.com/babysowmya/automated_data_pipeline",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="border rounded-xl p-5"
          >
            <h3 className="font-bold text-lg">{p.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{p.description}</p>
            <p className="text-xs text-gray-400 mt-2">{p.tech}</p>
            <a href={p.link} className="text-sm underline mt-3 inline-block">
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
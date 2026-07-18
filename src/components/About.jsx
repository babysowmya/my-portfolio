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
          Engineering student in Computer Science (Data Science) at Aditya College of
          Engineering and Technology. I have a strong foundation in Python and SQL, and I enjoy
          building data pipelines and automating workflows. I'm currently working on transitioning
          into a career in Data Engineering.
        </p>
      </motion.div>
    </section>
  )
}
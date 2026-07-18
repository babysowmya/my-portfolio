import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Sunkara Sowmya
        </h1>

        <p className="text-xl text-gray-300 mb-6">
          Frontend Developer & UI Designer
        </p>

        <a
          href="#projects"
          className="bg-cyan-500 px-6 py-3 rounded-xl"
        >
          View Projects
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
import { motion } from "framer-motion"
import { Parallax } from "react-scroll-parallax"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">

      {/* Decorative parallax background shape */}
      <Parallax speed={-15} className="absolute inset-0 -z-10 flex justify-center items-center">
        <div className="w-[500px] h-[500px] rounded-full bg-gray-100 blur-3xl opacity-70" />
      </Parallax>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold">Sunkara Sowmya</h1>
        <p className="text-xl text-gray-500 mt-4">Aspiring Data Engineer</p>
        <p className="max-w-xl mt-4">
          Engineering student building scalable data pipelines and automation systems with Python, SQL, and cloud tools.
        </p>
        <a href="#projects" className="mt-6 inline-block px-6 py-3 bg-black text-white rounded-full">
          View My Work
        </a>
      </motion.div>
    </section>
  )
}
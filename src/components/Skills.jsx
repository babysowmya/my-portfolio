import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa"

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-slate-800 p-6 rounded-2xl text-center">
            <FaReact size={50} className="mx-auto mb-4" />
            React
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl text-center">
            <FaHtml5 size={50} className="mx-auto mb-4" />
            HTML
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl text-center">
            <FaCss3Alt size={50} className="mx-auto mb-4" />
            CSS
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl text-center">
            <FaJs size={50} className="mx-auto mb-4" />
            JavaScript
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
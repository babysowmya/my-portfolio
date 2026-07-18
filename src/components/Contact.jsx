function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="mb-4">
          Email:
          <a
            href="mailto:sowmya@example.com"
            className="text-cyan-400 ml-2"
          >
            sowmya@example.com
          </a>
        </p>

        <p>
          GitHub:
          <a
            href="https://github.com/"
            className="text-cyan-400 ml-2"
          >
            GitHub Profile
          </a>
        </p>
      </div>
    </section>
  )
}

export default Contact
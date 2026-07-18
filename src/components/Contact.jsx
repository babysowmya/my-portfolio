export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
      <a href="mailto:sowmyasunkara41@gmail.com" className="underline">
        sowmyasunkara41@gmail.com
      </a>
      <div className="flex gap-6 mt-4">
        <a href="https://github.com/babysowmya" className="underline">GitHub</a>
        <a href="https://www.linkedin.com/in/sunkara-sowmya-017270291/" className="underline">LinkedIn</a>
      </div>
    </section>
  )
}
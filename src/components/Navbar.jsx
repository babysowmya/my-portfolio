export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur z-50">
      <span className="font-bold text-lg">Sunkara Sowmya</span>
      <div className="space-x-6 hidden md:flex">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}
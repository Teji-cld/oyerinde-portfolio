export default function Navbar() {
  return (
    <header className="nav">
      <a className="brand" href="#home" aria-label="Oyerinde home">OA<span>·</span></a>
      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
      </nav>
      <a className="availability" href="#contact">
        <span className="availability-dot" />
        Available for opportunities
      </a>
    </header>
  );
}
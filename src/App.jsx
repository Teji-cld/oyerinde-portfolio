import Navbar from "./components/Navbar";
import ResponseCurve from "./components/ResponseCurve";
import ProjectPanel from "./components/ProjectPanel";
import { projects } from "./data/projects";
import { Github, Linkedin, ArrowUpRight, Mail } from "lucide-react";

const skillGroups = [
  {
    title: "CLOUD & INFRASTRUCTURE",
    items: ["AWS", "EC2", "S3", "VPC", "IAM", "Application Load Balancer", "Auto Scaling", "Security Groups", "CloudWatch"]
  },
  {
    title: "SERVERLESS & BACKEND",
    items: ["AWS Lambda", "API Gateway", "DynamoDB", "REST APIs", "Event-driven architecture"]
  },
  {
    title: "PROGRAMMING",
    items: ["Python", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "TOOLS",
    items: ["Git", "GitHub", "VS Code", "Figma"]
  }
];

function SectionLabel({ children }) {
  return <div className="section-label">{children}</div>;
}

export default function App() {
  return (
    <div className="site">
      <Navbar />

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow">OYERINDE ABDULSOMAD AKINTEJIOYE</div>
            <h1>Building Cloud &amp; <em>Backend Systems</em></h1>
            <p className="hero-sub">
              Cloud engineering learner building hands-on AWS infrastructure, serverless
              applications, and scalable backend systems.
            </p>
            <div className="hero-actions">
              <a className="cta" href="#projects">View projects <ArrowUpRight size={15} /></a>
              <a className="text-link" href="https://github.com/Teji-cld" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in a new tab)"><Github size={15} /> GitHub</a>
              <a className="text-link" href="https://www.linkedin.com/in/abdulsomad-oyerinde-48229726b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in a new tab)"><Linkedin size={15} /> LinkedIn</a>
            </div>
          </div>
          <ResponseCurve />
        </section>

        <section id="about" className="section about">
          <SectionLabel>ABOUT / 01</SectionLabel>
          <div className="two-col">
            <div>
              <h2>Building through <span>systems.</span></h2>
            </div>
            <div className="about-copy">
              <p>
                I&apos;m a cloud engineering learner focused on designing, deploying, and
                understanding cloud infrastructure and backend systems with AWS.
              </p>
              <p>
                I&apos;ve built hands-on projects across highly available infrastructure,
                serverless applications, API-driven systems, and cloud-based data
                persistence. My approach is practical: learn the underlying concept,
                build it independently, test it, and document what I learned.
              </p>
              <p>
                I&apos;m currently expanding into event-driven architecture, Infrastructure
                as Code, automation, containers, and DevOps.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <SectionLabel>SKILLS / 02</SectionLabel>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-panel" key={group.title}>
                <div className="mono-label">{group.title}</div>
                <div className="skill-tags">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects">
          <SectionLabel>PROJECTS / PROOF OF WORK</SectionLabel>
          <div className="section-intro">
            <h2>Real infrastructure. <span>Real systems.</span></h2>
            <p>Three builds documenting the progression from AWS infrastructure into serverless application design.</p>
          </div>
          <div className="project-stack">
            {projects.map((project, index) => (
              <ProjectPanel project={project} index={index} key={project.title} />
            ))}
          </div>
        </section>

        <section id="experience" className="section experience">
          <div className="experience-col">
            <SectionLabel>EXPERIENCE / 03</SectionLabel>
            <div className="experience-item">
              <span className="mono-label">VIRTUAL ASSISTANT · SOCIAL MEDIA</span>
              <h3>Operations, communication &amp; community support</h3>
              <p>Supporting health/performance coaching work and crypto community operations across research, communication and social media workflows.</p>
            </div>
            <div className="experience-item">
              <span className="mono-label">GOOGLE DEVELOPERS CLUB · UNIVERSITY OF ILORIN</span>
              <h3>Technical community &amp; leadership</h3>
              <p>Participating in technical community building and peer learning around software and technology.</p>
            </div>
          </div>

          <div className="learning-col">
            <SectionLabel>CURRENT FOCUS</SectionLabel>
            <div className="learning-board">
              {["Advanced serverless architecture", "Python for cloud", "DynamoDB data modeling", "API design", "Cloud security", "CI/CD", "Infrastructure as Code"].map((item, i) => (
                <span key={item} className={i === 0 ? "learning-tag active" : "learning-tag"}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <SectionLabel>CONTACT / 04</SectionLabel>
          <div className="contact-grid">
            <div>
              <h2>Let's build something <span>useful.</span></h2>
              <p>Interested in cloud engineering, backend systems or collaborating on a project? Let's connect.</p>
            </div>
            <div className="contact-links">
              <a href="mailto:akintejioye04@gmail.com"><Mail size={16} /> akintejioye04@gmail.com</a>
              <a href="https://www.linkedin.com/in/abdulsomad-oyerinde-48229726b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in a new tab)"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} /></a>
              <a href="https://github.com/Teji-cld" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in a new tab)"><Github size={16} /> GitHub <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>OYERINDE ABDULSOMAD AKINTEJIOYE</span>
        <span>Building, learning, and shipping with cloud technology.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

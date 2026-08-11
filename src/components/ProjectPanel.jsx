import { useState } from "react";
import Architecture from "./Architecture";

export default function ProjectPanel({ project, index }) {
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState(0);
  const activeScreenshot = project.screenshots[activeScreenshotIndex];

  return (
    <article className="project-panel">
      <div className="project-meta">
        <span className="pattern">PATTERN: {project.pattern}</span>
        <div className="service-list">
          {project.services.map((service) => (
            <span className="service" key={service}>{service}</span>
          ))}
        </div>
      </div>

      <div className="project-heading">
        <div className="project-index">BUILD {String(index + 1).padStart(2, "0")}</div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <div className="problem-row">
        <span className="mono-label">PROBLEM</span>
        <span>{project.problem}</span>
      </div>

      <div className="architecture-wrap">
        <div className="mono-label">SYSTEM FLOW</div>
        <Architecture nodes={project.architecture} />
      </div>

      <div className="project-grid">
        <div className="project-gallery" aria-label={`${project.title} screenshots`}>
          <div className="screenshot-frame">
            <div className="frame-label">SCREENSHOT / {String(activeScreenshotIndex + 1).padStart(2, "0")}</div>
            <img
              className="primary-screenshot"
              key={activeScreenshot.src}
              src={activeScreenshot.src}
              alt={activeScreenshot.alt}
            />
          </div>

          <div className="gallery-thumbnails" aria-label="Choose a project screenshot">
            {project.screenshots.map((screenshot, screenshotIndex) => (
              <button
                type="button"
                className={`gallery-thumbnail${screenshotIndex === activeScreenshotIndex ? " is-active" : ""}`}
                key={screenshot.src}
                onClick={() => setActiveScreenshotIndex(screenshotIndex)}
                aria-label={`Show ${screenshot.alt}`}
                aria-pressed={screenshotIndex === activeScreenshotIndex}
              >
                <img src={screenshot.src} alt="" />
                <span>{String(screenshotIndex + 1).padStart(2, "0")}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="lessons">
          <div className="mono-label">WHAT I LEARNED</div>
          <ul>
            {project.lessons.map((lesson) => <li key={lesson}>{lesson}</li>)}
          </ul>
          <div className="project-links">
            <a href={project.github} aria-label={`GitHub repository for ${project.title}`}>GitHub ↗</a>
            <a href={project.demo} aria-label={`Live demo for ${project.title}`}>Live demo ↗</a>
          </div>
        </div>
      </div>
    </article>
  );
}

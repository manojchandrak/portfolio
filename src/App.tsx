import profilePhoto from "./assets/profile.jpg";
import "./App.css";
import { Nav } from "./components/Nav";
import { Reveal } from "./components/Reveal";
import { education, experience, personal, projects, skillGroups } from "./data";

function Hero() {
  return (
    <header className="hero" id="home">
      <div className="hero-blobs" aria-hidden="true">
        <span className="blob blob-a" />
        <span className="blob blob-b" />
      </div>
      <div className="container hero-inner">
        <div className="avatar-ring">
          <img src={profilePhoto} alt={personal.name} className="avatar" />
        </div>
        <p className="eyebrow">Hi, I'm</p>
        <h1>{personal.name}</h1>
        <p className="hero-title">{personal.title}</p>
        <p className="hero-tagline">{personal.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={personal.resumeFile} download>
            Download Resume
          </a>
          <a className="btn btn-ghost" href={`mailto:${personal.email}`}>
            Email Me
          </a>
          <a className="btn btn-ghost" href={personal.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="btn btn-ghost" href={personal.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <h2>About</h2>
          <p className="about-text">{personal.summary}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <Reveal>
          <h2>Skills</h2>
        </Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 60} className="skill-card">
              <h3>{group.label}</h3>
              <div className="chip-row">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal>
          <h2>Experience</h2>
        </Reveal>
        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal as="article" key={`${job.company}-${job.period}`} delay={i * 80} className="timeline-item">
              <div className="timeline-meta">
                <span className="timeline-period">{job.period}</span>
              </div>
              <div className="timeline-body">
                <h3>{job.role}</h3>
                <p className="timeline-company">{job.company}</p>
                <ul>
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <Reveal>
          <h2>Projects</h2>
        </Reveal>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 70}>
              <a className="project-card" href={project.url} target="_blank" rel="noreferrer">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <span className="project-tech">{project.tech}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <Reveal>
          <h2>Education</h2>
        </Reveal>
        <div className="education-grid">
          {education.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 70} className="education-card">
              <h3>{edu.degree}</h3>
              <p>{edu.school}</p>
              <p className="education-meta">
                {edu.period} · {edu.detail}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>{personal.name}</p>
        <div className="footer-links">
          <a href={`mailto:${personal.email}`}>{personal.email}</a>
          <span>·</span>
          <a href={`tel:${personal.phone}`}>{personal.phone}</a>
          <span>·</span>
          <a href={personal.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span>·</span>
          <a href={personal.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Footer />
    </>
  );
}

export default App;

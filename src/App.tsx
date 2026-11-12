import { useEffect, useState } from "react";
import profilePhoto from "./assets/profile.jpg";
import "./App.css";
import { Nav } from "./components/Nav";
import { Reveal } from "./components/Reveal";
import { education, experience, personal, projects, skillGroups, type Project } from "./data";

function Hero() {
  return (
    <header className="hero" id="home">
      <div className="container hero-inner">
        <img src={profilePhoto} alt={personal.name} className="avatar" />
        <p className="hero-kicker">{personal.title}</p>
        <h1>{personal.name}</h1>
        <p className="hero-tagline">{personal.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={personal.resumeFile} download>
            Download resume
          </a>
          <a className="btn btn-ghost" href={`mailto:${personal.email}`}>
            Email
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

function SectionHead({ label, title }: { label: string; title: string }) {
  return (
    <Reveal>
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
    </Reveal>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHead label="About" title="Building for the web, end to end." />
        <Reveal>
          <p className="about-text">{personal.summary}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHead label="Skills" title="Tools I work with." />
        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 40} className="skill-row">
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

const COLLAPSED = 4;

function Job({ job, index }: { job: (typeof experience)[number]; index: number }) {
  const [open, setOpen] = useState(false);
  const extra = job.highlights.length - COLLAPSED;
  const shown = open ? job.highlights : job.highlights.slice(0, COLLAPSED);
  return (
    <Reveal as="article" delay={index * 60} className="job">
      <div className="job-head">
        <div>
          <h3>{job.role}</h3>
          <p className="job-company">{job.company}</p>
        </div>
        <span className="job-period">{job.period}</span>
      </div>
      <ul>
        {shown.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      {extra > 0 && (
        <button className="more" type="button" onClick={() => setOpen(!open)} aria-expanded={open}>
          {open ? "Show less" : `Show ${extra} more`}
        </button>
      )}
    </Reveal>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHead label="Experience" title="Where I've worked." />
        <div className="jobs">
          {experience.map((job, i) => (
            <Job key={`${job.company}-${job.period}`} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Every public repo of the GitHub user, newest push first, merged with the hand-written details in data.ts. */
function useRepoProjects(user: string): Project[] {
  const [repos, setRepos] = useState<Project[]>(projects);
  useEffect(() => {
    fetch(`https://api.github.com/users/${user}/repos?per_page=100&sort=pushed`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((list: { name: string; description: string | null; language: string | null; html_url: string; pushed_at: string }[]) => {
        const known = new Map(projects.map((p) => [p.url.toLowerCase(), p]));
        setRepos(
          [...list]
            .sort((a, b) => b.pushed_at.localeCompare(a.pushed_at))
            .map((r) => known.get(r.html_url.toLowerCase()) ?? { name: r.name, description: r.description ?? "", tech: r.language ?? "", url: r.html_url }),
        );
      })
      .catch(() => {});
  }, [user]);
  return repos;
}

function Projects() {
  const ordered = useRepoProjects("manojchandrak");
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead label="Projects" title="Things I've built." />
        <div className="projects-grid">
          {ordered.map((project, i) => (
            <Reveal key={project.name} delay={i * 70}>
              <a className="project-card" href={project.url} target="_blank" rel="noreferrer">
                <h3>{project.name}<span className="arrow" aria-hidden="true"> ↗</span></h3>
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
        <SectionHead label="Education" title="Where I studied." />
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

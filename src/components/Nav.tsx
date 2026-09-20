import { useEffect, useState } from "react";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
];

export function Nav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="nav">
      <div className="nav-inner">
        {LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`nav-link${active === link.id ? " nav-link-active" : ""}`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

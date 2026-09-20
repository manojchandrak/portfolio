import { useEffect, useRef, useState, type ReactNode, type Ref } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "article";
}

/** Fades/slides children in once they scroll into view. Triggers only once. */
export function Reveal({ children, className = "", delay = 0, as = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as;
  return (
    <Tag
      ref={ref as Ref<HTMLDivElement & HTMLElement>}
      className={`reveal${visible ? " reveal-visible" : ""}${className ? ` ${className}` : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

"use client";

import { useEffect, useState, useRef } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "goals", label: "Goals" },
  { id: "contact", label: "Contact" },
];

export function ScrollSpy() {
  const [activeSection, setActiveSection] = useState<string>("");
  const circleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const containerRef = useRef<HTMLUListElement | null>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: "-20% 0px -60% 0px",
          threshold: 0,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  useEffect(() => {
    const activeIndex = sections.findIndex((s) => s.id === activeSection);
    if (activeIndex >= 0 && circleRefs.current[activeIndex] && containerRef.current) {
      const circle = circleRefs.current[activeIndex];
      const container = containerRef.current;
      if (circle) {
        const circleRect = circle.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        setLineHeight(circleRect.top - containerRect.top + circleRect.height / 2);
      }
    }
  }, [activeSection]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
      <div className="relative">
        {/* 縦の線 */}
        <div className="absolute left-[7px] top-0 h-full w-px bg-border" />

        {/* アクティブな位置を示す線（最初の円から現在の円まで） */}
        {lineHeight > 0 && (
          <div
            className="absolute left-[7px] w-px bg-primary transition-all duration-300 ease-out"
            style={{ top: "8px", height: `${lineHeight - 8}px` }}
          />
        )}

        {/* セクションの円 */}
        <ul ref={containerRef} className="relative flex flex-col gap-10">
          {sections.map(({ id, label }, index) => (
            <li key={id}>
              <button
                onClick={() => handleClick(id)}
                className="group flex items-center gap-3"
                aria-label={`Go to ${label}`}
              >
                {/* 円 */}
                <span
                  ref={(el) => { circleRefs.current[index] = el; }}
                  className={`relative z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                    activeSection === id
                      ? "border-primary bg-primary scale-125"
                      : "border-muted-foreground bg-background hover:border-primary hover:scale-110"
                  }`}
                >
                  {activeSection === id && (
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  )}
                </span>

                {/* ラベル（ホバー時に表示） */}
                <span
                  className={`text-sm font-medium opacity-0 transition-all duration-200 group-hover:opacity-100 ${
                    activeSection === id
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

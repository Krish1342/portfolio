import React, { useRef, useEffect, useState } from "react";
import { experience, volunteering } from "../data/experience";

/*
  Experience — NOT cards. NOT a generic timeline with dots.
  Each entry is a full-width row: date on left, rest on right.
  Separated by dividers. Clean editorial layout.
*/

export function Experience() {
  const all = [
    ...experience.map((e) => ({ ...e, kind: "work" })),
    ...volunteering.map((v) => ({ ...v, kind: "community" })),
  ];

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 sm:py-36 px-6 sm:px-10">
      <div className="max-w-[1400px] mx-auto">
        <p className="font-mono text-xs text-muted uppercase tracking-[0.3em] mb-3">
          Experience
        </p>
        <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-fg tracking-tight">
          Where I've been.
        </h2>

        <div className="mt-16">
          {all.map((item, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <div className="divider" />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 sm:py-14 group">
                {/* Left column — date + type */}
                <div className="md:col-span-3">
                  <p className="font-mono text-xs text-muted">{item.date}</p>
                  <p className="font-mono text-xs text-accent mt-1 uppercase tracking-wider">
                    {item.kind === "work" ? "Internship" : "Community"}
                  </p>
                </div>

                {/* Right column — title, company, description */}
                <div className="md:col-span-9">
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-fg group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-muted mt-1">
                    {item.event}
                  </p>
                  <p className="font-body text-muted text-sm sm:text-base leading-relaxed mt-4 max-w-2xl">
                    {item.description}
                  </p>

                  {/* Tags as inline text */}
                  <p className="font-mono text-xs text-[#2a2a2a] mt-5 group-hover:text-muted transition-colors duration-500">
                    {item.tags.join(" · ")}
                  </p>
                </div>
              </div>
              {idx === all.length - 1 && <div className="divider" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

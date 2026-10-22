import React, { useRef, useEffect, useState } from "react";

/*
  Skills section — NO cards, NO grids of pills.
  Two opposing infinite marquee ribbons of raw tech names.
  Below that, a clean two-column breakdown: category name left, skills right as flowing text.
*/

const row1 = [
  "Python", "React", "FastAPI", "TensorFlow", "LangGraph", "Gemini API",
  "PostgreSQL", "Plotly.js", "Pandas", "Scikit-learn", "XGBoost", "LightGBM",
  "Next.js", "Tailwind CSS", "Vite", "Node.js",
];

const row2 = [
  "Meta Ads API", "Groq AI", "OpenCV", "MongoDB", "Streamlit", "NumPy",
  "Docker", "Hugging Face", "Keras", "Flask", "Django", "Material-UI",
  "LangChain", "C++", "TypeScript", "Git",
];

const categories = [
  {
    name: "AI & Machine Learning",
    items: "TensorFlow, Keras, Scikit-learn, XGBoost, LightGBM, LangGraph, LangChain, Gemini API, Groq AI, OpenCV, Hugging Face, NLP, Reinforcement Learning",
  },
  {
    name: "Full-Stack Development",
    items: "React, Next.js, Vite, Tailwind CSS, Material-UI, Node.js, Express.js, FastAPI, Flask, Django, REST APIs",
  },
  {
    name: "Data Engineering",
    items: "Python, Pandas, NumPy, Plotly, Matplotlib, Seaborn, PostgreSQL, MongoDB, MySQL, SQLite, Statistical Analysis",
  },
  {
    name: "Infrastructure & Tools",
    items: "Git, GitHub, Docker, VS Code, PyCharm, Jupyter, Streamlit, Google Colab, Terminal, npm/Yarn",
  },
];

export function Skills() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-24 sm:py-36 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 mb-16">
        <p className="font-mono text-xs text-muted uppercase tracking-[0.3em] mb-3">
          Capabilities
        </p>
        <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-fg tracking-tight">
          What I work with.
        </h2>
      </div>

      {/* Infinite scrolling marquee ribbons — pure CSS, no cards */}
      <div className="space-y-4 py-8">
        {/* Row 1 → left */}
        <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused]">
          {[...row1, ...row1].map((item, i) => (
            <span key={i} className="flex-shrink-0 px-6 py-3 font-heading font-bold text-lg sm:text-xl text-[#1a1a1a] hover:text-accent transition-colors duration-300 cursor-default select-none whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>

        {/* Row 2 → right */}
        <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused]">
          {[...row2, ...row2].map((item, i) => (
            <span key={i} className="flex-shrink-0 px-6 py-3 font-heading font-bold text-lg sm:text-xl text-[#1a1a1a] hover:text-accent transition-colors duration-300 cursor-default select-none whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Structured Breakdown — no cards, just two-column text rows */}
      <div className={`max-w-[1400px] mx-auto px-6 sm:px-10 mt-16`}>
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-1 md:grid-cols-12 gap-4 py-8 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            {/* Category label on left */}
            <div className="md:col-span-4">
              <h3 className="font-heading font-bold text-lg sm:text-xl text-fg">
                {cat.name}
              </h3>
            </div>

            {/* Skills as flowing prose text on right */}
            <div className="md:col-span-8">
              <p className="font-body text-muted text-sm sm:text-base leading-relaxed">
                {cat.items}
              </p>
            </div>

            {/* Divider */}
            {idx < categories.length - 1 && (
              <div className="md:col-span-12 pt-0">
                <div className="divider" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

import React, { useRef, useEffect, useState } from "react";

export function About() {
  const photoUrl = `${import.meta.env.BASE_URL}Image.jpg`;
  const imgRef = useRef(null);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 sm:py-36 px-6 sm:px-10">
      <div className="max-w-[1400px] mx-auto">
        <p className="font-mono text-xs text-muted uppercase tracking-[0.3em] mb-3">
          About
        </p>

        {/* Two column layout — no cards, just content breathing on the page */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mt-10">
          {/* Left — Photo with clip-path reveal */}
          <div className="lg:col-span-5">
            <div className={`relative overflow-hidden aspect-[3/4] max-w-sm ${visible ? "" : ""}`}>
              <img
                ref={imgRef}
                src={photoUrl}
                alt="Krish Lodha"
                className={`w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000 ease-out img-reveal ${visible ? "revealed" : ""}`}
              />
            </div>

            <p className="font-mono text-xs text-muted mt-6">
              Pune, India · UTC+5:30
            </p>
          </div>

          {/* Right — Raw text. No cards. No containers. Just words. */}
          <div className={`lg:col-span-7 stagger-in ${visible ? "visible" : ""}`}>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-fg tracking-tight leading-tight">
              I don't build demos.{" "}
              <span className="text-muted">I build things people use.</span>
            </h2>

            <div className="mt-10 space-y-6 font-body text-base sm:text-lg text-muted leading-relaxed">
              <p>
                Third-year Computer Science student at MIT World Peace University. Six-month AI internship at LegitReach where I built generative creative engines that plugged directly into Meta's advertising pipeline — not a hackathon project, actual production software handling real ad spend.
              </p>
              <p>
                I work across the stack but my bias is towards the backend — FastAPI, Python, inference pipelines, model orchestration with LangGraph. On the frontend I reach for React and ship fast.
              </p>
              <p>
                Outside of code, I led the tech team for TEDxMITWPU's official platform and organize workshops through CSI. I like solving problems that are messy enough to be interesting.
              </p>
            </div>

            {/* Stats — not in cards. Just numbers and labels inline. */}
            <div className="mt-14 pt-8 border-t border-[#1a1a1a] grid grid-cols-2 sm:grid-cols-4 gap-y-8">
              <div>
                <p className="font-heading font-extrabold text-3xl sm:text-4xl text-fg">6+</p>
                <p className="font-mono text-xs text-muted mt-1">Systems shipped</p>
              </div>
              <div>
                <p className="font-heading font-extrabold text-3xl sm:text-4xl text-accent">6mo</p>
                <p className="font-mono text-xs text-muted mt-1">Industry AI work</p>
              </div>
              <div>
                <p className="font-heading font-extrabold text-3xl sm:text-4xl text-fg">100%</p>
                <p className="font-mono text-xs text-muted mt-1">TEDx site uptime</p>
              </div>
              <div>
                <p className="font-heading font-extrabold text-3xl sm:text-4xl text-fg">100+</p>
                <p className="font-mono text-xs text-muted mt-1">Event participants</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

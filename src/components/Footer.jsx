import React, { useEffect, useState } from "react";
import { ArrowUp, Heart, Terminal } from "lucide-react";

export function Footer({ scrollToSection }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-12 border-t border-surface-border bg-bg px-6 sm:px-10 relative">
      <div className="max-w-[1300px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-surface border border-surface-border flex items-center justify-center">
            <span className="font-display font-bold text-xs text-accent">KL</span>
          </div>
          <div>
            <p className="font-display font-semibold text-xs text-fg">
              Krish Lodha
            </p>
            <p className="font-mono text-[11px] text-muted">
              Pune, India • {time || "Live"} IST
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-muted">
          <span>&copy; {new Date().getFullYear()} Krish Lodha</span>
          <span>•</span>
          <span className="text-body">FastAPI • React • LangGraph</span>
        </div>

        <button
          onClick={() => scrollToSection("hero")}
          aria-label="Scroll back to top"
          className="p-2.5 rounded-xl bg-surface border border-surface-border text-muted hover:text-fg hover:border-accent transition-colors cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}

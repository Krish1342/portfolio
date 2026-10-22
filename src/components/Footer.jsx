import React from "react";

export function Footer({ scrollToSection }) {
  return (
    <footer className="px-6 sm:px-10 py-10 border-t border-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Krish Lodha
        </p>

        <button
          onClick={() => scrollToSection("hero")}
          className="link-hover font-mono text-xs text-muted hover:text-fg transition-colors"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}

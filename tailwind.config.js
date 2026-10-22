/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        // Strict 4-color palette: Obsidian base, Surface slate, Off-white text, Warm Amber/Orange accent
        bg: '#090a0f',
        surface: {
          DEFAULT: '#11131c',
          hover: '#171a26',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        fg: '#f8fafc',
        body: '#cbd5e1',
        muted: '#94a3b8',
        accent: {
          DEFAULT: '#ff6b35',
          hover: '#ff844f',
          glow: 'rgba(255, 107, 53, 0.18)',
        },
      },
    },
  },
  plugins: [],
};

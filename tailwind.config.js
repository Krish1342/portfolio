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
        bg: '#090a0f',
        surface: {
          DEFAULT: '#11131a',
          hover: '#181b24',
          active: '#1f2330',
          border: 'rgba(255, 255, 255, 0.1)',
        },
        fg: '#f8fafc',
        body: '#cbd5e1',
        muted: '#94a3b8',
        subtle: '#64748b',
        accent: {
          DEFAULT: '#ff6b35',
          hover: '#ff844f',
          glow: 'rgba(255, 107, 53, 0.35)',
        },
        cyber: {
          cyan: '#00f2fe',
          amber: '#f59e0b',
          emerald: '#10b981',
          violet: '#8b5cf6',
        },
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

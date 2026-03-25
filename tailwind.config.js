export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ensures Tailwind scans all JSX/TSX files
  ],
  theme: {
    extend: {
      colors: {
        'shell-red': '#ED1A3B',
        'shell-yellow': '#FFD200',
        'dark-bg': '#080d1a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
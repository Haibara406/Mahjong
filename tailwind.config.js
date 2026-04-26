/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        jade: {
          bg: '#f0f4f0',
          text: '#1a3a1a',
          accent: '#2d5a2d',
        },
        lacquer: {
          bg: '#1a1a1a',
          text: '#f0f0f0',
          accent: '#d4af37',
        },
        study: {
          bg: '#faf8f3',
          text: '#2a2520',
          accent: '#8b4513',
        },
      },
    },
  },
  plugins: [],
}

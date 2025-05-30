/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4da6ff',
          DEFAULT: '#0078ff',
          dark: '#0057b8',
        },
        background: {
          dark: "var(--primary-background)",
          light: "var(--secondary-background)",
        },
        text: {
          light: "var(--primary-foreground)",
          dark: "var(--secondary-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent-color)",
          foreground: "var(--accent-foreground)",
        },
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
        },
      },
      fontFamily: {
        'spline': ['"Spline Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
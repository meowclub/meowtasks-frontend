/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary);",
        secondary: "var(--color-secondary);",
        light: "var(--color-light);",
        background: "var(--color-background);",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        nm: "var(--shadow-nm)",
        ns: "var(--shadow-ns)",
        nav: "var(--shadow-nav)",
      },
    },
  },
  plugins: [],
};

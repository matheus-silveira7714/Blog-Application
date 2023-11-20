/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "white",
        textColor: "black",
        softBg: "#f0f0f0",
        softTextColor: " #626262",
        darkBgColor: "#0f172a",
        darkTextColor: "#ddd",
        darkSoftBg: "#1f273a",
        darkSoftTextColor: " #a6a6a6",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./public/index.html",
    "./pages/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./components/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./app/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      animation: {
        fadeRight: "fadeRight 1s ease-in-out",
        jumpIn: 'jumpIn 1s ease-in-out',
      },
      keyframes: {
        fadeRight: {
          "0%": { opacity: 0, transform: "translateX(-20px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        jumpIn: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '50%': { transform: 'scale(1.2)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "teal-50": "#f0fdfa",
      "teal-100": "#ccfbf1",
      "teal-200": "#a7f3d0",
      "teal-300": "#5eead4",
      "teal-400": "#2dd4bf",
      "teal-500": "#14b8a6",
      "teal-600": "#0d9488",
      "teal-700": "#0f766e",
      "teal-800": "#115e59",
      "teal-900": "#134e4a",
      "teal-950": "#042f2e",
      dark: "#000",
      "light-gray": "#f5f5f5",
      gray: "rgb(113, 113, 113)",
      "footer-link": "rgb(118, 118, 118)",
      "border-gray": "#ededed",
      "gray-span": "#e4e4e4",
      divider: "#dce0e0",
      "gray-2": "#ccc",
      white: "#fff",
      "light-blue": "#3A63A8",
      "dark-blue": "#191E29",
      rgba: "rgba(228, 246, 228, 0.3)",
      loading: "rgba(245, 245, 245, .7)",
      "background-gray": "rgba(120, 120, 120, 0.5)",
      "login-btn": "#4568b2",
    },
  },
  // plugins: [
  //   require("flowbite/plugin"),
  // ],
};

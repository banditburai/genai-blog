/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#1c0172", // Example for a primary color (purple-700)
        secondary: "#4f46e5",
        "gradient-light": "#b0b3ff",
        "gradient-middle": "#a0a3ff",
        "gradient-dark": "#9093ff",
        "gradient-hover-light": "#9f9fff",
        "gradient-hover-middle": "#8f8fff",
        "gradient-hover-dark": "#7f7fff",
      },
      borderWidth: {
        "3": "3px", // Example border width for `borderVisible`
      },
      // You can also add boxShadow, borderRadius, etc., here if needed.
    },
  },
  plugins: [],
  // ...
};


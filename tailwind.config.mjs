/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9a9cfc', // purple
          dark: '#a0a3ff', // darker pru
        },
        secondary: {
          DEFAULT: '#0a91b1', // example color
          dark: '#5eb9de', // darker variant for dark mode
        },
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
  plugins: [
    require('@tailwindcss/typography'),
  ],
  // ...
};


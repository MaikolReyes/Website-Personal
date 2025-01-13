/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        title: ["Inter", "sans-serif"],
        subtitle: ["Roboto Mono", "monospace"],
        text: ["Ubuntu", "sans-serif"],
      },
      colors: {
        customPrimary: '#E8CF50',
        customHover: '#d6d6d6',
      },
      screens: {
        mobile: "480px", // Móviles (desde 480px)
        tablet: "768px", // Tabletas (desde 768px)
        // 'laptop': '1024px', // Laptops (desde 1024px)
        desktop: "1280px", // Escritorios (desde 1280px)
        "large-desktop": "1536px", // Pantallas ultra grandes (desde 1536px)
      },
    },
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#000000",
          white: "#FFFFFF",
          zinc: "#09090b",
          accent: "rgba(255, 255, 255, 0.15)"
        }
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Manrope", "sans-serif"],
        logo: ["Playfair Display", "serif"],
      },
      letterSpacing: {
        'premium': '0.4em',
        'header': '0.6em',
      },
      animation: {
        'marquee': 'marquee 60s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
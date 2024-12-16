import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#E5DFF4',
        body: '#FBF9FF',
        darkPurple: '#150149',
        lemon: '#B0EC64',
        subdued: '#202D37',
        darkGrey: '#141A28',
        lightGrey: '#7E7F81',
        pink: "#DFB4D2",
        pink2: "#F09ACE"
      },
      fontFamily: {
        'abeezee': ['ABeeZee', 'sans-serif'],
      },
      keyframes: {
        fadeInOut1: {
          '0%, 33%, 100%': { opacity: '0' },
          '16.5%': { opacity: '0.5' },
        },
        fadeInOut2: {
          '0%, 33%, 66%, 100%': { opacity: '0' },
          '49.5%': { opacity: '0.5' },
        },
        fadeInOut3: {
          '0%, 66%, 100%': { opacity: '0' },
          '82.5%': { opacity: '0.5' },
        }
      },
      animation: {
        'fadeInOut1': 'fadeInOut1 4s ease-in-out infinite',
        'fadeInOut2': 'fadeInOut2 4s ease-in-out infinite',
        'fadeInOut3': 'fadeInOut3 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
} satisfies Config;

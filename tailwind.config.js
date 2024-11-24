/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "ac-gray": "#FAFAFA",
        "ac-gray2": "#DDDDDD",
        "ac-violet": "#644E9B",
        "purple-600": "#b400ff",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      boxShadow: {
        'formation-unhover': '0 0 10px 1px rgba(0, 0, 0, 0.1)',
        'formation-hover': '0 0 15px 5px rgba(0, 0, 0, 0.1)',
        'formation-card': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      keyframes: {
        loading1: {
          "0%": {transform: "scale(1)"},
          "50%": {transform: "scale(0)"},
          "100%": {transform: "scale(1)"},
        },
        loading2: {
          "0%": {transform: "scale(0.66)"},
          "16.6%": {transform: "scale(1)"},
          "66%": {transform: "scale(0)"},
          "100%": {transform: "scale(0.66)"},
        },
        loading3: {
          "0%": {transform: "scale(0.33)"},
          "33%": {transform: "scale(1)"},
          "83%": {transform: "scale(0)"},
          "100%": {transform: "scale(0.33)"}
        },
        popup: {
          "0%": {transform: "scale(0)"},
          "80%": {transform: "scale(1.2)"},
          "100%": {transform: "scale(1)"},
        },
        autoscroll: {
          "0%": {transform: "translateX(0)"},
          "100%": {transform: "translateX(-104%)"}
        }
      }, 
      animation: {
        "loading1": "loading1 0.75s linear infinite",
        "loading2": "loading2 0.75s linear infinite",
        "loading3": "loading3 0.75s linear infinite",
        "popup": "popup 0.5s linear",
        "autoscroll": "autoscroll 30s linear infinite"
      }
    },
    screens: {
      'fold': '360px',
      'xs': '512px',
      'sm': '640px',
      'md': '768px',
      'xm': '890px',
      'lg': '1080px',
      'lg2': '1145px',
      'xl': '1280px',
      '2xl': '1536px',
      'formation': "1220px",
      'calendly': "1333px",
    }
  },
  plugins: [],
}

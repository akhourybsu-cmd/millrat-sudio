/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#17121F',
        'purple-mill': '#6B35B8',
        'purple-light': '#8B55D8',
        'purple-dark': '#4A1F8C',
        paper: '#F5EFE6',
        'paper-dark': '#E8DFCE',
        'green-sticker': '#00C978',
        'green-sticker-dark': '#00A862',
        'yellow-egg': '#FFC928',
        'brown-scrapbook': '#5A3035',
        'blue-footfalls': '#1268A8',
        'tan-kraft': '#B98255',
        'orange-muted': '#F28C38',
      },
      fontFamily: {
        display: ["'Chelsea Market'", 'system-ui', 'sans-serif'],
        body: ['"Nunito"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        paper: '4px 4px 0px rgba(23,18,31,0.25)',
        'paper-lg': '6px 6px 0px rgba(23,18,31,0.3)',
        sticker: '3px 3px 0px rgba(23,18,31,0.35)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px) rotate(-1deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        },
        'pop-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '70%': { transform: 'scale(1.06)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        wiggle: {
          '0%,100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'pop-in': 'pop-in 0.4s cubic-bezier(0.175,0.885,0.32,1.275)',
        'slide-up': 'slide-up 0.5s ease-out',
        wiggle: 'wiggle 2s ease-in-out infinite',
        'pulse-slow': 'pulse 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

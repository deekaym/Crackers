import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        fire: {
          50: '#fff5f0',
          100: '#ffe4d4',
          200: '#ffbf99',
          300: '#ff9a5c',
          400: '#ff6b22',
          500: '#FF4500',
          600: '#e03300',
          700: '#b82500',
          800: '#8f1b00',
          900: '#6b1400',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#FFB800',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        dark: {
          50: '#1C1C26',
          100: '#13131A',
          200: '#0A0A0F',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'sparkle': 'sparkle 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255,69,0,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(255,69,0,0.8)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        sparkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' },
        },
      },
      backgroundImage: {
        'gradient-fire': 'linear-gradient(135deg, #FF4500, #FFB800)',
        'gradient-dark': 'linear-gradient(135deg, #0A0A0F, #13131A)',
      },
    },
  },
  plugins: [],
}

export default config

import type { Config } from 'tailwindcss';
import { theme } from './src/styles/theme';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: theme.colors,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize,
      boxShadow: theme.shadows,
      spacing: theme.spacing,
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(ellipse at top left, rgba(99, 102, 241, 0.35), transparent 55%), radial-gradient(ellipse at bottom right, rgba(34, 211, 238, 0.25), transparent 55%)',
        'card-glow':
          'radial-gradient(circle at top, rgba(99, 102, 241, 0.25), transparent 60%)'
      },
      keyframes: {
        aurora: {
          '0%': { transform: 'rotate(0deg) translate3d(0, 0, 0)' },
          '50%': { transform: 'rotate(10deg) translate3d(6%, -8%, 0)' },
          '100%': { transform: 'rotate(0deg) translate3d(0, 0, 0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        'pulse-soft': {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 0.65 }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        aurora: 'aurora 18s ease-in-out infinite',
        float: 'float 8s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 12s ease-in-out infinite',
        shimmer: 'shimmer 6s ease-in-out infinite'
      },
      transitionTimingFunction: {
        'bounce-smooth': 'cubic-bezier(0.22, 1, 0.36, 1)'
      }
    }
  },
  plugins: []
};

export default config;

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
      spacing: theme.spacing
    }
  },
  plugins: []
};

export default config;

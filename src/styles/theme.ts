export const colors = {
  primary: '#1D4ED8',
  'primary-light': '#60A5FA',
  'primary-dark': '#1E40AF',
  secondary: '#F97316',
  accent: '#10B981',
  background: '#0F172A',
  surface: '#111827',
  muted: '#94A3B8',
  body: '#E2E8F0',
  heading: '#F8FAFC',
  border: '#1E293B'
};

export const typography = {
  fontFamily: {
    sans: ['\"Inter\"', 'system-ui', 'sans-serif'],
    display: ['\"Poppins\"', 'system-ui', 'sans-serif']
  },
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1.4' }],
    sm: ['0.875rem', { lineHeight: '1.5' }],
    base: ['1rem', { lineHeight: '1.6' }],
    lg: ['1.125rem', { lineHeight: '1.6' }],
    xl: ['1.25rem', { lineHeight: '1.6' }],
    '2xl': ['1.5rem', { lineHeight: '1.4' }],
    '3xl': ['1.875rem', { lineHeight: '1.3' }],
    '4xl': ['2.25rem', { lineHeight: '1.2' }],
    '5xl': ['3rem', { lineHeight: '1.1' }]
  }
};

export const spacing = {
  18: '4.5rem',
  22: '5.5rem',
  30: '7.5rem'
};

export const shadows = {
  soft: '0 10px 30px rgba(15, 23, 42, 0.3)',
  glow: '0 0 0 2px rgba(96, 165, 250, 0.2)',
  card: '0 20px 40px rgba(15, 23, 42, 0.35)'
};

export type Theme = {
  colors: typeof colors;
  typography: typeof typography;
  spacing: typeof spacing;
  shadows: typeof shadows;
};

export const theme: Theme = {
  colors,
  typography,
  spacing,
  shadows
};

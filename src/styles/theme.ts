export const colors = {
  primary: '#6366F1',
  'primary-light': '#8B5CF6',
  'primary-dark': '#4338CA',
  secondary: '#F97316',
  accent: '#22D3EE',
  highlight: '#FCD34D',
  background: '#070B18',
  surface: '#0F172A',
  'surface-strong': '#16213B',
  muted: '#94A3B8',
  body: '#CBD5F5',
  heading: '#F8FAFC',
  border: '#1E2A44',
  'border-strong': '#334155'
};

export const typography = {
  fontFamily: {
    sans: ['"Inter"', 'system-ui', 'sans-serif'],
    display: ['"Poppins"', 'system-ui', 'sans-serif']
  },
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1.4' }],
    sm: ['0.875rem', { lineHeight: '1.5' }],
    base: ['1rem', { lineHeight: '1.7' }],
    lg: ['1.125rem', { lineHeight: '1.7' }],
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
  soft: '0 12px 35px rgba(15, 23, 42, 0.35)',
  glow: '0 0 0 2px rgba(99, 102, 241, 0.25)',
  card: '0 24px 60px rgba(2, 6, 23, 0.45)',
  focus: '0 0 0 4px rgba(34, 211, 238, 0.25)'
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

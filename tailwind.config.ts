import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        'surface-elevated': 'var(--surface-elevated)',
        border: 'var(--border)',
        foreground: 'var(--foreground)',
        'foreground-muted': 'var(--foreground-muted)',
        brand: {
          DEFAULT: 'var(--brand)',
          hover: 'var(--brand-hover)',
          subtle: 'var(--brand-subtle)',
        },
        accent: {
          brown: '#7C6A59',
          warm: '#B85D38',
          amber: '#D97706',
        },
      },
      fontFamily: {
        sans: [
          'var(--font-inter)',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        serif: [
          'var(--font-serif)',
          'Georgia',
          'Cambria',
          'Times New Roman',
          'serif',
        ],
      },
    },
  },
  plugins: [],
};

export default config;

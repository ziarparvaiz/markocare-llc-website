import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './config/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Legacy brand palette (keep for existing pages) ──────────────────
        brand: {
          green: {
            50:  '#f0faf4',
            100: '#dcf4e6',
            200: '#bce9cf',
            300: '#8dd7ae',
            400: '#57be87',
            500: '#34a468',
            600: '#258554',
            700: '#1e6a44',
            800: '#1b5438',
            900: '#18452f',
          },
          navy: {
            50:  '#f0f4fa',
            100: '#dce7f4',
            200: '#b9cfe9',
            300: '#86add8',
            400: '#4d87c4',
            500: '#2c67ad',
            600: '#1e5091',
            700: '#1a4176',
            800: '#193762',
            900: '#172f52',
          },
          slate: '#f8fafc',
        },

        // ── MarkoCare Design System v2 (logo-derived) ───────────────────────
        mc: {
          // Primary green — extracted from MarkoCare logo icon & wordmark
          leaf: {
            50:  '#edf8eb',
            100: '#d4f0cf',
            200: '#ace1a3',
            300: '#7ccc72',
            400: '#52b848', // Primary — matches logo green
            500: '#3ea036',
            600: '#30812a',
            700: '#266522',
            800: '#1f521b',
            900: '#194318',
          },
          // Deep forest green — headings, dark sections, text hierarchy
          forest: '#1a3a28',
          // Soft sage — section backgrounds, subtle fills
          sage:   '#f4f7f2',
          // Stone — borders, dividers
          stone:  '#e2eae0',
          // Near-white cream — hero background
          cream:  '#fafaf8',
        },
      },

      fontFamily: {
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        // Playfair Display for headings — professional, editorial elegance
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },

      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },

      boxShadow: {
        // Legacy
        card:           '0 2px 16px 0 rgba(30, 80, 145, 0.08)',
        'card-hover':   '0 8px 32px 0 rgba(30, 80, 145, 0.14)',
        // Design system v2
        premium:        '0 2px 20px 0 rgba(26, 58, 40, 0.08)',
        'premium-lg':   '0 12px 40px 0 rgba(26, 58, 40, 0.14)',
        'premium-xl':   '0 24px 64px 0 rgba(26, 58, 40, 0.18)',
        float:          '0 4px 16px 0 rgba(26, 58, 40, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;

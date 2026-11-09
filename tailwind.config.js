/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      /* ── Open Design Token Bridge → Tailwind ── */
      colors: {
        brand: {
          DEFAULT: '#5E6AD2',
          light:   '#8B95E0',
          dark:    '#4B56B5',
          50:      '#EDEFFE',
          100:     '#D5D9FB',
          200:     '#A8B0F5',
          500:     '#5E6AD2',
          600:     '#4B56B5',
          700:     '#3A4494',
        },
        accent: {
          green:   '#10B981',
          amber:   '#F59E0B',
          purple:  '#A78BFA',
        },
        od: {
          bg:       'var(--color-bg)',
          surface:  'var(--color-surface)',
          'surface-raised': 'var(--color-surface-raised)',
          border:   'var(--color-border)',
          text:     'var(--color-text-primary)',
          muted:    'var(--color-text-muted)',
        },
      },

      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },

      borderRadius: {
        'od-sm':   '6px',
        'od':      '10px',
        'od-md':   '14px',
        'od-lg':   '20px',
        'od-xl':   '28px',
      },

      boxShadow: {
        'od-xs':   '0 1px 2px rgba(0,0,0,0.05)',
        'od-sm':   '0 1px 4px rgba(0,0,0,0.07), 0 2px 8px rgba(0,0,0,0.04)',
        'od-md':   '0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.05)',
        'od-brand':'0 4px 16px rgba(94,106,210,0.25)',
      },

      animation: {
        'od-up':   'od-fade-up 0.5s ease both',
        'od-in':   'od-fade-in 0.4s ease both',
        'float':   'float 6s ease-in-out infinite',
        'ping-slow':'ping 2s cubic-bezier(0,0,0.2,1) infinite',
      },

      keyframes: {
        'od-fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'od-fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}

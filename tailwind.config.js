/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#1A73E8',
          700: '#1d4ed8',
        },
        green: {
          50: '#f0fdf4',
          600: '#00C897',
          700: '#15803d',
        },
        purple: {
          50: '#faf5ff',
          600: '#9333ea',
          700: '#7c3aed',
        },
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-blue-100',
    'bg-green-100',
    'bg-purple-100',
    'bg-orange-100',
    'bg-yellow-100',
    'text-blue-600',
    'text-green-600',
    'text-purple-600',
    'text-orange-600',
    'text-yellow-600',
  ]
};
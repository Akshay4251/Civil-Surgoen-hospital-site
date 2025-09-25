// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hospital-green': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        'hospital-white': '#ffffff',
        'hospital-gray': {
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
        }
      }
    }
  },
  plugins: [],
}
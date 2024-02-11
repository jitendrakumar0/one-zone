/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl:'1400px',
    },
    extend: {
      colors: {
        'theme1': '#d19a0a',
        'theme2': '#DBEDEE',
        'theme3': '#F5F5F7',
        'theme4': '#FFED00',
        'theme5': '#F8f8f9',
        'theme6': '#F4f4f5',
      },
    },
  },
  plugins: [],
}


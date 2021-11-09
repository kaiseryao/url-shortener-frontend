module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
      primary: "#242038",
      hover: "#332D4F",
      secondary: "#C3BDE1",
      success: "#22EF8B",
      danger: "#DC2626",
      bgDark: "#092012",
      bgLight: "#FFFFFF",
    },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

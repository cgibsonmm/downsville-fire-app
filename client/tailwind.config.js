module.exports = {
  purge: ["./pages/*.js", "./components/*.js", "./components/**/*.js"],
  theme: {
    extend: { width: { "1/7": "14.2857143%" } },
  },
  variants: {
    shadow: ["hover"],
    button: ["hover", "focus"],
  },
  plugins: [],
  experimental: {
    uniformColorPalette: true,
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
};

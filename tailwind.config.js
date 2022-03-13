module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    colors: {
      blue: "#1B294B",
      yellow: "#ED9D0F",
      red: "#DC2D4E",
      purple: "#5670F5",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      slate: "#e2e8f0",
      white: "#ffffff",
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--gradient-color-stops))",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      16: "16px",
    },
  },
  plugins: [],
};

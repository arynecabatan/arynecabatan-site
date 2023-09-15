/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        spacecadet: "#262626",
        culturedwhite: "#F5F5F5",
        sizzlingred: "#FF2C55",
        tartorange: "#FD4E4B",
      },
    },
  },
  corePlugins: {
    fontSize: false,
    // ...
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-fluid-type")({
      // your fluid type settings
      // works only with unitless numbers
      // This numbers are the defaults settings
      settings: {
        fontSizeMin: 1, // 16px
        fontSizeMax: 1.125, // 20px
        ratioMin: 1.125, // Multiplicator Min
        ratioMax: 1.2, // Multiplicator Max
        screenMin: 30, // 480px
        screenMax: 80, // 1280px
        unit: "rem", // default is rem but it's also possible to use 'px'
        prefix: "", // set a prefix to use it alongside the default font sizes
      },
      // Creates the text-xx classes
      // This are the default settings and analog to the tailwindcss defaults
      // Each `lineHeight` is set unitless and we think that's the way to go especially in context with fluid type.
      values: {
        sm: [-1, 1.6],
        base: [0, 1.6],
        lg: [1, 1.6],
        xl: [2, 1.2],
        "2xl": [3, 1.2],
        "3xl": [4, 1.2],
      },
    }),
  ],
};

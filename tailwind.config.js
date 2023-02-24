/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/{App.js,}",
    "./src/components/navbar/Navbar.js",
    "./src/components/Product/ProductCarousel.js",
    "./src/components/Prod-Description/ProdDescription.js",
    "./src/components/cart/Cart.js",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    colors: {
      current: "currentColor",
      orange: "hsl(26, 100%, 55%)",
      paleOrange: "hsl(25, 100%, 94%)",
      veryDarkBlue: "hsl(220, 13%, 13%)",
      darkGrayishBlue: "hsl(219, 9%, 45%)",
      grayishBlue: "hsl(220, 14%, 75%)",
      lightGrayishBlue: "hsl(223, 64%, 98%)",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
    },
    extend: {},
  },
  plugins: [],
};

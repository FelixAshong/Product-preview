/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkcyan: "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",
        verydarkblue: "hsl(212, 21%, 14%)",
        grayishblue: "hsl(228, 12%, 48%)",
        white: "hsl(0, 0%, 100%)",
        state: "hsl(158, 36%, 20%)",
      },
      fontFamily: {
        heading: ["Fraunces"],
        body: ["Montserrat"],
      },
      backgroundImage: {
        mobile: "url('./images/image-product-mobile.jpg')",
        desktop: "url('./images/image-product-desktop.jpg')",
      },
    },
  },
  plugins: [],
};

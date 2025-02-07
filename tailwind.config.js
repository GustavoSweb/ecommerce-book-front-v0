/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    fontFamily: {
      merriweather: ["Merriweather"],
    },
    extend: {
      screens: {
        kick: "1000px",
        bigkick: "1360px",
      },
      spacing: {
        8: "8px",
        16: "16px",
        32: "32px",
        48: "48px",
        64: "64px",
        96: "96px",
        128: "128px",
        256: "256px",
      },
      fontSize: {
        small: "10px",
        body: "14px",
        mbody: "16px",
        buttontext: "20px",
        bigbody: "25px",
        h3: "57px",
        semibig: "91px",
        big: "6.4375rem",
      },
      colors: {
        c1: "#E5E4E4",
        c2: "#D1D1D1",
        c3: "#A5A5A5",
        c4: "#8A8989",
        c5: "#767676",
        c6: "#5C5C5C",
        c7: "#434343",
        c8: "#2F2F2F",
        c9: "#282828",
        c11: "#1E40AF",
        c10: "#202020",
      },
    },
  },
  plugins: [],
};

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        salmon: "#fa7070",
        lightgoldenrodyellow: "#c6ebc5",
        darkseagreen: "#a1c398",
      },
      spacing: {},
      fontFamily: {
        "zcool-kuaile": "'ZCOOL KuaiLe'",
        "zhi-mang-xing": "'Zhi Mang Xing'",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;

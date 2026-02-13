import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", 
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fffff",
        morado: "#901028",
        cafe: "#91380e",
        verde: "#10b981", // Verde esmeralda para iconos y acentos naturales
      },
    },
  },
  plugins: [],
};
export default config;
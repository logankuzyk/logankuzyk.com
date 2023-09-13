import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      // map to CSS variables
      colors: {
        "nord-fg0": "var(--nord-fg0)",
        "nord-fg1": "var(--nord-fg1)",
        "nord-fg2": "var(--nord-fg2)",
        "nord-fg3": "var(--nord-fg3)",
        "nord-bg0": "var(--nord-bg0)",
        "nord-bg1": "var(--nord-bg1)",
        "nord-bg2": "var(--nord-bg2)",
        "nord-teal": "var(--nord-teal)",
        "nord-aqua": "var(--nord-aqua)",
        "nord-blue-light": "var(--nord-blue-light)",
        "nord-blue-dark": "var(--nord-blue-dark)",
        "nord-red": "var(--nord-red)",
        "nord-orange": "var(--nord-orange)",
        "nord-yellow": "var(--nord-yellow)",
        "nord-green": "var(--nord-green)",
        "nord-purple": "var(--nord-purple)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;

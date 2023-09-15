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
        "nord-0": "var(--nord-0)",
        "nord-1": "var(--nord-1)",
        "nord-2": "var(--nord-2)",
        "nord-3": "var(--nord-3)",
        "nord-4": "var(--nord-4)",
        "nord-5": "var(--nord-5)",
        "nord-6": "var(--nord-6)",
        "nord-7": "var(--nord-7)",
        "nord-8": "var(--nord-8)",
        "nord-9": "var(--nord-9)",
        "nord-10": "var(--nord-10)",
        "nord-11": "var(--nord-11)",
        "nord-12": "var(--nord-12)",
        "nord-13": "var(--nord-13)",
        "nord-14": "var(--nord-14)",
        "nord-15": "var(--nord-15)",
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

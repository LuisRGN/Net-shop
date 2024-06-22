import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {

      boxShadow: {
        'custom': '0 0.1rem 0.2rem rgba(0, 0, 0, 0.2), 0 0.1rem 0.5rem rgba(0, 0, 0, 0.3), 0 0.2rem 1.5rem rgba(0, 0, 0, 0.4)',
        'custom2': '0 2px 0 0 rgba(0, 0, 0, 0.4)'
      },

      backgroundColor: {
        "custom-color": "rgb(148 163 184 / 95%)"
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
export default config;

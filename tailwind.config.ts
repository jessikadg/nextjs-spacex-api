import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": `radial-gradient(75% 75% at 97% 11%, #005F87ED 0%, #FEFEFE00 100%, #FFFFFF08 200%), 
          radial-gradient(75% 75% at 5% 17%, #2E3D77FF 22%, #8a4366 150%)`,
      },
    },
  },
  plugins: [],
};
export default config;

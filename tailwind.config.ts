import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Custom "LegalBridge" Branding Colors
        lb: {
          50: '#f5f3ff', // Very light purple (backgrounds)
          100: '#ede9fe', // Light purple
          600: '#7c3aed', // Primary Brand Purple
          700: '#6d28d9', // Hover state
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
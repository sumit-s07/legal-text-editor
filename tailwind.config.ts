import type { Config } from "tailwindcss";

const config: Config = {
  // CORRECTED PATHS: Removed "src/" from these lines
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Custom "LegalBridge" Branding Colors
        lb: {
          50: '#f5f3ff', 
          100: '#ede9fe', 
          600: '#7c3aed', // Primary Purple
          700: '#6d28d9', 
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
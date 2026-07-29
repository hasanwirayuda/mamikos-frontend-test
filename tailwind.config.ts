import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1BAA56",
          hover: "#15954B",
        },
        secondary: "#484848",
        tertiary: "#8F8F8F",
        surface: "#FFFFFF",
        border: "#E8E8E8",
        error: "#D64545",
        chip: "#F5F5F5",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      borderRadius: {
        none: "0px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        full: "9999px",
      },
      spacing: {
        xs: "8px",
        sm: "16px",
        md: "24px",
        lg: "32px",
        xl: "60px",
      },
      boxShadow: {
        card: "0 2px 8px rgba(0, 0, 0, 0.08)",
        subtle: "0 1px 4px rgba(0, 0, 0, 0.05)",
      },
    },
  },
};

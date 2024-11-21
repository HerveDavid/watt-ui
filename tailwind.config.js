/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    theme: {
      extend: {
        colors: {
          // Text colors
          "text-primary": "var(--text-primary)",
          "text-secondary": "var(--text-secondary)",
          "text-disabled": "var(--text-disabled)",

          // Background colors
          "bg-primary": "var(--background-primary)",
          "bg-secondary": "var(--background-secondary)",
          "bg-grouping": "var(--background-grouping)",

          // State colors
          "state-off": "var(--state-off)",
          "state-on": "var(--state-on)",
          "state-transition": "var(--state-transition)",

          // Alarm colors
          "alarm-urgent": "var(--alarm-urgent)",
          "alarm-high": "var(--alarm-high)",
          "alarm-medium": "var(--alarm-medium)",
          "alarm-low": "var(--alarm-low)",

          // Border colors
          "border-separator": "var(--border-separator)",
          "border-equipment": "var(--border-equipment)",

          // Input colors
          "input-enabled": "var(--input-background-enabled)",
          "input-disabled": "var(--input-background-disabled)",

          // Data display colors
          "data-value": "var(--data-value)",
          "data-border": "var(--data-border)",

          // Navigation colors
          "nav-bg": "var(--nav-background)",
          "nav-border": "var(--nav-border)",
        },
        spacing: {
          xs: "var(--spacing-xs)",
          sm: "var(--spacing-sm)",
          md: "var(--spacing-md)",
          lg: "var(--spacing-lg)",
          xl: "var(--spacing-xl)",
        },
        fontSize: {
          xs: "var(--font-size-xs)",
          sm: "var(--font-size-sm)",
          md: "var(--font-size-md)",
          lg: "var(--font-size-lg)",
          xl: "var(--font-size-xl)",
          "2xl": "var(--font-size-xxl)",
        },
      },
    },
  },
  plugins: [],
};

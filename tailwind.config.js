/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable dark mode with "dark" class
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust your paths
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(240, 20%, 98%)",
        foreground: "hsl(240, 10%, 10%)",

        card: "hsl(0, 0%, 100%)",
        "card-foreground": "hsl(240, 10%, 10%)",

        popover: "hsl(0, 0%, 100%)",
        "popover-foreground": "hsl(240, 10%, 10%)",

        primary: "hsl(245, 58%, 51%)",
        "primary-foreground": "hsl(0, 0%, 100%)",

        secondary: "hsl(240, 60%, 96%)",
        "secondary-foreground": "hsl(245, 58%, 51%)",

        muted: "hsl(240, 20%, 96%)",
        "muted-foreground": "hsl(240, 10%, 45%)",

        accent: "hsl(262, 83%, 58%)",
        "accent-foreground": "hsl(0, 0%, 100%)",

        destructive: "hsl(0, 84%, 60%)",
        "destructive-foreground": "hsl(0, 0%, 100%)",

        border: "hsl(240, 20%, 90%)",
        input: "hsl(240, 20%, 90%)",
        ring: "hsl(245, 58%, 51%)",
      },
      borderRadius: {
        DEFAULT: "0.75rem",
      },
      backgroundImage: {
        'gradient-to-br-primary-accent': "linear-gradient(to bottom right, hsl(245, 58%, 51%), hsl(262, 83%, 58%))",
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 20s linear infinite',
      },
      textColor: {
        primary: "hsl(245, 58%, 51%)",
        accent: "hsl(262, 83%, 58%)",
      },
      gradientColorStops: theme => ({
        'primary': theme('colors.primary'),
        'accent': theme('colors.accent'),
      }),
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.gradient-text': {
          'background-image': 'linear-gradient(to right, hsl(245, 58%, 51%), hsl(262, 83%, 58%))',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.gradient-border': {
          'border-width': '2px',
          'border-image-slice': 1,
          'border-image-source': 'linear-gradient(to right, hsl(245, 58%, 51%), hsl(262, 83%, 58%))',
        },
      })
    }
  ],
}

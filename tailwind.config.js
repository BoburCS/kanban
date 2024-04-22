/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        extend: {
            colors: {
                black: {
                    DEFAULT: "#000112",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                },
                primaryHover: {
                    DEFAULT: "var(--primary-hover)",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                mediumGrey: {
                    DEFAULT: "var(--medium-grey)",
                },
                darkGrey: {
                    DEFAULT: "var(--dark-grey)",
                },
                secondary: {
                    DEFAULT: "var(--secondary)",
                },
                lines: {
                    DEFAULT: "var(--lines)",
                },
                veryDarkGrey: {
                    DEFAULT: "var(--very-dark-grey)",
                },
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            fontFamily: {
                PlusJakartaSans: ["Plus Jakarta Sans", "sans-serif"],
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};

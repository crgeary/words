const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", defaultTheme.fontFamily.sans],
            },
            flexGrow: {
                ...defaultTheme.flexGrow,
                0.5: 0.5,
                1.5: 1.5,
            },
        },
    },
    plugins: [],
};

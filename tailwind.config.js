/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "main-color": "var(--main-color)",
                contrast: "var(--contrast)",
            },
            fontFamily: {
                oswald: ["Oswald", "sans-serif"],
                inter: ["Inter Tight", "sans-serif"],
            },
        },
    },
    plugins: [],
};

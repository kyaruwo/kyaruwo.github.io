/*

tailwindcss v3.4.0

tailwindcss\tailwindcss.exe -i tailwindcss\tailwind.css -o index.css --minify --watch

*/

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html", "index.js"],
    theme: {
        extend: {
            colors: {
                ina_heart: "#ffffff",
                ink_black: "#000000",
                ika_purple: "#575068",
                ina_orange: "#f29a30",
                inai_purple: "#e1d8ef",
            },
            transitionDuration: {
                420: "420ms",
                690: "690ms",
                2420: "2420ms",
            },
        },
    },
    plugins: [],
};

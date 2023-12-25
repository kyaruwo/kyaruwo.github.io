/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "../kyaruwo.github.io/index.html",
        "../kyaruwo.github.io/js/*.js",
    ],
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

// https://github.com/tailwindlabs/tailwindcss/releases/tag/v3.4.0
// tailwindcss\tailwindcss.exe -i tailwindcss\tailwind.css -o css\index.css --minify --watch

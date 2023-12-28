function borgar_open() {
    document.getElementById("borgar_open").classList.add("hidden");
    document.getElementById("borgar_close").classList.remove("hidden");
    document.getElementById("borgar_menu").classList.remove("hidden");
    document.getElementById("main").classList.add("max-lg:hidden");
}

function borgar_close() {
    document.getElementById("borgar_open").classList.remove("hidden");
    document.getElementById("borgar_close").classList.add("hidden");
    document.getElementById("borgar_menu").classList.add("hidden");
    document.getElementById("main").classList.remove("max-lg:hidden");
}

function home() {
    const main = document.getElementById("main");
    main.innerHTML = `
    <div
        class="grid items-center justify-around justify-items-center lg:grid-cols-2"
    >
        <img
            src="assets/tako.gif"
            class="max-sm:size-64 size-96 transition-all duration-2420 ease-in-out"
        />
        <div class="flex flex-col items-center gap-4">
            <p
                class="mt-4 text-2xl transition-all duration-2420 ease-in-out max-sm:text-base"
            >
                Hi I'm
            </p>
            <h
                class="-mt-8 text-8xl font-black text-ina_orange transition-all duration-2420 ease-in hover:text-inai_purple hover:transition-all hover:duration-690 hover:ease-out max-sm:text-6xl"
            >
                kyaruwo
            </h>
            <h class="text-4xl max-sm:text-2xl">
                <span
                    class="transition-all duration-2420 ease-in hover:text-ika_purple hover:transition-all hover:duration-690 hover:ease-out"
                    >Backend</span
                >
                <span class="transition-all duration-2420 ease-in-out"
                    >Developer</span
                >
            </h>
            <a href="https://github.com/kyaruwo" target="_blank" class="mt-2">
                <img
                    src="https://skillicons.dev/icons?i=github&theme=dark"
                    class="max-sm:size-16 size-20 transition-all duration-2420 ease-in-out"
                />
            </a>
        </div>
    </div>
    `;
}

function languages() {
    const languages = [
        {
            language: "Rust",
            level: "Novice",
            sicode: "rust",
        },
        {
            language: "SQL",
            level: "Novice",
            sicode: "mysql",
        },
        {
            language: "Regex",
            level: "Novice",
            sicode: "regex",
        },
        {
            language: "JavaScript",
            level: "Novice",
            sicode: "javascript",
        },
        {
            language: "HTML",
            level: "Novice",
            sicode: "html",
        },
        {
            language: "tailwindcss",
            level: "Novice",
            sicode: "tailwindcss",
        },
    ];

    const main = document.getElementById("main");
    main.innerHTML = `
    <div
        id="languages"
        class="grid gap-8 max-lg:grid-cols-2 lg:grid-cols-3"
    ></div>
    `;

    const languages_div = document.getElementById("languages");
    languages.forEach((data) => {
        languages_div.innerHTML += `
        <div class="flex flex-col items-center">
            <img
                src="https://skillicons.dev/icons?i=${data.sicode}&theme=dark"
                class="size-20"
            />
            <h class="pt-1 max-lg:text-2xl lg:text-4xl">${data.language}</h>
            <p class="text-base">${data.level}</p>
        </div>
        `;
    });
}

function tools() {
    const tools = [
        {
            tool: "VSCode",
            sicode: "vscode",
        },
        {
            tool: "GitHub",
            sicode: "github",
        },
    ];

    const main = document.getElementById("main");
    main.innerHTML = `<div id="tools" class="grid grid-cols-2 gap-8"></div>`;

    const tools_div = document.getElementById("tools");
    tools.forEach((data) => {
        tools_div.innerHTML += `
        <div class="flex flex-col items-center">
            <img
                src="https://skillicons.dev/icons?i=${data.sicode}&theme=dark"
                class="size-20"
            />
            <h class="pt-1 text-4xl">${data.tool}</h>
        </div>
        `;
    });
}

// onload
home();

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
    main.innerHTML = /*html*/ `
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

function projects() {
    const projects = [
        {
            img: "",
            title: "",
            body: "",
            languages: [],
        },
    ];

    const main = document.getElementById("main");
    main.innerHTML = /*html*/ `<div id="projects" class="flex flex-col max-lg:gap-8 lg:gap-20"></div>`;

    let projects_div = document.getElementById("projects");
    projects.forEach((project) => {
        projects_div.innerHTML += /*html*/ `
        <div class="flex flex-row justify-center max-lg:gap-8 lg:gap-20">
            <img src="assets/${project.img}" class="max-lg:size-20 lg:size-40 rounded-lg" />
            <div class="flex flex-col items-center">
                <h class="font-bold max-lg:text-4xl lg:text-6xl">${project.title}</h>
                <p class="max-lg:text-xs lg:text-xl">${project.body}</p>
                <div id="${project.title}_languages" class="mt-4 flex flex-row gap-2"></div>
            </div>
        </div>
        `;
        project.languages.forEach((language) => {
            let project_languages_div = document.getElementById(
                `${project.title}_languages`
            );
            project_languages_div.innerHTML += /*html*/ `
            <img
                src="https://skillicons.dev/icons?i=${language}&theme=dark"
                class="max-sm:size-5 max-md:size-7 md:size-9 lg:size-12"
            />
            `;
        });
    });
}

function languages() {
    const languages = [
        {
            language: "Go",
            level: "Novice",
            sicode: "go",
        },
        {
            language: "Rust",
            level: "Novice",
            sicode: "rust",
        },
        {
            language: "PostgreSQL",
            level: "Novice",
            sicode: "postgres",
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
    main.innerHTML = /*html*/ `
    <div
        id="languages"
        class="grid gap-8 max-lg:grid-cols-2 lg:grid-cols-3"
    ></div>
    `;

    const languages_div = document.getElementById("languages");
    languages.forEach((data) => {
        languages_div.innerHTML += /*html*/ `
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
    main.innerHTML = /*html*/ `<div id="tools" class="grid grid-cols-2 gap-8"></div>`;

    const tools_div = document.getElementById("tools");
    tools.forEach((data) => {
        tools_div.innerHTML += /*html*/ `
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

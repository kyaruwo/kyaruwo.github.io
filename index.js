function borgar() {
    const open = document.getElementById("borgar_open").classList;
    const close = document.getElementById("borgar_close").classList;
    const menu = document.getElementById("borgar_menu").classList;
    const main = document.getElementById("main").classList;

    if (close.contains("hidden")) {
        menu.remove("hidden");
        close.remove("hidden");
        open.add("hidden");
        main.add("max-lg:hidden");
    } else {
        menu.add("hidden");
        close.add("hidden");
        open.remove("hidden");
        main.remove("max-lg:hidden");
    }
}

function home() {
    const main = document.getElementById("main");
    main.innerHTML = `
    <div
        class="lg:ml-28 lg:mr-28 grid lg:grid-cols-2 justify-around justify-items-center items-center"
    >
        <img
            class="max-sm:size-64 size-96 transition-all ease-in-out duration-2420"
            src="assets/tako.gif"
        />
        <div class="flex flex-col items-center gap-4">
            <p
                class="max-sm:text-base text-2xl mt-4 transition-all ease-in-out duration-2420"
            >
                Hi I'm
            </p>
            <h
                class="max-sm:text-6xl text-8xl font-black -mt-8 transition-all ease-in text-ina_orange duration-2420 hover:transition-all hover:ease-out hover:text-inai_purple hover:duration-690"
            >
                kyaruwo
            </h>
            <h class="max-sm:text-2xl text-4xl">
                <span
                    class="transition-all ease-in duration-2420 hover:transition-all hover:ease-out hover:text-ika_purple hover:duration-690"
                    >Backend</span
                >
                <span class="transition-all ease-in-out duration-2420"
                    >Developer</span
                >
            </h>
            <a class="mt-2" target="_blank" href="https://github.com/kyaruwo">
                <img
                    class="max-sm:size-16 size-20 transition-all ease-in-out duration-2420"
                    src="https://skillicons.dev/icons?i=github&theme=dark"
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
    ];

    const main = document.getElementById("main");
    main.innerHTML = `<div id="languages" class="flex justify-evenly text-center"></div>`;

    const languages_div = document.getElementById("languages");
    languages.forEach((data) => {
        languages_div.innerHTML += `
        <div class="flex flex-col items-center">
            <img
                class="size-20"
                src="https://skillicons.dev/icons?i=${data.sicode}&theme=dark"
            />
            <h class="text-4xl pt-1">${data.language}</h>
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
    main.innerHTML = `<div id="tools" class="flex justify-evenly text-center"></div>`;

    const tools_div = document.getElementById("tools");
    tools.forEach((data) => {
        tools_div.innerHTML += `
        <div class="flex flex-col items-center">
            <img
                class="size-20"
                src="https://skillicons.dev/icons?i=${data.sicode}&theme=dark"
            />
            <h class="text-4xl pt-1">${data.tool}</h>
        </div>
        `;
    });
}

// onload
home();
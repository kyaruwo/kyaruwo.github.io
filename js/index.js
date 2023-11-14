function home() {
    const main = document.getElementById("main");
    main.innerHTML = `
    <div id="home" class="grid">
        <img id="portrait" src="assets/tako.gif" />
        <div id="details">
            <p>Hi, I'm</p>
            <h>kyaruwo</h>
            <span><span>Backend</span> Developer</span>
            <div>
                <a target="_blank" href="https://github.com/kyaruwo">
                    <img
                        src="https://skillicons.dev/icons?i=github&theme=dark"
                    />
                </a>
            </div>
        </div>
    </div>
    `;
}

function languages() {
    const languages = [
        {
            language: "go",
            level: "Novice",
            sicode: "go",
        },
        {
            language: "Rust",
            level: "Novice",
            sicode: "rust",
        },
        {
            language: "SQL",
            level: "Competent",
            sicode: "mysql",
        },
        {
            language: "Python",
            level: "Novice",
            sicode: "python",
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
            language: "PHP",
            level: "Novice",
            sicode: "php",
        },
        {
            language: "Godot",
            level: "Hobby",
            sicode: "godot",
        },
    ];

    const main = document.getElementById("main");
    main.innerHTML = "<div id='languages' class='grid'></div>";

    const languages_div = document.getElementById("languages");
    languages.forEach((data) => {
        languages_div.innerHTML += `
        <div>
            <img
                src="https://skillicons.dev/icons?i=${data.sicode}&theme=dark"
            />
            <div>
                <h>${data.language}</h>
                <p>${data.level}</p>
            </div>
        </div>
        `;
    });
}

function tools() {
    const tools = [
        {
            tool: "Discord",
            sicode: "discord",
        },
        {
            tool: "VSCode",
            sicode: "vscode",
        },
        {
            tool: "GitHub",
            sicode: "github",
        },

        {
            tool: "Godot",
            sicode: "godot",
        },
    ];

    const main = document.getElementById("main");
    main.innerHTML = "<div id='tools' class='grid'></div>";

    const tools_div = document.getElementById("tools");
    tools.forEach((data) => {
        tools_div.innerHTML += `
        <div>
            <img
                src="https://skillicons.dev/icons?i=${data.sicode}&theme=dark"
            />
            <div><h>${data.tool}</h></div>
        </div>
        `;
    });
}

// onload
home();

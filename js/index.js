const skills_list = [
    {
        skill: "Rust",
        level: "Novice",
        sicode: "rust"
    },
    {
        skill: "SQLite",
        level: "Novice",
        sicode: "sqlite"
    },
    {
        skill: "Godot",
        level: "Novice",
        sicode: "godot"
    },
    {
        skill: "Python",
        level: "Novice",
        sicode: "py"
    },
    {
        skill: "HTML",
        level: "Novice",
        sicode: "html"
    },
    {
        skill: "CSS",
        level: "Novice",
        sicode: "css"
    },
    {
        skill: "JavaScript",
        level: "Novice",
        sicode: "js"
    },
    {
        skill: "PHP",
        level: "Novice",
        sicode: "php"
    }
];

const skills_div = document.getElementById("skills");

skills_list.forEach(data => {
    skills_div.innerHTML += `
    <div>
        <img src="https://skillicons.dev/icons?i=${data.sicode}&theme=dark" />
        <div>
            <h class=skill>${data.skill}</h>
            <p class=level>${data.level}</p>
        </div>
    </div>
    `
});
const skills_list = [
    {
        skill: "Python",
        level: "Competent",
        sicode: "python"
    },
    {
        skill: "SQLite",
        level: "Competent",
        sicode: "sqlite"
    },
    {
        skill: "Godot",
        level: "Novice",
        sicode: "godot"
    },
    {
        skill: "NodeJS",
        level: "Novice",
        sicode: "nodejs"
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
]

const skills_div = document.getElementById("skills")

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
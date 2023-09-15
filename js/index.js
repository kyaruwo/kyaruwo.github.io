function change_theme() {
    const rc = document.getElementById("root").classList
    const tbimg = document.getElementById("theme-btn-img")

    if (rc.contains("theme-dark")) {
        tbimg.src = "assets/theme-todark.png"
    } else {
        tbimg.src = "assets/theme-tolight.png"
    }
    rc.toggle("theme-dark")
}

function hide_borgar() {
    document.getElementById("nav-links").classList.toggle("hide-borgar")
    document.getElementById("hamborgar-bg").classList.toggle("show-hamborgar-bg")
}
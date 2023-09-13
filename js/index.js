function change_theme() {
    const rc = document.getElementById("root").classList
    const tbimg = document.getElementById("theme-btn-img")
    if (rc.contains("theme-dark")) {
        tbimg.src = "assets/theme-dark.png";
        rc.remove("theme-dark")
        rc.add("theme-light")
    } else {
        tbimg.src = "assets/theme-light.png";
        rc.remove("theme-light")
        rc.add("theme-dark")
    }
}
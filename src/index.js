function display () {

let body = document.querySelector("body")
if(body.classList.contains("dark")) {
    body.classList.remove("dark")
} else {
    body.classList.add("dark")
}


}

darkTheme = document.querySelector(".themeButton")
darkTheme.addEventListener("click", display)
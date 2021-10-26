const preloader = document.getElementById("preloader");
const nav = document.getElementById("nav-links");
const cross = document.getElementById("cross");
const menu = document.getElementById("menu");
const navText = document.getElementById("nav-text");

// Preloader
window.addEventListener("load", loader)
function loader() {
    preloader.style.display = "none";
}

//for menu bar
menu.addEventListener("click", show)
function show() {
    nav.style.right = "5px";
}

cross.addEventListener("click", hide)
navText.addEventListener("click", hide)

function hide() {
    nav.style.right = "-200px";
}

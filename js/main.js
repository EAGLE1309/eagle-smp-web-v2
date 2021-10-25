//for menu bar

const nav = document.getElementById("nav-links");
const cross = document.getElementById("cross");
const menu = document.getElementById("menu");

cross.addEventListener("click", hide)

function hide() {
    nav.style.right = "-200px";
};

menu.addEventListener("click", show)
function show() {
    nav.style.right = "5";
};

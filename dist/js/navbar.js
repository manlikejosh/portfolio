const navBtn = document.getElementById("nav-toggle");
const body = document.querySelector("body");
const overlay = document.getElementById("overlay");
const linkList = document.getElementById("links");
const navLink = linkList.querySelectorAll("a");

let clickEvent = () => {
    navBtn.classList.toggle("fa-rotate-90");

    body.classList.toggle("overflow-y-hidden")

    if (overlay.classList.contains("top-[-100vh]")) {
        overlay.classList.remove("top-[-100vh]");
        overlay.classList.add("top-0");
    } else {
        overlay.classList.add("top-[-100vh]");
        overlay.classList.remove("top-0");
    }
};

navBtn.addEventListener('click',clickEvent);

navLink.forEach((link) => {
    link.addEventListener('click', clickEvent)
})
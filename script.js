const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const links = navMenu.querySelectorAll("a");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        document.body.classList.remove("no-scroll");
    });
});

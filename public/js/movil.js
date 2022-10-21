const open__menu = document.getElementById("open__menu");
const close__menu = document.getElementById("close__menu");
const menu__movil = document.getElementById("menu__movil");
const home = document.getElementById("home");
const quien__soy = document.getElementById("quien__soy");
const proyecto = document.getElementById("proyecto");
const contacto = document.getElementById("contacto");


open__menu.addEventListener("click", function() {
    open__menu.classList.add("active");
    menu__movil.style.display = 'block';
});

close__menu.addEventListener("click", function() {
    open__menu.classList.remove("active");
    menu__movil.style.display = 'none';
});

quien__soy.addEventListener("click", function() {
    open__menu.classList.remove("active");
    menu__movil.style.display = 'none';
})

proyecto.addEventListener("click", function() {
    open__menu.classList.remove("active");
    menu__movil.style.display = 'none';
})

contacto.addEventListener("click", function() {
    open__menu.classList.remove("active");
    menu__movil.style.display = 'none';
});
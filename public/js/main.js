const inputs = document.querySelectorAll('.fake_placeholder input');
const textarea = document.querySelectorAll('.fake_placeholder textarea');
const select = document.querySelectorAll('.fake_placeholder select');

inputs.forEach(input => {
    //cuando entramos en el input 
    input.onfocus = () => {
        //al elemento anterior (el span) le agregamos la clase que la reubica en top
        input.previousElementSibling.classList.add('reubicar');
        input.classList.remove('input__pl');

    }

    //cuando salimos del input
    input.onblur = () => {
        //si no hay texto, le quitamos la clase reubicar, 
        //para que se superponga con el input
        if (input.value.trim().length == 0) {
            input.previousElementSibling.classList.remove('reubicar');
            input.classList.add('input__pl');
        } else {
            input.previousElementSibling.classList.add('reubicar');
        }
    }
});


textarea.forEach(textarea => {
    //cuando entramos en el input 
    textarea.onfocus = () => {
        //al elemento anterior (el span) le agregamos la clase que la reubica en top
        textarea.previousElementSibling.classList.add('reubicar');
        textarea.previousElementSibling.classList.remove('textarea');
        textarea.classList.remove('textarea__pl');
    }

    //cuando salimos del textarea
    textarea.onblur = () => {
        //si no hay texto, le quitamos la clase reubicar, 
        //para que se superponga con el textarea
        if (textarea.value.trim().length == 0) {
            textarea.previousElementSibling.classList.remove('reubicar');
            textarea.previousElementSibling.classList.add('textarea');
            textarea.classList.add('textarea__pl');
        } else {
            textarea.previousElementSibling.classList.add('reubicar');
        }

    }
});

select.forEach(select => {
    //cuando entramos en el input 
    select.onfocus = () => {
        //al elemento anterior (el span) le agregamos la clase que la reubica en top
        select.previousElementSibling.classList.add('reubicar');
        select.classList.remove('select-pd');
    }

    //cuando salimos del select
    select.onblur = () => {
        //si no hay texto, le quitamos la clase reubicar, 
        //para que se superponga con el select
        if (select.value.trim().length == 0) {
            select.previousElementSibling.classList.remove('reubicar');
            select.classList.add('select-pd');
        } else {
            select.previousElementSibling.classList.add('reubicar');
        }

    }
});

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("frm__nombre").value;
    const email = document.getElementById("frm__email").value;
    const telefono = document.getElementById("frm__telefono").value;
    const asunto = document.getElementById("frm__asunto").value;
    const mensaje = document.getElementById("frm__mensaje").value;


    if (nombre != "" && email != "" && telefono != "" && asunto != "" && mensaje != "") {
        const obj = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            asunto: asunto,
            mensaje: mensaje
        }
        console.log(obj);
        swal.fire({
            title: 'Gracias ' + nombre + ' 😁',
            text: "Se envío con éxito tu mensaje",
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#c42729',
            cancelButtonColor: '#918181',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            background: '#180000',
            customClass: {
                cancelButton: 'outnone',
                confirmButton: 'outnone',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                // form.reset();
                window.location.reload();

            }
        });
    } else {
        swal.fire({
            title: "Atención 😣",
            text: "Todos los campos son obligatorios",
            icon: 'warning',
            showCancelButton: false,
            confirmButtonColor: '#c42729',
            confirmButtonText: 'Aceptar',
            background: '#180000',
            customClass: {
                cancelButton: 'outnone',
                confirmButton: 'outnone',
                title: 'swal2-title',
            }
        });
    }
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    grabCursor: true,
    spaceBetween: 10,
    autoHeight: true,

    autoplay: {
        delay: 10500,
        disableOnInteraction: false,
    },

    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1280: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1366: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1920: {
            slidesPerView: 3,
            spaceBetween: 10,
        }
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

function validaNumericos(event) {
    return event.charCode >= 48 && event.charCode <= 57;
}

// Menú active desktop
const btns =
    $("#header .nav__navbar .nav__links");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click",
        function() {
            const current = document
                .getElementsByClassName("active");

            current[0].className = current[0]
                .className.replace(" active", "");

            this.className += " active";
        });
}

/* Code for changing active 
link on Scrolling */
$(window).scroll(function() {
    const distance = $(window).scrollTop();
    $('.page-section').each(function(i) {

        if ($(this).position().top <=
            distance + 250) {

            $('.nav__navbar a.active')
                .removeClass('active');

            $('.nav__navbar a').eq(i)
                .addClass('active');
        }
    });
}).scroll();

// Movil 
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

const cambiar__idioma = document.getElementById("cambiar__idioma");

cambiar__idioma.addEventListener("click", () => {
    const flag__lang = document.getElementById("flag__lang");
    var data__flag = flag__lang.dataset.flag;
    flag__lang.src = "public/img/flags/arg.png";
    flag__lang.alt = "Cambiar a español";
    flag__lang.title = "Cambiar a español";
    flag__lang.dataset.flag = 'arg';

    if (data__flag == "arg") {
        flag__lang.src = "public/img/flags/usa.png";
        flag__lang.alt = "Cambiar a inglés";
        flag__lang.title = "Cambiar a inglés";
        flag__lang.dataset.flag = 'usa';
    }
});

const cambiar__idioma__movil = document.getElementById("cambiar__idioma__movil");

cambiar__idioma__movil.addEventListener("click", () => {
    const flag__lang__movil = document.getElementById("flag__lang__movil");
    var data__flag__movil = flag__lang__movil.dataset.lang;
    flag__lang__movil.src = "public/img/flags/arg.png";
    flag__lang__movil.alt = "Cambiar a español";
    flag__lang__movil.title = "Cambiar a español";
    flag__lang__movil.dataset.lang = 'arg';

    if (data__flag__movil == "arg") {
        flag__lang__movil.src = "public/img/flags/usa.png";
        flag__lang__movil.alt = "Cambiar a inglés";
        flag__lang__movil.title = "Cambiar a inglés";
        flag__lang__movil.dataset.lang = 'usa';
    }
});

$(document).ready(function() { irArriba(); });

function irArriba() {
    $('.ir-arriba').hide();
    $('.ir-arriba').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }) /*, 1000 */
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.ir-arriba').fadeIn();
        } else {
            $('.ir-arriba').fadeOut();
        }
    });
}
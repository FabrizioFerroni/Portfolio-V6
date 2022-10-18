/* cuando hago click .button .nav Toggle 'activo'*/
// const button = document.querySelector('.button')
// const nav = document.querySelector('.nav')

// button.addEventListener('click', () => {
//   nav.classList.toggle('activo')
// })

/* Code for changing active 
          link on clicking */
var btns =
    $("#header .nav__navbar .nav__links");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click",
        function() {
            var current = document
                .getElementsByClassName("active");

            current[0].className = current[0]
                .className.replace(" active", "");

            this.className += " active";
        });
}

/* Code for changing active 
link on Scrolling */
$(window).scroll(function() {
    var distance = $(window).scrollTop();
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
            textarea.previousElementSibling.classList.remove('textarea');
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
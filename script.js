document.addEventListener('DOMContentLoaded', () => {
    let audio = document.querySelector('audio');
    audio.volume = 0.08;
}, false);

$(document).ready(function () {
    $('.nav__menu').click(function (event) {
        $('.nav__menu, .menu__burg, .menu__burg_exit').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.menu__burg_exit').click(function (event) {
        $('.nav__menu, .menu__burg, .menu__burg_exit').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

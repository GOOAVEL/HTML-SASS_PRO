document.addEventListener('DOMContentLoaded', () => {
    let audio = document.querySelector('audio');
    audio.volume = 0.08;
}, false);

$(document).ready(function () {
    $('.nav__menu').click(function (event) {
        $('.nav__menu, .menu__burg').toggleClass('active');
    });

    $('.crest-exit').click(function (event) {
        $('.menu__burg').toggleClass('active');
    });

    $('.filter_text-main').click(function (event) {
        $('.filter').toggleClass('active-one');
        $('.sidebar').toggleClass('active-two');
        $('.filter-svg').toggleClass('color-svg');
    });

    $('.sidebar__one_select').click(function (event) {
        $('.sidebar__one__list').toggleClass('active-two');
    });
});

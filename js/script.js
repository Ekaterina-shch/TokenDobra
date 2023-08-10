// Инициализируем Swiper
new Swiper('.image-slider', {

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    simulateTouch: true,
    grabCursor: true,

    // Упарвление клавиатурой
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },

    autoHeight: true,
    slidesPerView: 'auto',
    spaceBetween: 16,

    breakpoints: {
        426: {
            spaceBetween: 40,
        },
    },

});

// mobil-menu 
let btnMenu = document.querySelector('.menu-mobil');
let menu = document.querySelector('.nav-list');
let main = document.querySelector('.page-body__main')

btnMenu.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('open');
    btnMenu.classList.toggle('close');
})

// copy text 
function copyText() {
    navigator.clipboard.writeText("https://tokendobra.ru/main");
    let modalCopy = document.querySelector('.modal-copy');
    modalCopy.classList.add('copy-show');
    setTimeout(() => {
        modalCopy.classList.remove('copy-show');
    }, 1400);
}

// open modal
let headerBtn = document.querySelector('.header-btn');
let modal = document.querySelector('.modal');

headerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.toggle('open');
})

// close modal 
let btnClose = document.querySelector('.modal__btn-close');

btnClose.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('open');
})

let scrollElements = document.querySelectorAll('.nav-list__item')

scrollElements.forEach(function (scrollElement) {
    scrollElement.addEventListener('click', (e) => {
        e.preventDefault();
        const el = document.getElementById('el');
        el.scrollIntoView({ behavior: "smooth" });
    })
})


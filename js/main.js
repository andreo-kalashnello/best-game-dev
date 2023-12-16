const header = document.querySelector(".header");
const headerMb = document.querySelector('.header-mb');

window.addEventListener("scroll", function() {
    const scrollY = window.scrollY;
if (scrollY > 100) {
    header.classList.add('header__scroll--active');
    headerMb.classList.add('header__scroll--active');
} else {
    header.classList.remove('header__scroll--active');
    headerMb.classList.remove('header__scroll--active');
}
});


const burgerBtn = document.querySelector('.burger__menu');


burgerBtn.addEventListener('click', () => {
    header.classList.toggle('header--active');
})



















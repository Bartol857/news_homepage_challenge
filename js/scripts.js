const navBtn = document.querySelector('.header__nav-btn');
const nav = document.querySelector('.header__nav-mobile');

const handleNav = () => {
    nav.classList.toggle('header__nav-mobile--active');
}

navBtn.addEventListener('click', handleNav);
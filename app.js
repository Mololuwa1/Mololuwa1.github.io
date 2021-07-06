const menuBtn = document.getElementById('menu-cta');
const nav = document.querySelector('nav');
const menuRmv = document.getElementById('mobile-exit')

menuBtn.addEventListener('click', () => {
    nav.classList.add('show');

})

menuRmv.addEventListener('click', () => {
    nav.classList.remove('show');
})

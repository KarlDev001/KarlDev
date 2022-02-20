const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('toggle-menu'),
    classMenu = document.getElementById('close-menu')

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})
classMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})
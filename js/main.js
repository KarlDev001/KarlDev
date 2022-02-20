const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('toggle-menu'),
    classMenu = document.getElementById('close-menu')

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})
classMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "carldev.official@gmail.com",
        Password: "password",
        To: 'karolis.vas9@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New Contact Form Submition From KarlDev.com",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}
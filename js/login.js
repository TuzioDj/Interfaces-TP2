var register = document.querySelectorAll('.register');
var botonAlternativa = document.querySelectorAll('.botonAlternativa');

botonAlternativa.forEach(boton => {
    boton.addEventListener('click', function () {
        register.forEach(element => {
            element.classList.toggle('login')
        });
    })
})



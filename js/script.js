var botonHamburguesa = document.getElementById('hamburguesa')
var menuHamburguesa = document.getElementById('menuHamburguesa')
var imagen1 = "../images/svg/Hamburguesa cerrada.svg"
var imagen2 = "../images/svg/Hamburguesa abierta.svg"
var contadorImagen = 0;

botonHamburguesa.addEventListener('click', function () {
    menuHamburguesa.classList.toggle("menuHamburguesaAbierto");
    if (contadorImagen == 0) {
        botonHamburguesa.src = imagen2;
        contadorImagen = 1;
    }
    else {
        botonHamburguesa.src = imagen1;
        contadorImagen = 0;
    }
})
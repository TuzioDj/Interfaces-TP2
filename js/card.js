var botonCardPago = document.querySelectorAll('.cardButtonPaga');
botonCardPago.forEach(function (boton) {
    boton.addEventListener('click', function () {
        boton.classList.toggle('cardButtonAñadidoAlCarrito');
    })
})
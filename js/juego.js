var copiarUrl = document.querySelector('.copiarUrl');
var btnCompartir = document.getElementById('btnCompartir');

btnCompartir.addEventListener('click', function () {
    copiarUrl.classList.toggle('copiarUrlAbierto');
})
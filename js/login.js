var register = document.querySelectorAll('.register');
var botonAlternativa = document.querySelectorAll('.botonAlternativa');

botonAlternativa.forEach(boton => {
    boton.addEventListener('click', function () {
        register.forEach(element => {
            element.classList.toggle('login')
        });
    })
})

document.addEventListener("DOMContentLoaded", function () {
    const loadingContainer = document.querySelector(".loading-container");
    const loadingProgress = document.getElementById("loading-progress");


    const cargaTotal = 100;
    const intervalo = 50; 
    let progreso = 0;

    const actualizarPorcentaje = () => {
        progreso++;
        loadingProgress.textContent = progreso ;
    };

    const cargarContenidoPrincipal = () => {
        setTimeout(() => {
            loadingContainer.style.display = "none"; 
        }, 5000); 

        const intervaloCarga = setInterval(() => {
            if (progreso < cargaTotal) {
                actualizarPorcentaje();
            } else {
                clearInterval(intervaloCarga);
            }
        }, intervalo);
    };

    cargarContenidoPrincipal(); 
});
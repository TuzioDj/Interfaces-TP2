document.addEventListener('DOMContentLoaded', function() {
const botonCardPago = document.querySelectorAll('.cardButtonPaga');
botonCardPago.forEach(function (boton) {
    boton.addEventListener('click', function () {
        boton.classList.toggle('cardButtonAñadidoAlCarrito');
    })
})


const carouselContainer = document.querySelector('.carouselContainer')
const carouselControlsContainer = document.querySelector('.carouselControlsContainer')
const carouselControls = ['Previous', 'Next']
const carouselItems = document.querySelectorAll('.carouselItem')

class Carousel {
    constructor(container, items, controls){
        this.container = container
        this.controls = controls
        this.items = [...items]
    }

    updateCarousel(){
        this.items.forEach(item => {
            item.classList.remove('carouselItem1')
            item.classList.remove('carouselItem2')
            item.classList.remove('carouselItem3')
            item.removeEventListener('click', this.deshabilitarEnlace);
        });

        this.items.slice(0, 3).forEach((item, i) => {
            item.classList.add(`carouselItem${i+1}`)
            if (!item.classList.contains('carouselItem2')) {
                item.addEventListener('click', this.deshabilitarEnlace)
            }
        });
    }
    deshabilitarEnlace(event){
        event.preventDefault();
    }
    setCurrentState(direction){
        if (direction.className == 'carouselControlPrevious') {
            this.items.unshift(this.items.pop())
        }
        else{
            this.items.push(this.items.shift())
        }
        this.updateCarousel();
    }

    setControls(){
        this.controls.forEach(control => {
            carouselControlsContainer.appendChild(document.createElement('button')).className = `carouselControl${control}`
        });
    }

    useControls(){
        const triggers = [...carouselControlsContainer.childNodes]
        triggers.forEach(control=> {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            })
        });
    }
}

const carouselesChicos = document.querySelectorAll('.carouselChico');

carouselesChicos.forEach(carouselChico => {
    const container = carouselChico.querySelector('.carouselChicoContainer');
    const buttonLeft = carouselChico.querySelector('.carouselChicoButtonLeft');
    const buttonRight = carouselChico.querySelector('.carouselChicoButtonRight');
    // Controlador de evento para el botón de la izquierda
    buttonLeft.addEventListener('click', function () {
      container.scrollLeft -= 500; // Desplaza hacia la izquierda (ajusta la cantidad según tus necesidades)
    });
    
    // Controlador de evento para el botón de la derecha
    buttonRight.addEventListener('click', function () {
      container.scrollLeft += 500; // Desplaza hacia la derecha (ajusta la cantidad según tus necesidades)
    });
});

const carouselExample = new Carousel(carouselContainer,carouselItems,carouselControls)
carouselExample.setControls()
carouselExample.useControls()
carouselExample.updateCarousel()
})
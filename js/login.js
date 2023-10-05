
var nombre = document.querySelector('.nombre'); 0
var apellido = document.querySelector('.apellido');
var edad = document.querySelector('.edad');
var correo = document.querySelector('.correo');
var usuario = document.querySelector('.usuario');
var contraseña = document.querySelector('.contraseña');
var confirmarContraseña = document.querySelector('.confirmarContraseña');
var asterisco = document.querySelector('.asterisco');
var captcha = document.querySelector('.captcha');
var form = document.querySelector('.formRegister');
var registerTitulo = document.getElementById('registerTitulo');
var btnRegistrate = document.getElementById('logAlternativa');
var btnRegistrarseCeleste = document.getElementById('botonRegistrarse');
var btnsRegistrarseRedes = document.querySelector('.botonSecundarioCeleste');
var regFacebook = document.getElementById('regFacebook');
var regGoogle = document.getElementById('regGoogle');
var beforeAlternativa = document.getElementById('beforeAlternativa');
var alternativa = document.getElementById('logAlternativa');


btnRegistrate.addEventListener('click', function () {
    nombre.classList.toggle('inputAfter');
    apellido.classList.toggle('inputAfter');
    edad.classList.toggle('inputAfter');
    usuario.classList.toggle('inputAfter');
    confirmarContraseña.classList.toggle('inputAfter');
    asterisco.classList.toggle('sinAsterisco')

    // captcha.classList.toggle('inputAfter');
    form.classList.toggle('formLogin');
    if (btnRegistrarseCeleste.textContent === "Iniciar Sesión") {
        registerTitulo.textContent = "Registrarse"
        btnRegistrarseCeleste.textContent = "Registrarse";
        regFacebook.textContent = "Registrarse con Facebook";
        regGoogle.textContent = "Registrarse con Google";
        beforeAlternativa.textContent = "¿Ya tienes una cuenta? ";
        alternativa.textContent = " Iniciá sesión";
    } else {
        registerTitulo.textContent = "Iniciar sesión";
        btnRegistrarseCeleste.textContent = "Iniciar Sesión";
        regFacebook.textContent = "Iniciar sesión con Facebook"
        regGoogle.textContent = "Iniciar sesión con Google";
        beforeAlternativa.textContent = "¿No tienes una cuenta? ";
        alternativa.textContent = " Registrate";
      }
})



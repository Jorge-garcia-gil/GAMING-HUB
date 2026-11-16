var botonLogin = document.getElementById("btnLogin");
var botonRegistro = document.getElementById("btnRegistro");
var formLogin = document.getElementById("formLogin");
var formRegistro = document.getElementById("formRegistro");

function mostrarLogin() {
    formLogin.classList.remove("oculto");
    formRegistro.classList.add("oculto");
    botonLogin.classList.add("activo");
    botonRegistro.classList.remove("activo");
}

function mostrarRegistro() {
    formRegistro.classList.remove("oculto");
    formLogin.classList.add("oculto");
    botonRegistro.classList.add("activo");
    botonLogin.classList.remove("activo");
}

botonLogin.addEventListener("click", mostrarLogin);
botonRegistro.addEventListener("click", mostrarRegistro);

var contrasena = document.getElementById("contrasenaRegistro");
var repite = document.getElementById("repiteContrasena");

function comprobarContrasenas() {
    if (contrasena.value == repite.value) {
        repite.setCustomValidity("");
    } else {
        repite.setCustomValidity("Las contraseñas no coinciden");
    }
}

contrasena.addEventListener("input", comprobarContrasenas);
repite.addEventListener("input", comprobarContrasenas);

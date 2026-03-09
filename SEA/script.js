/* ════════════════════════════════════════════════
   script.js — SEA Startup
   Lógica de interacción separada del HTML
════════════════════════════════════════════════ */

/**
 * 1. NAVBAR — Agrega fondo al hacer scroll
 * Cuando el usuario baja más de 40px, se aplica la clase
 * 'con-scroll' que activa el fondo oscuro semitransparente.
 */
(function initNavbarScroll() {
  var navbar = document.getElementById('navbar');

  if (!navbar) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      navbar.classList.add('con-scroll');
    } else {
      navbar.classList.remove('con-scroll');
    }
  });
})();


/**
 * 2. HAMBURGER — Toggle del menú en pantallas pequeñas
 * Al hacer clic en el botón de tres líneas se alterna
 * la visibilidad del menú de navegación.
 */
(function initHamburger() {
  var hamburger = document.getElementById('hamburger');
  var navMenu   = document.getElementById('navMenu');

  if (!hamburger || !navMenu) return;

  // Abre o cierra el menú al pulsar el botón hamburguesa
  hamburger.addEventListener('click', function () {
    var estaAbierto = navMenu.classList.toggle('abierto');
    hamburger.setAttribute('aria-expanded', String(estaAbierto));
  });

  // Cierra el menú al hacer clic en cualquier enlace
  navMenu.querySelectorAll('a').forEach(function (enlace) {
    enlace.addEventListener('click', function () {
      navMenu.classList.remove('abierto');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
})();


/**
 * 3. FORMULARIO DE CONTACTO — Validación y confirmación
 * Valida los campos requeridos antes de "enviar".
 * Si todos son válidos, oculta el formulario y muestra
 * el panel de confirmación.
 */
(function initFormulario() {
  var formulario  = document.getElementById('formularioContacto');
  var exitoPanel  = document.getElementById('exitoForm');

  if (!formulario || !exitoPanel) return;

  formulario.addEventListener('submit', function (evento) {
    // Prevenir el envío nativo del formulario
    evento.preventDefault();

    // Leer valores de cada campo
    var nombre  = document.getElementById('nombre').value.trim();
    var email   = document.getElementById('email').value.trim();
    var asunto  = document.getElementById('asunto').value;
    var mensaje = document.getElementById('mensaje').value.trim();

    // Verificar que todos los campos estén completos
    if (!nombre || !email || !asunto || !mensaje) {
      alert('Por favor completa todos los campos obligatorios.');
      return;
    }

    // Validar formato de correo electrónico
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      alert('Por favor ingresa un correo electrónico válido.');
      return;
    }

    // Todo correcto: mostrar panel de éxito y ocultar formulario
    formulario.style.display = 'none';
    exitoPanel.style.display = 'flex';
  });
})();

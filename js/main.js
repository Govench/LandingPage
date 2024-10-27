//SCROLL DEL NAVBAR
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar'); // Selecciona la barra de navegación
    if (window.scrollY > 50) { // Cambia el valor a lo que necesites
        navbar.classList.add('scrolled'); // Añade la clase 'scrolled' cuando el scroll es mayor a 50px
    } else {
        navbar.classList.remove('scrolled'); // Quita la clase si está en la parte superior
    }
});
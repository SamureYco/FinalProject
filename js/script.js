// Animaciones de Desplazamiento
document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');

    // Aparece los elementos con la clase fade-in cuando se hace scroll
    const appearOnScroll = () => {
        const windowHeight = window.innerHeight;
        fadeInElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    };

    // Evento de scroll
    window.addEventListener('scroll', appearOnScroll);

    // Llamar la función cuando se carga la página para que las animaciones ocurran inmediatamente
    appearOnScroll();
});

// Menú Desplegable (para móviles)
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    // Cambia la visibilidad del menú
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});

// Validación de Formulario (para el registro)
document.getElementById('register-form')?.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío del formulario para validarlo primero

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters.');
        return;
    }

    alert('Registration successful!');
});

// Validar correo electrónico
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

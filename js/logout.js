document.addEventListener("DOMContentLoaded", function () {
    const logoutBtn = document.querySelector('.logoutButton');

    if (logoutBtn) {
        logoutBtn.addEventListener('click', function (e) {
            e.preventDefault(); // evita comportamiento por defecto del enlace
            localStorage.clear(); // elimina los datos del usuario
            window.location.href = 'index.html'; // redirige al inicio
        });
    }
});

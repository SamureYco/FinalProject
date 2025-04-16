document.querySelector('#register-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    // Guardar en localStorage
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    alert('¡Cuenta registrada con éxito!');
    window.location.href = 'login.html';  // Redirigir a login
});

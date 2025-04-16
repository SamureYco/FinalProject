document.querySelector('#login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
        // Si la contraseña es correcta, ir al dashboard
        window.location.href = 'dashbord.html';
    } else {
        alert('Correo o contraseña incorrectos.');
    }
});

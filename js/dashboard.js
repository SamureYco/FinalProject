document.addEventListener("DOMContentLoaded", () => {
    const userName = localStorage.getItem("userName");
    const welcomeTitle = document.querySelector(".dashboard-welcome h2");
  
    if (!userName) {
      // Redirige si no hay sesión
      window.location.href = "login.html";
    } else {
      welcomeTitle.textContent = `¡Bienvenido a tu panel, ${userName}!`;
    }
  });
  // Esta parte debería funcionar después de que el usuario haga clic en "Cerrar sesión"
    document.querySelector('.logout-button').addEventListener('click', function (e) {
    e.preventDefault();  // Prevenir la redirección automática por el enlace
    localStorage.removeItem('userName'); // Eliminar los datos del usuario almacenados
    window.location.href = 'login.html'; // Redirigir a la página de login
  });
  const storedEmail = localStorage.getItem("userEmail");
  const storedPassword = localStorage.getItem("userPassword");

  if (!storedEmail || !storedPassword) {
      window.location.href = "login.html";
  }
  
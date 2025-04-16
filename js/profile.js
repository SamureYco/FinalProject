document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const form = document.querySelector("form");
  
    // Simulación de datos cargados desde localStorage (puedes cambiarlo por tu backend)
    const user = JSON.parse(localStorage.getItem("userData")) || {
      name: "Samuel Pérez",
      email: "samuel@example.com"
    };
  
    // Prellenar campos
    nameInput.value = user.name;
    emailInput.value = user.email;
  
    // Manejar la actualización del perfil
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
  
      const updatedUser = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value, // opcional
      };
  
      try {
        // Simulación local
        localStorage.setItem("userData", JSON.stringify(updatedUser));
        alert("Perfil actualizado correctamente");
  
        // Si tienes un backend, descomenta esto:
        /*
        const response = await fetch("https://tu-backend.com/api/updateProfile", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        });
  
        if (response.ok) {
          alert("Perfil actualizado correctamente");
        } else {
          const result = await response.json();
          alert(result.message || "Hubo un error al actualizar tu perfil");
        }
        */
      } catch (error) {
        console.error("Error actualizando perfil:", error);
        alert("Error de conexión. Intenta más tarde.");
      }
    });
    // Espera a que el DOM se cargue completamente
document.addEventListener("DOMContentLoaded", () => {
    const logoutButton = document.querySelector('.logout-button');
    
    // Verifica si el usuario está logueado
    const userName = localStorage.getItem('userName');
    if (!userName) {
      // Si no hay sesión activa, redirige a la página de login
      window.location.href = 'login.html';
    }
    
    // Cerrar sesión
    logoutButton.addEventListener('click', () => {
      // Elimina la información del usuario almacenada en localStorage
      localStorage.removeItem('userName'); // O el nombre de la clave que uses para almacenar los datos
      // Redirige al usuario a la página de login o inicio
      window.location.href = 'index.html';  // O 'login.html' si prefieres llevarlos directamente a la página de login
    });
  });
  
  });
  
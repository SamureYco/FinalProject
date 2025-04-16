document.addEventListener("DOMContentLoaded", function () {
    const sessionsList = document.getElementById("sessions-list");
  
    function cargarSesiones() {
      sessionsList.innerHTML = "";
  
      const sesionesGuardadas = JSON.parse(localStorage.getItem("sesiones")) || [];
  
      sesionesGuardadas.forEach((sesion) => {
        const sessionDiv = document.createElement("div");
        sessionDiv.classList.add("session-item");
  
        sessionDiv.innerHTML = `
          <h3>📚 ${sesion.tema}</h3>
          <p><strong>Fecha:</strong> ${sesion.fecha}</p>
          <p><strong>Hora:</strong> ${sesion.hora}</p>
          <p><strong>Estado:</strong> ${sesion.estado}</p>
          <a href="session-details.html?id=${sesion.id}" class="btn">Ver detalles</a>
          <button class="btn delete-btn" data-id="${sesion.id}">🗑️ Eliminar</button>
        `;
  
        sessionsList.appendChild(sessionDiv);
      });
  
      agregarEventosEliminar();
    }
  
    function agregarEventosEliminar() {
      const botonesEliminar = document.querySelectorAll(".delete-btn");
  
      botonesEliminar.forEach((btn) => {
        btn.addEventListener("click", function () {
          const id = this.getAttribute("data-id");
  
          let sesiones = JSON.parse(localStorage.getItem("sesiones")) || [];
          sesiones = sesiones.filter((s) => s.id !== id);
          localStorage.setItem("sesiones", JSON.stringify(sesiones));
  
          cargarSesiones();
        });
      });
    }
  
    cargarSesiones();
  });
  
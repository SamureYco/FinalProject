document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get("id");
  
    const sesiones = JSON.parse(localStorage.getItem("sesiones")) || [];
  
    const session = sesiones.find(s => s.id == sessionId);
  
    if (session) {
      const sessionInfo = document.getElementById("session-info");
      sessionInfo.innerHTML = `
        <h3>${session.tema}</h3>
        <p><strong>Fecha:</strong> ${session.fecha}</p>
        <p><strong>Hora:</strong> ${session.hora}</p>
        <p><strong>Estado:</strong> ${session.estado}</p>
      `;
    } else {
      document.getElementById("session-info").innerHTML = "<p>Sesión no encontrada.</p>";
    }
  });
  
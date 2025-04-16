document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('solicitar-form');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const tema = document.getElementById('tema').value;
      const fecha = document.getElementById('fecha').value;
      const hora = document.getElementById('hora').value;
  
      const nuevaSesion = {
        id: Date.now().toString(), // Genera un ID único
        tema,
        fecha,
        hora,
        estado: 'Pendiente'
      };
  
      const sesiones = JSON.parse(localStorage.getItem('sesiones')) || [];
      sesiones.push(nuevaSesion);
      localStorage.setItem('sesiones', JSON.stringify(sesiones));
  
      window.location.href = 'sessions.html';
    });
  });
  
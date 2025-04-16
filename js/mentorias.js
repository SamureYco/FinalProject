document.addEventListener("DOMContentLoaded", function() {
    const mentoriasList = document.getElementById("mentorias-list");
  
    // Lista de mentorías disponibles (esto lo puedes traer de una API o de localStorage si lo deseas)
    const mentoriasDisponibles = [
      {
        tema: "Matemáticas Avanzadas",
        descripcion: "Mentoría sobre álgebra, cálculo y geometría avanzada.",
        disponibilidad: "Lunes y Miércoles - 10:00 AM a 12:00 PM",
        id: 1
      },
      {
        tema: "Estrategias de Aprendizaje",
        descripcion: "Técnicas para mejorar tu capacidad de aprender de manera eficiente.",
        disponibilidad: "Martes y Jueves - 3:00 PM a 5:00 PM",
        id: 2
      },
      {
        tema: "Productividad Académica",
        descripcion: "Aprende a gestionar tu tiempo y ser más productivo en tus estudios.",
        disponibilidad: "Viernes - 1:00 PM a 3:00 PM",
        id: 3
      }
    ];
  
    // Verifica si hay mentorías disponibles y las muestra
    if (mentoriasDisponibles.length > 0) {
      mentoriasDisponibles.forEach(mentoria => {
        const mentoriaDiv = document.createElement("div");
        mentoriaDiv.classList.add("mentoria-item");
  
        mentoriaDiv.innerHTML = `
          <h3>${mentoria.tema}</h3>
          <p><strong>Descripción:</strong> ${mentoria.descripcion}</p>
          <p><strong>Disponibilidad:</strong> ${mentoria.disponibilidad}</p>
          <a href="solicitar.html?id=${mentoria.id}" class="btn">Solicitar Mentoría</a>
        `;
        
        // Agregar el item de mentoría al contenedor
        mentoriasList.appendChild(mentoriaDiv);
      });
    } else {
      mentoriasList.innerHTML = "<p>No hay mentorías disponibles actualmente.</p>";
    }
  });
  
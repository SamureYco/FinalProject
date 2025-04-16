document.addEventListener("DOMContentLoaded", () => {
    const resources = [
      {
        titulo: "📘 Guía de estudio de Matemáticas",
        descripcion: "Una guía completa de temas básicos hasta avanzados en matemáticas.",
        enlace: "https://www.khanacademy.org/math",
      },
      {
        titulo: "📖 Estrategias de aprendizaje",
        descripcion: "Consejos y técnicas para mejorar tu capacidad de aprendizaje.",
        enlace: "https://www.skillshub.com/blog/active-learning-strategies-examples/",
      },
      {
        titulo: "💡 Tutorial de productividad",
        descripcion: "Aprende cómo organizar tu tiempo y aumentar tu productividad académica.",
        enlace: "https://www.youtube.com/watch?v=SKJWrEZeP6A",
      },
    ];
  
    const resourcesList = document.querySelector(".resources-list");
  
    function mostrarRecursos(filtrados = resources) {
      resourcesList.innerHTML = ""; // Limpiar la lista
  
      filtrados.forEach((recurso) => {
        const item = document.createElement("div");
        item.classList.add("resource-item");
        item.style.opacity = 0; // Animación
  
        item.innerHTML = `
          <h3>${recurso.titulo}</h3>
          <p>${recurso.descripcion}</p>
          <a href="${recurso.enlace}" class="btn" target="_blank">Ver recurso</a>
        `;
  
        resourcesList.appendChild(item);
  
        // Animación de fade-in
        setTimeout(() => {
          item.style.transition = "opacity 0.6s ease-in";
          item.style.opacity = 1;
        }, 100);
      });
    }
  
    // Crear barra de búsqueda
    const searchSection = document.createElement("section");
    searchSection.classList.add("search-bar");
    searchSection.innerHTML = `
      <input type="text" id="search-input" placeholder="Buscar recursos..." />
    `;
    resourcesList.parentElement.insertBefore(searchSection, resourcesList);
  
    const searchInput = document.getElementById("search-input");
    searchInput.addEventListener("input", () => {
      const texto = searchInput.value.toLowerCase();
      const filtrados = resources.filter((r) =>
        r.titulo.toLowerCase().includes(texto) ||
        r.descripcion.toLowerCase().includes(texto)
      );
      mostrarRecursos(filtrados);
    });
  
    mostrarRecursos(); // Mostrar todo al inicio
  });
  
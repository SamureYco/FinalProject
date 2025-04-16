document.addEventListener("DOMContentLoaded", () => {
    // Scroll suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth"
          });
        }
      });
    });
  
    // Animar secciones al hacer scroll (básico)
    const animatedElements = document.querySelectorAll(".section-title, .feature-item, .about-content, .contact-content");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.2 });
  
    animatedElements.forEach(el => {
      observer.observe(el);
    });
  
    // Mostrar alerta o acción para CTA
    const ctaBtn = document.querySelector(".cta-button");
    if (ctaBtn) {
      ctaBtn.addEventListener("click", () => {
        console.log("CTA activada. Redirige o despliega modal aquí si lo deseas.");
        // Por ejemplo: window.location.href = "register.html";
      });
    }
  });
  
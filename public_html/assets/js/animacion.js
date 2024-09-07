document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-in"); // Selecciona todos los elementos que quieras que aparezcan

  function checkVisibility() {
    const windowHeight = window.innerHeight;

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        // 100px antes de que el elemento entre en la vista
        element.classList.add("visible");
      } else {
        element.classList.remove("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);

  // Ejecuta la función al cargar la página para verificar los elementos visibles desde el principio
  checkVisibility();
});

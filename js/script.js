// ==========================================
// CONTROLE DO MENU RESPONSÍVEL (TOGGLE)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    // Abre e fecha a gaveta de links
    navToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      navLinks.classList.toggle("open");
    });

    // Fecha se o usuário clicar em um link interno (bom para âncoras)
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });

    // Fecha o menu caso o usuário clique em qualquer outra área cinza da página
    document.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  }
});
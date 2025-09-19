// ===== FADE-IN ON SCROLL =====
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(
    ".project-card, .skill-box, .hero-text,  .about-t, .section-title, .education ul, .achievements ul, .services ul"
  );
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("fade-in");
    }
  });
});

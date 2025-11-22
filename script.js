// ===== FADE-IN ON SCROLL =====
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(
    " .section-title"
  );
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("fade-in");
    }
  });
});


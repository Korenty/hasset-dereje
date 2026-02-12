// Scroll Reveal Animation
const revealElements = document.querySelectorAll("section");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

revealElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(60px)";
  el.style.transition = "all 0.8s ease";
});


(function () {
  // Prefer top-hero if present, so slider covers header + banner
  const hero = document.querySelector('.top-hero.has-slider');
  const slides = hero ? hero.querySelectorAll('.top-hero-slider .slide') : [];
  if (!slides || !slides.length) return;

  let currentIndex = 0;
  const total = slides.length;
  const intervalMs = 5000;

  function showSlide(index) {
    slides.forEach((img, i) => {
      if (i === index) {
        img.classList.add('active');
      } else {
        img.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % total;
    showSlide(currentIndex);
  }

  // Ensure first slide visible
  showSlide(currentIndex);

  // Start autoplay
  let timer = setInterval(nextSlide, intervalMs);

  // Pause on hover (desktop)
  hero.addEventListener('mouseenter', () => {
    clearInterval(timer);
  });
  hero.addEventListener('mouseleave', () => {
    timer = setInterval(nextSlide, intervalMs);
  });
})();



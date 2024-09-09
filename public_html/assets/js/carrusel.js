let currentIndex = 0;

function moveSlide(step) {
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;

  currentIndex = (currentIndex + step + totalItems) % totalItems;
  const offset = -currentIndex * 100;

  document.querySelector(
    ".carousel"
  ).style.transform = `translateX(${offset}%)`;
}

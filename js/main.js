function controlledSlider(
  buttonsSelector,
  trackSelector,
  slidesSelector,
  slideWidth,
  visibleSlides = 3
) {
  let btns = document.querySelectorAll(buttonsSelector);
  let sliderIndex = 0;

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const offset = parseInt(e.currentTarget.getAttribute("offset"));
      const slider = document.querySelector(trackSelector);
      const totalSlides = slider.querySelectorAll(slidesSelector).length;

      sliderIndex += offset;

      if (sliderIndex < 0) sliderIndex = 0;
      if (sliderIndex > totalSlides - visibleSlides) {
        sliderIndex = totalSlides - visibleSlides;
      }

      const moveX = -sliderIndex * slideWidth;

      slider.style.transform = `translateX(${moveX}px)`;
    });
  });
}

controlledSlider(".dentist-slider-buttons", ".cards-list", ".card", 360, 3);

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

const hamburger = document.getElementById("hamburger");
const navContainer = document.getElementsByClassName("nav-container")[0];
let linksDiv = document.createElement("div");
linksDiv.className = "nav-details";
linksDiv.innerHTML = `
          <div class="nav-details-addresses">
          <a href="#">
            <i class="fa-solid fa-location-dot"></i>
            <p>St. Sanguin Number 40</p>
          </a>
          <a href="#">
            <i class="fa-solid fa-phone"></i>
            <p>+1234 - 4567 - 890</p>
          </a>
          </div>
          <button class="appointment-button" title="schedule a visit">
            APPOINTMENT
          </button>
`;
hamburger.addEventListener("click", (e) => {
  navContainer.classList.toggle("active");
  if (navContainer.contains(linksDiv)) {
    // remove it if it’s already there
    navContainer.removeChild(linksDiv);
  } else {
    // add it if it’s not
    navContainer.appendChild(linksDiv);
  }
});

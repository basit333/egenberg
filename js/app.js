/*
---------------------------------------
            Navbar
---------------------------------------
*/

const navOpenBtn = document.querySelector(".nav__bar--hamburger-btn");
const navCloseBtn = document.querySelector(".mobile__navbar--close-btn");
const navMobileMenu = document.querySelector(".mobile__navbar");

if (navOpenBtn) {
  navOpenBtn.addEventListener("click", function () {
    navMobileMenu.classList.add("mobile__navbar--open");
  });
}

if (navCloseBtn) {
  navCloseBtn.addEventListener("click", function () {
    navMobileMenu.classList.remove("mobile__navbar--open");
  });
}

/*
---------------------------------------
            Grid Slider
---------------------------------------
*/
new Swiper(".mySwiperGrid", {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  grid: {
    rows: 2,
    fill: "row",
  },
  pagination: {
    el: ".swiper-pagination.swiper-grid-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

/*
---------------------------------------
            Video Player
---------------------------------------
*/

const videoPlayBtn = document.querySelector(".video__play--btn");
// const videoOverlayImg = document.querySelector(".video__overlay--img");
const videoPlayer = document.querySelector(".video__player");

// Hide video controls by default
videoPlayer.controls = false;

videoPlayBtn.addEventListener("click", () => {
  // videoOverlayImg.classList.add("video__overlay--img-hidden");
  videoPlayBtn.classList.add("video__play--btn-hidden");

  setTimeout(() => {
    // videoOverlayImg.style.display = "none";
    videoPlayBtn.style.display = "none";
    videoPlayer.controls = true; // Show video controls
    videoPlayer.play(); // Play the video
  }, 500);
});

/*
---------------------------------------
                FAQ
---------------------------------------
*/
// Get DOM elements
const faqQuestionWrappers = document.querySelectorAll(".faq__question--wrapper");
const faqAnswerWrappers = document.querySelectorAll(".faq__answer--wrapper");
const faqPlusIcons = document.querySelectorAll(".faq-plus-icon");
const faqMinusIcons = document.querySelectorAll(".faq-minus-icon");

// Add event listeners to question wrappers
faqQuestionWrappers.forEach((questionWrapper, index) => {
  questionWrapper.addEventListener("click", () => {
    // Remove "faq__answer--wrapper-open" class from all answer wrappers
    faqAnswerWrappers.forEach((answerWrapper, i) => {
      if (i !== index) {
        answerWrapper.classList.remove("faq__answer--wrapper-open");
      }
    });

    // Toggle visibility of the corresponding answer wrapper
    faqAnswerWrappers[index].classList.toggle("faq__answer--wrapper-open");
    const isOpen = faqAnswerWrappers[index].classList.contains("faq__answer--wrapper-open");

    // Toggle classes of plus and minus icons
    faqPlusIcons.forEach((plusIcon, i) => {
      plusIcon.style.display = i === index && isOpen ? "none" : "block";
    });

    faqMinusIcons.forEach((minusIcon, i) => {
      minusIcon.style.display = i === index && isOpen ? "block" : "none";
    });
  });
});

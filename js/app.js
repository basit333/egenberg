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
const videoOverlayImg = document.querySelector(".video__overlay--img");
const videoPlayer = document.querySelector(".video__player");

// Hide video controls by default
videoPlayer.controls = false;

videoPlayBtn.addEventListener("click", () => {
  videoOverlayImg.classList.add("video__overlay--img-hidden");
  videoPlayBtn.classList.add("video__play--btn-hidden");

  setTimeout(() => {
    videoOverlayImg.style.display = "none";
    videoPlayBtn.style.display = "none";
    videoPlayer.controls = true; // Show video controls
    videoPlayer.play(); // Play the video
  }, 500);
});

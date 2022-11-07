const burger = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const body = document.body;

if (burger && menu) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("_active");
    menu.classList.toggle("_active");
    body.classList.toggle("_lock");
  });
}
// ==============================Filter dropdown======================

const filter = document.querySelector(".filter");

if (filter) {
  const item = filter.querySelectorAll(".block-filter");

  item.forEach((item) => {
    item.addEventListener("click", (event) => {
      item.querySelector(".block-filter_dropdown").classList.toggle("_active");
      item.querySelector(".block-filter_icon").classList.toggle("_active");

      if (event.target.classList.contains("block-filter_item")) {
        item.querySelector(".block-filter_value").textContent =
          event.target.textContent;
      }
    });
  });
}

// ==============================swiper===================================

const popularSlider = new Swiper(".popular-slider", {
  spaceBetween: 20,
  slidesPerView: 1,
  // Navigation arrows
  navigation: {
    nextEl: ".popular-slide-next",
    prevEl: ".popular-slide-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    660: {
      slidesPerView: 2,
    },
  },
});

const reviewsSlider = new Swiper(".slider-reviews", {
  spaceBetween: 20,
  slidesPerView: 1,
  autoHeight: true,
  navigation: {
    nextEl: ".slider-reviews-next",
    prevEl: ".slider-reviews-prev",
  },
});

// =============================/swiper===================================

// =============================Gallery==================================
const galleryItems = document.querySelectorAll(".gallery_item");

if (galleryItems.length > 0) {
  galleryItems.forEach((item) => {
    new Swiper(item, {
      slidesPerView: 1,
      autoplay: {
        delay: 5000,
      },
      effect: "fade",
    });
  });
}

// ============================/Gallery==================================

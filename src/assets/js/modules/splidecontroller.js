import Splide from "@splidejs/splide";

const slideMobile = document.querySelector("[data-home='slide-mobile']");
if (slideMobile) {
  const MobileBanner = new Splide(slideMobile, {
    autoplay: true,
    type: "loop",
    rewind: true,
    perMove: 1,
    pagination: false,
    arrows: false,
    perPage: 1,
  });
  MobileBanner.mount();
}
const slideDesktop = document.querySelector("[data-home='slide-desktop']");
if (slideDesktop) {
  const desktopBanner = new Splide(slideDesktop, {
    autoplay: true,
    type: "loop",
    rewind: true,
    perMove: 1,
    pagination: false,
    arrows: false,
    perPage: 1,
  });
  desktopBanner.mount();
}
const slide1 = document.querySelector("[data-home='slide_1']");
// controls Slide for treatments
if (slide1) {
  const slideTreatment = new Splide(slide1, {
    autoplay: true,
    type: "loop",
    rewind: true,
    gap: "2rem",
    perMove: 1,
    pagination: false,
    arrows: false,
    perPage: 3,
    breakpoints: {
      1160: {
        perPage: 2,
      },
      980: {
        perPage: 2,
      },
      720: {
        perPage: 1,
      },
    },
  });
  slideTreatment.mount();
}

const slide2 = document.querySelector("[data-home='slide_2']");

// controls slides for offices
if (slide2) {
  const slideOffices = new Splide(slide2, {
    autoplay: true,
    type: "loop",
    rewind: true,
    gap: "2rem",
    perMove: 1,
    pagination: false,
    arrows: false,
    perPage: 3,
    breakpoints: {
      1160: {
        perPage: 2,
      },
      980: {
        perPage: 2,
      },
      720: {
        perPage: 1,
      },
    },
  });
  slideOffices.mount();
}

const slide3 = document.querySelector("[data-home='slide_3']");

// control slides for prizes
if (slide3) {
  const slidePrizes = new Splide(slide3, {
    autoplay: true,
    type: "loop",
    rewind: true,
    gap: "2rem",
    perMove: 1,
    pagination: false,
    arrows: false,
    perPage: 3,
    breakpoints: {
      1160: {
        perPage: 2,
      },
      980: {
        perPage: 2,
      },
      720: {
        perPage: 1,
      },
    },
  });
  slidePrizes.mount();
}

const slide4 = document.querySelector("[data-home='slide_4']");

// constrol slides for News
if (slide4) {
  const slideNews = new Splide(slide4, {
    autoplay: true,
    type: "loop",
    rewind: true,
    gap: "2rem",
    perMove: 1,
    pagination: false,
    arrows: false,
    perPage: 3,
    breakpoints: {
      1160: {
        perPage: 2,
      },
      980: {
        perPage: 2,
      },
      720: {
        perPage: 1,
      },
    },
  });
  slideNews.mount();
}

const slide5 = document.querySelector("[data-home='slide_5']");

// constrol slides for reviews
if (slide5) {
  const slideReviews = new Splide(slide5, {
    autoplay: true,
    type: "loop",
    rewind: true,
    gap: "2rem",
    perMove: 1,
    pagination: false,
    arrows: false,
    perPage: 3,
    breakpoints: {
      1160: {
        perPage: 2,
      },
      980: {
        perPage: 2,
      },
      720: {
        perPage: 1,
      },
    },
  });
  slideReviews.mount();
}
const slide6 = document.querySelector("[data-home='slide_6']");

// constrol slides for reviews
if (slide6) {
  const slideSmiles = new Splide(slide6, {
    autoplay: true,
    type: "loop",
    rewind: true,
    gap: "2rem",
    perMove: 1,
    perPage: 1,
    pagination: false,
    arrows: false,
  });
  slideSmiles.mount();
}

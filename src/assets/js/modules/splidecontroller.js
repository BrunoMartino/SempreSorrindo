import Splide from "@splidejs/splide";

const slides = document.querySelectorAll("[data-home='slide']");
console.log(slides);

slides.forEach((slide) => {
  const slideTreatment = new Splide(slide, {
    type: "loop",
    gap: "5rem",
    padding: "4rem",
    perPage: 3,
    arrows: false,
    autoplay: true,
    rewind: true,
    pagination: false,
    lazyLoad: true,
    breakpoints: {
      920: {
        perPage: 2,
        arrows: false,
        lazyLoad: true,
      },
      720: {
        perPage: 1,
        arrows: true,
        padding: "2rem",
        gap: "3rem",
        lazyLoad: true,
      },
    },
  });

  slideTreatment.mount();
});

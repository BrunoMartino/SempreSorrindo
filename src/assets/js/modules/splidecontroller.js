import Splide from "@splidejs/splide";

const slides = document.querySelectorAll("[data-home='slide']");
console.log(slides);

slides.forEach((slide) => {
  const slideTreatment = new Splide(slide, {
    type: "loop",
    gap: "4rem",
    padding: "4rem",
    perPage: 3,
    arrows: false,
    autoplay: true,
    rewind: true,
    breakpoints: {
      920: {
        perPage: 2,
        arrows: true,
      },
      720: {
        perPage: 1,
        arrows: true,
        padding: "1.5rem",
      },
    },
  });

  slideTreatment.mount();
});

// const slideTreatment = new Splide(slide1, {
//   type: "loop",
//   gap: "4rem",
//   padding: "4rem",
//   perPage: 3,
//   arrows: false,
//   autoplay: true,
//   rewind: true,
//   breakpoints: {
//     920: {
//       perPage: 2,
//       arrows: true,
//     },
//     720: {
//       perPage: 1,
//       arrows: true,
//     },
//   },
// });

// slideTreatment.mount();

import MenuMobile from "./modules/menu-mobile.js";
import "./modules/splidecontroller.js";

const mobileBtn = document.getElementById("mobile__btn");
mobileBtn.addEventListener("click", (event) => {
  event.preventDefault();
});
const mobileMenu = new MenuMobile(
  '[data-mobile="btn"]',
  '[data-mobile="list"]'
);
mobileMenu.init();

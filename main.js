const banner = document.querySelector("#banner");
const button = document.querySelector("#backToTop");
const mobButton = document.querySelector("#mobileButton");
const nav = document.querySelector("nav");

window.onscroll = function () {
  scrollFunction();
};

scrollFunction = () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    banner.classList.add("bg");
    button.style.display = "block";
  } else {
    banner.classList.remove("bg");
    button.style.display = "none";
  }
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const mobMenu = () => {
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
  } else {
    nav.classList.add("responsive");
  }
};

button.addEventListener("click", getToTop);
mobButton.addEventListener("click", mobMenu);

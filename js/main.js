const burger = document.getElementById("burger");
const menu = document.getElementById("header__ul");

burger.addEventListener("click", () => {
  header__ul.classList.toggle("active");
});
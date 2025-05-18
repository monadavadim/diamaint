const burger = document.getElementById('burger');
const navList = document.querySelector('.header__ul');

burger.addEventListener('click', () => {
  navList.classList.toggle('active');
});
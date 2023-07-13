const navBar = document.querySelector('nav');
function togglebtn() {
  navBar.classList.toggle('hidemenu');
}
navBar.querySelector('.fa-bars').addEventListener('click', togglebtn);

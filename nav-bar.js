const toggleBtn = document.querySelector('.hamburgers');
const menu = document.querySelector('.menu');
const icons = document.querySelector('.twitter-facebook-icons');

toggleBtn.addEventListener('click', () => {
menu.classList.toggle('active');
icons.classList.toggle('active');
});

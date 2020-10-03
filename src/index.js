import './style.css';

console.log('Works!');

const clickables = document.querySelectorAll('.clickable');
clickables.forEach((item) => item.addEventListener('click', (event) => {
  event.preventDefault();
  event.target.classList.toggle('no-animation');
  event.target.nextElementSibling.classList.toggle('hidden');
}));

const button = document.querySelector('.button');
button.addEventListener('click', () => {
  const hidden = document.querySelector('.hidden');
  if (hidden) {
    clickables.forEach((item) => {
      item.classList.add('no-animation');
      item.nextElementSibling.classList.remove('hidden');
    });
  } else {
    clickables.forEach((item) => {
      item.classList.remove('no-animation');
      item.nextElementSibling.classList.add('hidden');
    });
  }
});

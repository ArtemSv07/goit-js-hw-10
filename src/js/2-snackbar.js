// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('input[type="number"]');
input.addEventListener('input', () => (delay = input.value));

const form = document.querySelector('.form');
form.addEventListener('submit', createPromis);
form.addEventListener('change', changeCheckBox);

let delay;
let fulfilledChecked;

function changeCheckBox(event) {
  if (event.target.value === 'fulfilled' || event.target.value === 'rejected') {
    fulfilledChecked = event.target.value;
  }
}

function createPromis(event) {
  event.preventDefault();

  const getUserPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fulfilledChecked === 'fulfilled') {
        resolve();
      } else if (fulfilledChecked === 'rejected') {
        reject();
      }
    }, delay);
  });

  getUserPromise
    .then(() => {
      iziToast.success({
        timeout: 5000,
        position: 'topRight',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(() => {
      iziToast.error({
        timeout: 5000,
        position: 'topRight',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
}

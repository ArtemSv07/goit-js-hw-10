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
///////////////////// radio style ///////////////////////

const rectFulfilled = document.querySelector('.rect-fulfilled');
const rectRejected = document.querySelector('.rect-rejected');
const rectFull = document.querySelector('.rect-ful');
const rectRej = document.querySelector('.rect-rej');
let checkedRadio = '';

const FulfilledLabel = document.querySelector('.Fulfilled-label');
FulfilledLabel.addEventListener('click', clickFulfilled);

const rejectedLabel = document.querySelector('.Rejected-label');
rejectedLabel.addEventListener('click', clickFulRejected);

function clickFulfilled() {
  rectFulfilled.classList.replace('rect-non', 'rect-on');
  rectRejected.classList.replace('rect-on', 'rect-non');
  rectFull.classList.replace('rect', 'rect-blue');
  rectRej.classList.replace('rect-blue', 'rect');
  checkedRadio = 'on';
}

function clickFulRejected() {
  rectFulfilled.classList.replace('rect-on', 'rect-non');
  rectRejected.classList.replace('rect-non', 'rect-on');
  rectFull.classList.replace('rect-blue', 'rect');
  rectRej.classList.replace('rect', 'rect-blue');
  checkedRadio = 'on';
}

const button = document.querySelector('button[type="submit"]');
button.addEventListener('click', () => {
  if (checkedRadio === '') {
    iziToast.warning({
      position: 'bottomLeft',
      message: 'Choose Fulfilled or Rejected',
    });
  }
});

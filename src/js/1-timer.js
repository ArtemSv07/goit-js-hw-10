// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');

const dataDays = document.querySelector('span[data-days]');
const dataHours = document.querySelector('span[data-hours]');
const dataMinutes = document.querySelector('span[data-minutes]');
const dataSeconds = document.querySelector('span[data-seconds]');

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const dateNow = Date.now();
    const selectedDate = selectedDates[0];
    userSelectedDate = selectedDate - dateNow;
  },
};

flatpickr(input, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function test(value, callback) {
  const call = callback(value);
  if (userSelectedDate) {
    let days = call.days;
    days = String(days).padStart(2, 0);
    dataDays.textContent = days;

    let hours = call.hours;
    hours = String(hours).padStart(2, 0);
    dataHours.textContent = hours;

    let minutes = call.minutes;
    minutes = String(minutes).padStart(2, 0);
    dataMinutes.textContent = minutes;

    let seconds = call.seconds;
    seconds = String(seconds).padStart(2, 0);
    dataSeconds.textContent = seconds;
  }
}

const interval = setInterval(() => {
  if (userSelectedDate === -1000) {
    clearInterval(interval);
  } else {
    test(userSelectedDate, convertMs);
    userSelectedDate -= 1000;
  }
}, 1000);

//   function addLeadingZero(value) {
//      [padStart()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
//   }
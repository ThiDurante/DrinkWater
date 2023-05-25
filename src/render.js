const { ipcRenderer } = require('electron');

let timerInterval;
let timerDisplay = document.querySelector('.timer');

function playSound() {
  console.log('Timer finished!');
}

function startTimer() {}

function stopTimer() {
  clearInterval(timerInterval);
}

document.getElementById('start').addEventListener('click', function () {
  startTimer();
});

document.getElementById('stop').addEventListener('click', function () {
  stopTimer();
});

ipcRenderer.send('renderer-loaded');

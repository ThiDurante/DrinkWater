let timerValue = 0;
let timerInterval;
let timerDisplay = document.querySelector('.timer');

function playSound() {
  const audio = new Audio('../fluid.wav');
  audio.play();
}

function checkTimer() {
  if (timerDisplay.innerHTML === '00:00') {
    playSound();
    resetTimer();
  }
}

function resetTimer() {
  timerDisplay.innerHTML = `${timerValue}:00`;
}

function startTimer() {
  timerInterval = setInterval(function () {
    let minutes = Math.floor(timerValue / 60);
    let seconds = timerValue % 60;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    timerDisplay.innerHTML = `${minutes}:${seconds}`;
    timerValue--;
    checkTimer();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

document.getElementById('start').addEventListener('click', function () {
  startTimer();
});

document.getElementById('stop').addEventListener('click', function () {
  stopTimer();
});

document.getElementById('time-input').addEventListener('change', function () {
  timerValue = this.value;
  timerDisplay.innerHTML = `${timerValue}:00`;
});

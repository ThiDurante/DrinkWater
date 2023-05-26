let timerValue = 0;
let timerInterval;
let timerDisplay = document.querySelector('.timer');

function playSound() {
  const audioElement = document.getElementById('myAudio');
  audioElement.play();
}

function checkTimer() {
  console.log(timerDisplay.innerHTML);
  if (timerDisplay.innerHTML === '00:00') {
    playSound();
    resetTimer();
  }
}

function resetTimer() {
  timerValue = document.getElementById('time-input').value;
  console.log(timerValue);
  startTimer();
}

function startTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  let minutesOrSeconds = document.getElementById('unit').value;
  if (minutesOrSeconds === 'minutes') {
    timerValue *= 60;
  }
  timerInterval = setInterval(function () {
    let minutes = Math.floor(timerValue / 60);
    let seconds = timerValue % 60;
    timerDisplay.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
    timerValue--;
    checkTimer();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerValue = 0;
}

document.getElementById('start').addEventListener('click', function () {
  startTimer();
});

document.getElementById('stop').addEventListener('click', function () {
  stopTimer();
});

document.getElementById('time-input').addEventListener('change', function () {
  timerValue = this.value;
});

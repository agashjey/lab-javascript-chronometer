let chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
  const min = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = min[0];
  minUniElement.textContent = min[1];
}

function printSeconds() {
  // ... your code goes here
  const sec = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = sec[0];
  secUniElement.textContent = sec[1];
}

// ==> BONUS
function printMilliseconds() {
  const ms = chronometer.computeTwoDigitNumber(chronometer.getMs());
  milDecElement.textContent = ms[0];
  milUniElement.textContent = ms[1];
}

function printSplit() {
  const li = document.createElement('li');
  splitsElement.appendChild(li);
  li.textContent = chronometer.split();
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  chronometer.stop();
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  chronometer.start(printTime);
}

function setResetBtn() {
  // ... your code goes here
  chronometer.reset();
  printTime();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('stop')) {
    //CHANGE BUTTONS STOP->START
    btnLeftElement.classList.remove('stop');
    btnLeftElement.classList.add('start');
    btnLeftElement.textContent = 'START';

    //CHANGE BUTTONS SPLIT->RESET
    btnRightElement.classList.remove('split');
    btnRightElement.classList.add('reset');
    btnRightElement.textContent = 'RESET';

    //STOP CHRONO
    setStopBtn();
  } else {
    btnLeftElement.classList.remove('start');
    btnLeftElement.classList.add('stop');
    btnLeftElement.textContent = 'STOP';

    btnRightElement.classList.remove('reset');
    btnRightElement.classList.add('split');
    btnRightElement.textContent = 'SPLIT';

    //START CHRONO
    setStartBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    setResetBtn();
    clearSplits();
  } else {
    printSplit();
  }
});

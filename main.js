const timeCount = document.querySelector(".timeCount");
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".reset");

var startTime;
var elapsedTime = 0;
var timerId;
var timeToadd = 0;

function updateTimeText() {
  var h = Math.floor(elapsedTime / 360000);
  var m = Math.floor(elapsedTime / 60000);
  var s = Math.floor((elapsedTime % 60000) / 1000);
  var ms = elapsedTime % 1000;

  h = ("0" + h).slice(-2);
  m = ("0" + m).slice(-2);
  s = ("0" + s).slice(-2);
  ms = ("0" + ms).slice(-2);

  timeCount.textContent = h + ":" + m + ":" + s + ":" + ms;
  }

function countUp() {
  timerId = setTimeout(function () {
  elapsedTime = Date.now() - startTime + timeToadd;
  updateTimeText();
  countUp();
  }, 10);
 }

function startTimer() {
  startTime = Date.now();
  countUp();
  startButton.setAttribute("disabled", true);
  stopButton.removeAttribute("disabled");
  resetButton.removeAttribute("disabled");
}

function stopTimer() {
  clearInterval(timerId);
  timeToadd += Date.now() - startTime;
  stopButton.setAttribute("disabled", true);
  startButton.removeAttribute("disabled");
}

function resetTimer() {
  clearInterval(timerId);
  elapsedTime = 0;
  timeToadd = 0;
  updateTimeText();
  startButton.removeAttribute("disabled");
  stopButton.setAttribute("disabled", true);
  resetButton.setAttribute("disabled", true);
  }

let stopWatchTag = document.getElementsByClassName("stopwatch")[0];
let startBtnTag = document.getElementsByClassName("startBtn")[0];
let pauseBtntag = document.getElementsByClassName("pauseBtn")[0];
let continueBtnTag = document.getElementsByClassName("continueBtn")[0];
let restartBtnTag = document.getElementsByClassName("restartBtn")[0];

// setInterval(callback,delay)
let minutes = 59,
  seconds = 50,
  hours = 0;

let startTime = () => {
  seconds += 1;
  if (seconds === 60) {
    seconds = 0;
    minutes += 1;
    if (minutes === 60) {
      minutes = 0;
      hours += 1;
    }
  }
  let hoursText = hours < 10 ? "0" + hours.toString() : hours;
  let minutesText = minutes < 10 ? "0" + hours.toString() : minutes;
  let secondsText = seconds < 10 ? "0" + seconds.toString() : seconds;
  stopWatchTag.textContent = hoursText + ":" + minutesText + ":" + secondsText;
};

let intervalId;
startBtnTag.addEventListener("click", () => {
  intervalId = setInterval(startTime, 1000);
});

pauseBtntag.addEventListener("click", () => {
  clearInterval(intervalId);
});

continueBtnTag.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = setInterval(startTime, 1000);
});

restartBtnTag.addEventListener("click", () => {
  clearInterval(intervalId);
  (seconds = 0), (minutes = 0), (hours = 0);
  intervalId = setInterval(startTime, 1000);
});

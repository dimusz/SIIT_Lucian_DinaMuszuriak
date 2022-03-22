function addZero(value) {
  if (value < 10) {
    return "0" + value;
  }
  return value;
}

function creatTimerHtml() {
  const timerHtml = document.createElement("div");
  timerHtml.className='timer'
  timerHtml.innerHTML = `
        <span id="hour">00</span>  : 
        <span id="minute">00  </span>:
        <span id="secunde">00</span>
    `;
  return timerHtml;
}

const timerHtml = creatTimerHtml();
document.body.appendChild(timerHtml);
const hourHtml = timerHtml.querySelector("#hour");
const minuteHtml = timerHtml.querySelector("#minute");
const secundeHtml = timerHtml.querySelector("#secunde");

function startTimer() {
  let secunde = 0;
  let minute = 0;
  let hour = 0;
  timerWeb = setInterval(function startClock() {
    secunde = secunde + 1;

    if (secunde == 60) {
      minute = minute + 1;
      secunde = 0;
    }

    if (minute == 60) {
      hour = hour + 1;
      minute = 0;
    }

    secundeHtml.innerHTML = addZero(secunde);
    minuteHtml.innerHTML = addZero(minute);
    hourHtml.innerHTML = addZero(hour);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerWeb);
}

function resetTimer() {
  clearInterval(timerWeb);
  let secunde = 0;
  let minute = 0;
  let hours = 0;
  secundeHtml.innerHTML = addZero(secunde);
  minuteHtml.innerHTML = addZero(minute);
  hourHtml.innerHTML = addZero(hours);
}

const saveTime = document.createElement("ul");

function saveTimer() {
  let seconds = secundeHtml.innerHTML;
  let minutes = minuteHtml.innerHTML;
  let ore = hourHtml.innerHTML;
  const newLine = document.createElement("li");
  newLine.innerHTML = `${ore}:${minutes}:${seconds}`;
  //console.log(timerWeb)
  console.log(newLine);
  saveTime.appendChild(newLine);
}
document.body.appendChild(saveTime);

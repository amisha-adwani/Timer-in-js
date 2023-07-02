//------------------------------CLOCK------------------

let output = document.getElementById("showTime");
let button = (document.getElementById("Button").onclick = function () {
  const today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  output.innerHTML = hour + ":" + min + ":" + sec;
  setTimeout(button, 1000);
});

//------------------------------STOPWATCH------------------

let Interval;

let hours = document.getElementById("hours");
let mins = document.getElementById("tens");
let secs = document.getElementById("secs");

document.getElementById("Start").onclick = function () {
  Interval = setInterval(time, 1000);
  function time() {
    secs.innerHTML++;
    if (secs.innerHTML < 10) {
      secs.innerHTML = "0" + secs.innerHTML;
    }

    if (secs.innerHTML === "59") {
      secs.innerHTML = "00";
      mins.innerHTML++;
      if (mins.innerHTML < 10) {
        mins.innerHTML = "0" + mins.innerHTML;
      }
    } else if (mins.innerHTML === "59") {
      mins.innerHTML = "00";
      hours.innerHTML++;
      if (hours.innerHTML < 10) {
        hours.innerHTML = "0" + hours.innerHTML;
      }
    }
  }
};

document.getElementById("Stop").onclick = function () {
  clearInterval(Interval);
};
document.getElementById("Reset").onclick = function () {
  clearInterval(Interval);
  secs.innerHTML = "00";
};

//------------------------------TIMER------------------

let Interval2;
document.getElementById("Start2").onclick = function () {
  Interval2 = setInterval(Timer, 1000);
  function Timer() {
    let TimerHour = document.getElementById("TimerHour");
    let TimerMin = document.getElementById("TimerMin");
    let TimerSec = document.getElementById("TimerSec");
    TimerSec.value--;
    if (TimerSec.value < 0) {
      TimerSec.value = 59;
      TimerMin.value--;

      if (TimerMin.value < 0) {
        TimerMin.value = 59;
        TimerHour.value--;

        if (TimerHour.value < 0) {
          TimerHour.value = 0;
        }
      }
    }

    if (TimerHour.value == 0 && TimerMin.value == 0) {
      TimerHour.value = 0;
      TimerMin.value = 0;
    }

    if (TimerHour.value == 0 && TimerMin.value == 0 && TimerSec.value == 0) {
      clearInterval(Interval2);
    }
  }
};

document.getElementById("Stop2").onclick = function () {
  clearInterval(Interval2);
};
document.getElementById("Reset2").onclick = function () {
  clearInterval(Interval2);
  TimerHour.value = 0;
  TimerMin.value = 0;
  TimerSec.value = 0;
};

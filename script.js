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

    if (secs.innerHTML === "60") {
      secs.innerHTML = "00";
      mins.innerHTML++;
      if (mins.innerHTML < 10) {
        mins.innerHTML = "0" + mins.innerHTML;
      }
    } else if (mins.innerHTML === "60") {
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

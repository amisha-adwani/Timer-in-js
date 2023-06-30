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
let h,m,s=0

let hours = document.getElementById("hours");
let mins = document.getElementById("tens");
let secs = document.getElementById("secs");

document.getElementById("Start").onclick = function () {
 Interval= setInterval(timeSec, 1000);
  function timeSec() {
  secs.innerHTML++  
  }
};
document.getElementById('Stop').onclick = function(){
  clearInterval(Interval) 
}
document.getElementById('Reset').onclick=function(){
  clearInterval(Interval) 
  secs.innerHTML = '00'
}
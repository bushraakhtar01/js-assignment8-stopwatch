var minutes = 0;
var seconds = 0;
var milliseconds = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;
var startBtn = document.getElementById('start');
var stopBtn = document.getElementById('stop');
function timer(){
  milliseconds++;
  msecHeading.innerHTML = milliseconds;
  if(milliseconds >= 100){
    seconds++;
    secHeading.innerHTML = seconds;
    milliseconds = 0;
  } else if(seconds >= 60){
    minutes++;
    minHeading.innerHTML = minutes;
    seconds = 0;
  }
}

function start(){
    interval = setInterval(timer,10);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}
function stop(){
  clearInterval(interval);
  stopBtn.disabled = true;
  startBtn.disabled = false;
}
function reset(){
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  minHeading.innerHTML = minutes;
  secHeading.innerHTML = seconds;
  msecHeading.innerHTML = milliseconds;
  stop();
}

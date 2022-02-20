let x = document.getElementById("mouse");
function mOver() {
  x.innerHTML = "Travel company";
}
function mOut() {
  x.innerHTML = "Discover yourself with Kazakhstan";
}
document.getElementById("demo").addEventListener("keypress", keypress);
function keypress() {
  document.getElementById("demo").style.backgroundColor = "#CDDAB6";
}
var a = document.getElementById("btn");
function changeText() {
  a.innerHTML = "Thank you!";
}
a.addEventListener("click", eventlistener);

function eventlistener() {
  alert ("We have sent you a ticket!");
}
function play() {
  var audio = new Audio("mixkit-arcade-game-jump-coin-216.wav");
  audio.play();
}

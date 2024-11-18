//btn
const btnRed = document.getElementById("red-Color");
const btnBlue = document.getElementById("blue-Color");
const btnYellow = document.getElementById("yellow-Color");
const btnPurple = document.getElementById("purple-Color");
const btncancel = document.getElementById("cancel");
//voice
const redAudio = document.getElementById("red-Voice");
const blueAudio = document.getElementById("blue-Voice");
const yellowAudio = document.getElementById("yellow-Voice");
const purpleAudio = document.getElementById("purple-Voice");
const cancelAudio = document.getElementById("cancel-Voice");
//Reactor color
const reactor = document.querySelector(".circle");
const power = document.getElementById("powerStone");
//function
function eventButton(mainaudio, audio2, audio3, audio4) {
  mainaudio.play();
  if (mainaudio.play()) {
    //setCurrentTime
    audio2.currentTime = 0;
    audio3.currentTime = 0;
    audio4.currentTime = 0;
    audio2.pause();
    audio3.pause();
    audio4.pause();
  }
}
btnRed.addEventListener("click", () => {
  console.log("Pressed button red");
  eventButton(redAudio, blueAudio, yellowAudio, purpleAudio);
  reactor.classList.add("redColor-Animetion");
  power.style.backgroundColor = "red";
});
btnBlue.addEventListener("click", () => {
  console.log("Pressed button blue");
  eventButton(blueAudio, redAudio, yellowAudio, purpleAudio);
  reactor.classList.add("blueColor-Animetion");
  power.style.backgroundColor = "blue";
});
btnYellow.addEventListener("click", () => {
  console.log("Pressed button yellow");
  eventButton(yellowAudio, redAudio, blueAudio, purpleAudio);
  reactor.classList.add("yellowColor-Animetion");
  power.style.backgroundColor = "yellow";
});
btnPurple.addEventListener("click", () => {
  console.log("Pressed button purple");
  eventButton(purpleAudio, redAudio, blueAudio, yellowAudio);
  reactor.classList.add("purpleColor-Animetion");
  power.style.backgroundColor = "purple";
});
//btn cancel
btncancel.addEventListener("click", () => {
  console.log("Canceled");
  redAudio.currentTime = 0;
  blueAudio.currentTime = 0;
  yellowAudio.currentTime = 0;
  purpleAudio.currentTime = 0;
  redAudio.pause();
  blueAudio.pause();
  yellowAudio.pause();
  purpleAudio.pause();
  cancelAudio.play();
  reactor.classList.add("cancel-Animetion");
  power.style.backgroundColor = "#dddfdf";
});

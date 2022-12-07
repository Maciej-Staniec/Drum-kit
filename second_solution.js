const drums = document.querySelectorAll(".drum");

function buttonAnimation(key) {
  let btn = document.querySelector("." + key);
  btn.classList.add("pressed");
  setTimeout(function () {
    btn.classList.remove("pressed");
  }, 200);
}

function playSound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("sounds/snare.mp3").play();
      break;
    case "k":
      new Audio("sounds/crash.mp3").play();
      break;
    case "l":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    default:
      console.log(key);
      break;
  }
}

for (drum of drums) {
  drum.addEventListener("click", function () {
    playSound(this.textContent);
    buttonAnimation(this.textContent);
  });
}

document.body.addEventListener("keydown", function (event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

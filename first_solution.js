instrumentKeys = [
  ["w", "sounds/tom-1.mp3"],
  ["a", "sounds/tom-2.mp3"],
  ["s", "sounds/tom-3.mp3"],
  ["d", "sounds/tom-4.mp3"],
  ["j", "sounds/snare.mp3"],
  ["k", "sounds/crash.mp3"],
  ["l", "sounds/kick-bass.mp3"],
];

const instrumentList = document.querySelectorAll(".drum");

function animateAndMakeSound(event) {
  for (instrumentKey of instrumentKeys) {
    if (instrumentKey.includes(event)) {
      new Audio(instrumentKey[1]).play();
      let btn = document.querySelector("." + event);
      btn.classList.add("pressed");
      setTimeout(function () {
        btn.classList.remove("pressed");
      }, 200);
    }
  }
}

for (instrument of instrumentList) {
  instrument.addEventListener("click", function () {
    animateAndMakeSound(this.textContent);
  });
}

document.body.addEventListener("keydown", function (event) {
  animateAndMakeSound(event.key);
});

// expose.js

window.addEventListener("DOMContentLoaded", init);

const hornEl = document.getElementById("horn-select");

const volEl = document.getElementById("volume-controls");

const volInput = document.getElementById("volume");

const hornImg = document.querySelector("img");

const volImg = document.querySelector("#volume-controls > img");

const aud = document.querySelector("audio");

const btn = document.querySelector("button");

const jsConfetti = new JSConfetti();

function init() {
  hornEl.addEventListener("change", function () {
    // The correct image should display
    hornImg.src = `assets/images/${hornEl.value}.svg`;

    //The correct audio sound file should be set
    aud.src = `assets/audio/${hornEl.value}.mp3`;

    aud.volume = 0.5;
    console.log(aud.volume);

    btn.addEventListener("click", function () {
      if ("party-horn" == hornEl.value) {
        jsConfetti.addConfetti();
      }
      console.log(aud.volume);
      aud.play();
    });
  });

  volInput.addEventListener("change", function () {
    console.log(volInput.value);
    if (volInput.value == 0) {
      //At zero volume, the mute icon (level 0) should be displayed
      volImg.src = `assets/icons/volume-level-0.svg`;
      //The corresponding volume should be set for the audio element
      aud.volume = 0;
    } else if (1 <= volInput.value && volInput.value < 33) {
      //From 1 to < 33 volume the first volume level should be displayed
      volImg.src = `assets/icons/volume-level-1.svg`;
      aud.volume = volInput.value / 100;
    } else if (33 <= volInput.value && volInput.value < 67) {
      //From 33 to < 67 volume the second volume level should be displayed
      volImg.src = `assets/icons/volume-level-2.svg`;
      aud.volume = volInput.value / 100;
    } else {
      //From 67 and up the third volume level should be displayed
      volImg.src = `assets/icons/volume-level-3.svg`;
      aud.volume = volInput.value / 100;
    }
  });

  // // console.log(aud.volume);
}

// explore.js

window.addEventListener("DOMContentLoaded", init);

const synth = window.speechSynthesis;

let voices = [];

const voiceSelect = document.getElementById("voice-select");

const talkBtn = document.querySelector("button");

const smilingImg = document.querySelector("img");

const txt = document.querySelector("textarea");

function populateVoiceList() {
  setTimeout(() => {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      // console.log(option);
      voiceSelect.appendChild(option);
    }
  }, 1000);
}

function init() {
  populateVoiceList();

  // voiceSelect.addEventListener("chan");

  // if (speechSynthesis.onvoiceschanged !== undefined) {
  //   speechSynthesis.onvoiceschanged = populateVoiceList;
  // }

  talkBtn.addEventListener("click", function () {
    smilingImg.src = "assets/images/smiling-open.png";
    console.log(txt.value);
    const utterThis = new SpeechSynthesisUtterance(txt.value);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    console.log(utterThis);
    synth.speak(utterThis);

    utterThis.onend = function () {
      smilingImg.src = "assets/images/smiling.png";
    };
  });
}

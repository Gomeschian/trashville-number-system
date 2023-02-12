const num_of_keys = 12;
const max_chord_progression_length = 8;
const musical_key_list = [
  "A",
  "Bb",
  "B",
  "C",
  "C#",
  "D",
  "Eb",
  "E",
  "F",
  "F#",
  "G",
  "Ab",
  "Am",
  "Bbm",
  "Bm",
  "Cm",
  "C#m",
  "Dm",
  "Ebm",
  "Em",
  "Fm",
  "F#m",
  "Gm",
  "Abm",
];
let key = "";
let chord_progression_length = 0;

function getRandomIntInclusive(min, max) {
  //Function credit to MDN Web Docs
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function choose_key() {
  let key_number = getRandomIntInclusive(1, num_of_keys);
  key = musical_key_list[key_number - 1];
}
function choose_chord_progression_length() {
  chord_progression_length = getRandomIntInclusive(
    1,
    max_chord_progression_length
  );
}

let app = document.querySelector(".app-container");

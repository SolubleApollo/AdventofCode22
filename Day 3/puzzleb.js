const fs = require("fs");
let puzzle = fs.readFileSync("./Day 3/puzzle.txt", "utf8");

// turn puzzle 1 into an array of strings spliting on new line
const puzzleArray = puzzle.split("\n");
let library = [
  "",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let result = 0;
for (let i = 0; i < puzzleArray.length; i = i + 3) {
  //split each line by half its length
  let line = puzzleArray[i];
  let lineb = puzzleArray[i + 1];
  let linec = puzzleArray[i + 2];

  //find which is the common character in line, lineb, and linec
  let commonChar = "";
  for (let j = 0; j < line.length; j++) {
    commonChar = "";
    let char = line[j];
    if (lineb.includes(char) && linec.includes(char)) {
      commonChar = char;
      answer = answer + library.indexOf(commonChar);
      break;
    }
  }
}
console.log(result);

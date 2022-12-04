const fs = require("fs");
let puzzle = fs.readFileSync("./Day 4/puzzle.txt", "utf8");

// turn puzzle 1 into an array of strings spliting on new line
const puzzleArray = puzzle.split("\n");
let result = 0;
//loop through the array of strings
for (let i = 0; i < puzzleArray.length; i++) {
    //split each string by comma
    let splitString = puzzleArray[i].split(",");
    let x = splitString[0].split("-");
    let y = splitString[1].split("-");
    if (x[0] <= y[1] && x[1] >= y[0]) {
        result++;
    } else if (x[0] >= y[1] && x[1] <= y[0]) {
        result++;
    }
}

console.log(result);

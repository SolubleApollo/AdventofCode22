const fs = require("fs");
let puzzleArray = Array.from(fs.readFileSync("./Day 6/puzzle.txt", "utf8"));
let consecutive = 14;
let result = 0;
for (let i = 0; i < puzzleArray.length; i++) {
    let str = puzzleArray.slice(i, i + consecutive);
    if (isUnique(str, consecutive - 1)) {
        result = i + consecutive;
        break;
    }
}
console.log(result);
function isUnique(str, i) {
    for (let j = 0; j < i; j++) if (str[i] === str[j]) return false;
    if (i === 0) return true;
    str.pop();
    return isUnique(str, i - 1);
}

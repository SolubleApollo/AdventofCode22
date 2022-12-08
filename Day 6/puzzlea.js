const fs = require("fs");
let pa = Array.from(fs.readFileSync("./Day 6/puzzle.txt", "utf8"));
let con = 4;
let res = 0;
for (let i = 0; i < pa.length; i++) {
    let str = pa.slice(i, i + con);
    if (isUnique(str, con - 1)) {
        res = i + con;
        break;
    }
}
console.log(res);
function isUnique(str, i) {
    for (let j = 0; j < i; j++) if (str[i] === str[j]) return false;
    if (i === 0) return true;
    str.pop();
    return isUnique(str, i - 1);
}

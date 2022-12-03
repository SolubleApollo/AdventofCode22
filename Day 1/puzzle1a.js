//impost fs
const fs = require('fs');
const puzzle1 = fs.readFileSync('puzzle.txt', 'utf8');
const puzzle1Array = puzzle1.split('\n').map(Number);

let total, runningTotal = 0;
puzzle1Array.forEach((value) => {
    if (value === 0) {
        if (runningTotal > total) {
            total = runningTotal;
        }
        runningTotal = 0;
    }
    else if (value !== '') {
        runningTotal = parseInt(value, 10) + runningTotal;
    }
});
console.log(total);
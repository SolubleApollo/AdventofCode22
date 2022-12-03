//impost fs
const fs = require("fs");
const puzzle1 = fs.readFileSync("puzzle1.txt", "utf8");

// turn puzzle1 into an array of numbers (integers) spliting on new line
const puzzle1Array = puzzle1.split("\n").map(Number);

//for each value in puzzle1Array add it to a total sum unless there is an empty value
let total = [];
let runningTotal = 0;
puzzle1Array.forEach((value) => {
  if (value === 0) {
    total.push(runningTotal);
    runningTotal = 0;
  } else if (value !== "") {
    runningTotal = parseInt(value, 10) + runningTotal;
  }
});
// sort the total array in descending order
total.sort((a, b) => b - a);

//add the first 3 values in the total array together
let sum = total[0] + total[1] + total[2];
console.log(sum);

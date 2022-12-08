const fs = require("fs");

let input = fs.readFileSync("./Day 8/puzzle.txt", "utf8");
let result = 0;

// turn input into a 2d array of numbers
input = input.split("\n");
input = input.map((line) => line.split("").map((num) => parseInt(num)));
input.pop();

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
        let upOk = 0;
        let downOk = 0;
        let leftOk = 0;
        let rightOk = 0;
        let visible = [true, true, true, true];

        for (let k = i - 1; k >= 0; k--) {
            upOk++;
            if (input[k][j] >= input[i][j]) {
                visible[0] = false;
                break;
            }
        }

        for (let k = i + 1; k < input.length; k++) {
            downOk++;
            if (input[k][j] >= input[i][j]) {
                visible[1] = false;
                break;
            }
        }

        for (let k = j - 1; k >= 0; k--) {
            leftOk++;
            if (input[i][k] >= input[i][j]) {
                visible[2] = false;
                break;
            }
        }

        for (let k = j + 1; k < input[i].length; k++) {
            rightOk++;
            if (input[i][k] >= input[i][j]) {
                visible[3] = false;
                break;
            }
        }

        if (visible[0] || visible[1] || visible[2] || visible[3]) {
            result++;
        }
        /*if (upOk || downOk || leftOk || rightOk) {
            //console.log(i, j, upOk, downOk, leftOk, rightOk);
            result++;
        }*/
        //console.log(i, j, upOk, downOk, leftOk, rightOk);
        //result = Math.max(result, upOk * downOk * leftOk * rightOk);
    }
}

console.log(result - input.length);

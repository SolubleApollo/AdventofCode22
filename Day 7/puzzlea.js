const fs = require("fs");
let files = {};
let input = fs.readFileSync("./Day 7/puzzle.txt", "utf8").split("\n ");
let dirs = [];
let dir_queue = [];
input.forEach((line) => {
    if (line.includes("$ cd") && !line.includes("cd ..")) {
        let dir = line.split(" ")[3];
        dir_queue.push("".join(dir_queue) + dir);
    } else if (line.includes("$ cd ..")) {
        dir_queue.pop();
    } else if (isDigit(line.split[0])) {
        dir_queue.forEach((dir) => {
            dirs[dir] += parseInt(line[line.firstIndexof(" ") + 1]);
        });
    }
});

unused_space = 30000000 - (70000000 - dirs["/"]);

let answer1 = 0;
dirs.forEach((dir) => {
    if (dirs[dir] > 1000000) {
        answer1 += dirs[dir];
    } else return 0;
});

console.log(answer1);

function isDigit(c) {
    try {
        parseInt(c);
        return true;
    } catch (e) {
        return false;
    }
}

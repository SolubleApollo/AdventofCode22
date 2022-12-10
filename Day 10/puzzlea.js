const input = require("fs")
    .readFileSync("./Day 10/puzzle.txt", "utf8")
    .split("\n");
let cycle = 0;
let x = 1;
let result = 0;
let signalStrengths = [];
let recordAt = 20;
let CRT = [
    "........................................",
    "........................................",
    "........................................",
    "........................................",
    "........................................",
    "........................................",
];

for (var i = 0; i < input.length; i++) {
    let instructions = input[i].split(" ");
    if (instructions[0].startsWith("noop")) {
        checkCycle();
    }
    if (instructions[0].startsWith("addx")) {
        checkCycle();
        checkCycle();
        x += Number(instructions[1]);
    }
}
console.log(result);
function checkCycle() {
    if (!(cycle == recordAt)) {
        cycle++;
        return;
    }
    recordAt += 40;
    signalStrengths.push(x * cycle);
    result += x * cycle;
    cycle++;
}
console.log(CRT.join("\n "));

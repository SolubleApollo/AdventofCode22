const input = require("fs")
    .readFileSync("./Day 10/puzzle.txt", "utf8")
    .split("\n");
let cycle = 0;
let x = 1;
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
        draw();
    }
    if (instructions[0].startsWith("addx")) {
        draw();

        draw();

        x += Number(instructions[1]);
    }
}
function draw() {
    let yindex = Math.floor(cycle / 40);
    let xindex = cycle % 40;
    let line = CRT[yindex].split("");
    if (x >= xindex - 1 && x <= xindex + 1) {
        line[xindex] = "X";
    }
    CRT[yindex] = line.join("");
    cycle++;
}
console.log(CRT.join("\n"));

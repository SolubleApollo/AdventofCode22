const fs = require("fs");
let puzzle = fs.readFileSync("./Day 5/puzzle.txt", "utf8");

// turn puzzle 1 into an array of strings spliting on new line
const puzzleArray = puzzle.split("\n");
let boxes = [];
let positions = [];
let tool = [];
let breakpoint = false;
let result = "";
//create 9 arrays of boxes
let box1 = [];
let box2 = [];
let box3 = [];
let box4 = [];
let box5 = [];
let box6 = [];
let box7 = [];
let box8 = [];
let box9 = [];

//loop through the array of strings
for (let i = 0; i < puzzleArray.length; i++) {
    //if the string is empty, skip it

    if (puzzleArray[i].includes("]")) {
        boxes.push(puzzleArray[i]);
        continue;
    }
    if (puzzleArray[i].includes("move")) {
        positions.push(puzzleArray[i].split(" "));
    } else if (!breakpoint) {
        splitboxes(boxes);
    }
    if (i == puzzleArray.length - 1) {
        for (let i = 0; i < positions.length; i++) {
            let from,
                to = [];
            let value = [];
            let count = parseInt(positions[i][1]);

            from = tool[parseInt(positions[i][3]) - 1];
            to = tool[parseInt(positions[i][5]) - 1];
            for (let j = 0; j < count; j++) {
                value.push(from.shift());
            }
            to = value.concat(to);
            tool[parseInt(positions[i][3]) - 1] = from;
            tool[parseInt(positions[i][5]) - 1] = to;
        }
        for (let i = 0; i < tool.length; i++) {
            result = result + tool[i][0];
        }
    }
}

function splitboxes(boxes) {
    breakpoint = true;
    for (let i = 0; i < boxes.length; i++) {
        box1.push(boxes[i].substring(1, 2));
        box2.push(boxes[i].substring(5, 6));
        box3.push(boxes[i].substring(9, 10));
        box4.push(boxes[i].substring(13, 14));
        box5.push(boxes[i].substring(17, 18));
        box6.push(boxes[i].substring(21, 22));
        box7.push(boxes[i].substring(25, 26));
        box8.push(boxes[i].substring(29, 30));
        box9.push(boxes[i].substring(33, 34));
    }
    //remove all inputs from boxes that have spaces
    for (let j = 0; j < 1; j++) {
        if (box1[j].includes(" ")) {
            box1.shift();
            j--;
        }
    }
    for (let j = 0; j < 1; j++) {
        if (box2[j].includes(" ")) {
            box2.shift();
            j--;
        }
    }
    for (let j = 0; j < 1; j++) {
        if (box3[j].includes(" ")) {
            box3.shift();
            j--;
        }
    }
    for (let j = 0; j < 1; j++) {
        if (box4[j].includes(" ")) {
            box4.shift();
            j--;
        }
    }
    for (let j = 0; j < 1; j++) {
        if (box5[j].includes(" ")) {
            box5.shift();
            j--;
        }
    }
    for (let j = 0; j < 1; j++) {
        if (box6[j].includes(" ")) {
            box6.shift();
            j--;
        }
    }
    for (let j = 0; j < 1; j++) {
        if (box7[j].includes(" ")) {
            box7.shift();
            j--;
        }
    }
    for (let j = 0; j < 1; j++) {
        if (box8[j].includes(" ")) {
            box8.shift();
            j--;
        }
    }
    for (let j = 0; j < 1; j++) {
        if (box9[j].includes(" ")) {
            box9.shift();
            j--;
        }
    }

    console.log(box1, box2, box3, box4, box5, box6, box7, box8, box9);

    tool = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
}
console.log(result);

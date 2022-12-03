const fs = require('fs');
let puzzle1 = fs.readFileSync('./Day\ 2/puzzle.txt', 'utf8');

// turn puzzle 1 into an array of strings spliting on new line
const puzzle1Array = puzzle1.split('\n');
let score =0;
puzzle1Array.forEach((value) => {
    //split each string into an array of chars
    const valueArray = value.split('');
    if(valueArray[0] === 'A' && valueArray[2] === 'X'){
        score = score + 4;
    }
    else if(valueArray[0] === 'A' && valueArray[2] === 'Y'){
        score = score + 8;
    }
    else if(valueArray[0] === 'B' && valueArray[2] === 'Y'){
        score = score + 5;
    }
    else if(valueArray[0] === 'B' && valueArray[2] === 'Z'){
        score = score + 9;
    }
    else if(valueArray[0] === 'C' && valueArray[2] === 'Z'){
        score = score + 6;
    }
    else if(valueArray[0] === 'C' && valueArray[2] === 'X'){
        score = score + 7;
    }
    else if(valueArray[2] === 'X'){
        score = score + 1;
    }
    else if(valueArray[2] === 'Y'){
        score = score + 2;
    }
    else if(valueArray[2] === 'Z'){
        score = score + 3;
    }

});
console.log(score);


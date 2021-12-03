var fs = require('fs');
var instructions = fs.readFileSync('input.txt').toString().split("\n");

const position = {
    horizontal: 0,
    depth: 0,
    aim: 0
};

instructions.forEach(command => {
    let orderValue = command.split(" ");
    console.log(orderValue);
    switch (orderValue[0]) {
        case "forward":
            position.horizontal += Number(orderValue[1]);
            position.depth += position.aim * Number(orderValue[1]);
            break;
        case "up":
            position.aim -= Number(orderValue[1]);
            break;
        case "down":
            position.aim += Number(orderValue[1]);
            break;
    }
})

console.log(position);

console.log(position.horizontal * position.depth);

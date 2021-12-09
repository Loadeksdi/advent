const fs = require('fs');
const crabs = fs.readFileSync('day7/input.txt').toString().split(",");

const fuelCosts = [];

for (let i = 0; i < Math.max(...crabs); i++) {
    const difference = [];
    for (let j = 0; j < crabs.length; j++){
        let diff = Math.abs(crabs[j] - i);
        let res = (diff * (diff + 1)) / 2;
        difference.push(res);
    }
    let sum = 0;
    difference.forEach(val => sum += val);
    fuelCosts.push(sum);
}

console.log(Math.min(...fuelCosts));
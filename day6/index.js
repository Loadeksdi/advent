const fs = require('fs');

const lanternfishs = fs.readFileSync('day6/input.txt').toString().split(",");

let numbersLanternfishs = lanternfishs.map(fish => Number(fish));

const simulateLanternfishsEvolution = (days) => {
    let newFishes = 0;
    for (let i = 0; i < days; i++) {
        newFishes = numbersLanternfishs.filter(fish => fish === 0).length;
        numbersLanternfishs = numbersLanternfishs.map(fish => {
            if (fish > 0) {
                fish--;
            }
            else {
                fish = 6;
            }
            return fish;
        });
        if (newFishes > 0) {
            numbersLanternfishs.push(...new Array(newFishes).fill(8));
        }
    }
    return numbersLanternfishs;
};

console.log(simulateLanternfishsEvolution(9));


const fs = require('fs');
const lanternfish = fs.readFileSync('day6/input.txt').toString().split(",");

const fishesPerState = new Map();
for (let state = 0; state <= 8; state++) {
    fishesPerState.set(state, lanternfish.filter(fish => fish === state.toString()).length);
}

const simulateLanternfishsEvolution = (days) => {
    for (let i = 0; i < days; i++) {
        let val = fishesPerState.get(8);
        let val2 = fishesPerState.get(6);
        fishesPerState.set(6, fishesPerState.get(7) + fishesPerState.get(0));
        fishesPerState.set(8, fishesPerState.get(0));
        fishesPerState.set(0, fishesPerState.get(1));
        fishesPerState.set(1, fishesPerState.get(2));
        fishesPerState.set(2, fishesPerState.get(3));
        fishesPerState.set(3, fishesPerState.get(4));
        fishesPerState.set(4, fishesPerState.get(5));
        fishesPerState.set(5, val2);
        fishesPerState.set(7, val);
    }
    let result = 0;
    fishesPerState.forEach(fish => {
        result += fish
    });
    return result;
};

console.log(simulateLanternfishsEvolution(256));

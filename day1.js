var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");

function countIncreases(arr) {
    let nb = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            nb++;
        }
    }
    return nb;
}

console.log(countIncreases(array));

function countIncreasesPerWindow(arr) {
    let nb = 0;
    for (let i = 0; i < arr.length - 2; i++) {
        const firstWindow = parseInt(arr[i]) + parseInt(arr[i + 1]) + parseInt(arr[i + 2]);
        const secondWindow = parseInt(arr[i + 1]) + parseInt(arr[i + 2]) + parseInt(arr[i + 3]);
        if (firstWindow < secondWindow) {
            nb++;
        }
    }
    return nb;
}

console.log(countIncreasesPerWindow(array));



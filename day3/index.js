var fs = require('fs');
var binaryValues = fs.readFileSync('input.txt').toString().split("\n");

let gamma = "";
const globalArray = [];
for (let i = 0; i < binaryValues[0].length; i++) {
    globalArray.push([]);
}

binaryValues.forEach(bv => {
    for (let i = 0; i < bv.length; i++) {
        globalArray[i].push(bv.charAt(i))
    }
});

//Copied from StackOverflow
function mode(array) {
    if (array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for (var i = 0; i < array.length; i++) {
        var el = array[i];
        if (modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;
        if (modeMap[el] > maxCount) {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}

for (let i = 0; i < globalArray.length; i++) {
    gamma = gamma.concat(mode(globalArray[i]));
}

let epsilonArray = [];
gamma.split("").forEach(char => {
    if (char == "0") {
        epsilonArray.push("1");
    }
    else {
        epsilonArray.push("0");
    }
});

epsilon = epsilonArray.join("");
console.log(gamma, epsilon);
let gammaValue = parseInt(gamma, 2);
let epsilonValue = parseInt(epsilon, 2);

console.log(gammaValue * epsilonValue);



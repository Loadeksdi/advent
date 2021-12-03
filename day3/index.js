var fs = require('fs');
var binaryValues = fs.readFileSync('testinput.txt').toString().split("\n");

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
let gammaValue = parseInt(gamma, 2);
let epsilonValue = parseInt(epsilon, 2);
console.log(gammaValue * epsilonValue);

function findO2() {
    for (let i = 0; i < globalArray.length; i++) {
        const indexes = [];
        let mostCommon = mode(globalArray[i]);
        globalArray[i].forEach((element, index) => {
            if (element === mostCommon) {
                indexes.push(index);
            }
        });
        for (let j = indexes.length - 1; j >= 0; j--) {
            globalArray[i].splice(indexes[j], 1);
        }
    }
    let k = 0;
    let O2 = "";
    while (globalArray[k].length > 1){
        O2 = O2.concat(globalArray[k][0]);
        k++;
    }
    return O2;
}

console.log(findO2());





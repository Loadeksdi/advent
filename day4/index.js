let firstLine = true;
let bingoValues = [];
const bingoInput = [];
const bingoTables = [];

const lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('day4/input.txt')
});

const checkRowsOfBingo = (bingo) => {
    for (let i = 0; i < bingo.length; i++) {
        for (let j = 0; j < bingo[i].length; j++) {
            if (!bingo[i][j].marked) break

            if (j === bingo[i].length - 1 && bingo[i][j].marked) return true
        }
    }
    return false;
}

const checkColsOfBingo = (bingo) => {
    for (let i = 0; i < bingo[i].length - 1; i++) {
        for (let j = 0; j < bingo.length; j++) {
            if (!bingo[j][i].marked) break

            if (j === bingo.length - 1 && bingo[j][i].marked) return true
        }
    }
    return false;
}

const calculateScore = (bingo, value) => {
    let sum = 0;
    bingo.forEach(line => {
        line.forEach(val => {
            if (!val.marked) {
                sum += Number(val.value);
            }
        })
    })
    return sum * value;
};

lineReader.on('line', function (line) {
    if (firstLine) {
        bingoValues = line.split(',');
        firstLine = false;
        return;
    }
    if (line.length !== 0) {
        bingoInput.push(line.split(" ").filter(str => str !== "").map(val => ({ value: val, marked: false })));
        return;
    }
}).on("close", () => {
    let bingoLines = [];
    bingoInput.forEach(input => {
        bingoLines.push(input);
        if (bingoLines.length === 5) {
            bingoTables.push(bingoLines);
            bingoLines = [];
        }
    });
    /**
     * bingoValues.forEach(value => {
        bingoTables.forEach((bingo, bingoIndex) => {
            bingo.forEach(line => {
                line.forEach(valueObject => {
                    if (bingoTables.length === 1) {
                        console.log(calculateScore(bingoTables[0],valueObject.value));
                        process.exit(-1);
                    }
                    if (valueObject.value === value) {
                        valueObject.marked = true;
                        if (checkRowsOfBingo(bingo) || checkColsOfBingo(bingo)) {
                            bingoTables.splice(bingoIndex, 1);
                        };
                    }
                })
            });
        });
    });
     */
    
    for (let a = 0; a < bingoValues.length; a++){
        for (let b = bingoValues[a].length - 1; b >= 0; b--){
            for (let c = bingoTables[b].length - 1; c >= 0; c--){
                if (bingoTables.length === 1) {
                    console.log(calculateScore(bingoTables[0],valueObject.value));
                    process.exit(-1);
                }
                if (bingoTables[b][c].value === bingoValues[a]) {
                    bingoTables[b][c].marked = true;
                    if (checkRowsOfBingo(bingoTables[b]) || checkColsOfBingo(bingoTables[b])) {
                        bingoTables.splice(b, 1);
                    };
                }
            }
        }
    }
});
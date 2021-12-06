let firstLine = true;
let bingoValues = [];
const bingoInput = [];
const bingoTables = [];

const lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('day4/input.txt')
});

const checkRowsOfBingo = (bingo) => {
    return bingo.some(line => line.every(valueObject => valueObject.marked));
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
    return sum * Number(value);
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
    const scores = [];
    bingoInput.forEach(input => {
        bingoLines.push(input);
        if (bingoLines.length === 5) {
            bingoTables.push({ bingoLines, won: false });
            bingoLines = [];
        }
    });
    bingoValues.forEach(value => {
        bingoTables.forEach((bingo, bingoIndex) => {
            if (value === "12") {
                console.log("heho");
            }
            bingo.bingoLines.forEach(line => {
                line.forEach(valueObject => {
                    if (valueObject.value === value) {
                        valueObject.marked = true;
                    };
                });
            });
            if (!bingo.won && (checkRowsOfBingo(bingo.bingoLines) || checkColsOfBingo(bingo.bingoLines))) {
                bingo.won = true;
                scores.push(calculateScore(bingo.bingoLines, value));
            }
        });
    });
    console.log(scores[0], scores.at(-1));
});
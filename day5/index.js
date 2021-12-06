const lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('day5/input.txt')
});

const entries = [];

lineReader.on('line', function (line) {
    const coordinates = line.split(' -> ');
    coordinates.forEach(coordinate => {
        const aCoord = coordinate.split(',')
        entries.push({x: aCoord[0], y: aCoord[1]});
    });
}).on("close", () => {
    console.log(entries);

    // Sweep lines
});
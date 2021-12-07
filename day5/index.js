const lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('day5/input.txt')
});

const entries = [];
const range = (a, b) => {
    const res = [];
    if (a < b) {
        for (let i = a; i <= b; i++) {
            res.push(i);
        }
    }
    else {
        for (let i = a; i >= b; i--) {
            res.push(i);
        }
    }
    return res;
};

lineReader.on('line', function (line) {
    const coordinates = line.split(' -> ');
    coordinates.forEach(coordinate => {
        const aCoord = coordinate.split(',')
        entries.push({ x: Number(aCoord[0]), y: Number(aCoord[1]) });
    });
}).on("close", () => {
    let maxLength = 0;
    let maxHeight = 0;
    entries.forEach(entry => {
        if (entry.x > maxLength) {
            maxLength = entry.x;
        }
        if (entry.y > maxHeight) {
            maxHeight = entry.y;
        }
    });
    console.log(entries);
    var vents = [];
    for (let i = 0; i < entries.length; i += 2) {
        if (entries[i].x === entries[i + 1].x) {
            let max = (entries[i].y - entries[i + 1].y > 0) ? entries[i].y : entries[i + 1].y;
            for (max; max >= Math.min(entries[i].y, entries[i + 1].y); max--) {
                let vent = vents.find(vent => vent.x === entries[i].x && vent.y === max);
                if (vent) {
                    vent.value++
                }
                else {
                    vents.push({ x: entries[i].x, y: max, value: 1 });
                }
            }
        }
        else if (entries[i].y === entries[i + 1].y) {
            let max = (entries[i].x - entries[i + 1].x > 0) ? entries[i].x : entries[i + 1].x;
            for (max; max >= Math.min(entries[i].x, entries[i + 1].x); max--) {
                let vent = vents.find(vent => vent.x === max && vent.y === entries[i].y);
                if (vent) {
                    vent.value++
                }
                else {
                    vents.push({ x: max, y: entries[i].y, value: 1 });
                }
            }
        }
        else {
            let rangeX = range(entries[i].x, entries[i + 1].x)
            let rangeY = range(entries[i].y, entries[i + 1].y)
            rangeX.forEach((val, index) => {
                let vent = vents.find(vent => vent.x === val && vent.y === rangeY[index]);
                if (vent) {
                    vent.value++
                } 
                else {
                    vents.push({ x: val, y: rangeY[index], value: 1 })
                }
            });
        }
    }
    const dangerousVents = vents.filter(vent => vent.value >= 2);
    console.log(dangerousVents.length);

    // Sweep lines
});
const fs = require('fs')
const binaryValues = fs
    .readFileSync('input.txt')
    .toString()
    .split('\n')

const mostValuesInArray = (array, priority) => {
    let zeroCount = 0
    let oneCount = 0

    array.forEach((value) => (value === '0' ? zeroCount++ : oneCount++))

    if (zeroCount === oneCount) {
        const ret = priority === '0' ? '0' : '1'
        return ret
    } else {
        if (priority === '0') {
            const ret = zeroCount < oneCount ? '0' : '1'
            return ret
        }
        const ret = zeroCount > oneCount ? '0' : '1'
        return ret
    }
}

const findRating = (diagReport, bitCriteria) => {
    let i = 0
    let stop = false

    while (!stop) {
        const indexes = []
        const commonness = mostValuesInArray(diagReport[i], bitCriteria)

        diagReport[i].forEach((element, index) => {
            if (element !== commonness) {
                indexes.push(index)
            }
        })

        for (let j = indexes.length - 1; j >= 0; j--) {
            diagReport.forEach((arr) => {
                arr.splice(indexes[j], 1)
            })
        }

        if (!diagReport[i + 1] || diagReport[i + 1].length === 1) stop = true

        i++
    }

    const result = diagReport.map((elem) => elem[0]).join('')

    return parseInt(result, 2)
}

const app = () => {
    const values = Array.from(
        { length: binaryValues[0].length },
        () => new Array()
    )

    values.forEach((elem, i) => {
        binaryValues.forEach((binaryValue) => {
            elem.push(binaryValue[i])
        })
    })

    const O2Values = JSON.parse(JSON.stringify(values))
    const CO2Values = JSON.parse(JSON.stringify(values))

    const O2 = findRating(O2Values, '1')
    const CO2 = findRating(CO2Values, '0')

    return O2 * CO2
}

console.log(app())
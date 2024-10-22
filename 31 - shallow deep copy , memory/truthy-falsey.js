const falseyValues = [false, 0, -0, '', null, undefined, NaN];

falseyValues.forEach((value) => {
    if (value) {
        console.log(value, ' is truthy.')
    } else {
        console.log(value, ' is falsey.')
    }
})
// output
/**
     * false  is falsey.
    0  is falsey.
    -0  is falsey.
    is falsey.
    null  is falsey.
    undefined  is falsey.
    NaN  is falsey.
 */

let truthyValues = ['0', 'false', ' ', [], {}, () => { }, -1, true, new Date()]

truthyValues.forEach((value) => {
    if (value) {
        console.log(value, ' is truthy.')
    } else {
        console.log(value, ' is falsey.')
    }
})

const mixed = [...falseyValues, ...truthyValues];

// const getTruthyValues = mixed.filter(val => Boolean(val))
const getTruthyValues = mixed.filter(Boolean)
console.log(getTruthyValues)
const nestedArr = [1, [2, 3], [4, [5, [6]]], {}, '', null, undefined, true, { a: 1 }]
const nestedArr1 = [1, [2, 3], [4, [5, [6, [7]]]]]
// expected output = [1,2,3,4,5,6]
// return arr.flat(Infinity)

function flattenFunc(arr) {
    return arr.reduce((flatArray, currValue) => {
        if (Array.isArray(currValue)) {
            // faltten it..
            const val = flattenFunc(currValue);
            console.log('val', val)
            flatArray.push(...val)
            // SAME AS ABOVE
            // flatArray.push(...flattenFunc(currValue))
        } else {
            // simply push to my result. (flatArray)
            flatArray.push(currValue)
        }
        return flatArray;
    }, [])
}

console.log(flattenFunc(nestedArr1)); // [1,2,3,4,5,6]
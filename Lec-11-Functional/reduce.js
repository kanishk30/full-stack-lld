// Calculate the sum of a given array

const array = [1, 2, 3, 4, 5, 6, 7]

// let sum = 0

// for(let i = 0; i < array.length; i++) {
//     sum = [sum + array[i]]
// }



// function processingFunction(value, item) {
//     return [1, 2, 3, 5]
// }

const result = array.reduce((acc, item) => acc + item, 0)

const result2 = array.reduce((acc, item) => acc + item)


console.log(result2)
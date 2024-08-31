// Given an array, square each element and return it


function square(arr) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * arr[i])
    }

    return result
}
const result = square([1, 2, 3, 4])
console.log(result)


// Array map function
const myArray = [1, 2, 3, 4, 5]

function processingFunc(item) {
    return item * item
}

const newValue = myArray.map(processingFunc)
console.log(newValue)
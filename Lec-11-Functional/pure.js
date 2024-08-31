var c = 0

// // This is impure because it causes side effects
// function sum(a, b) {
//     c = a + b
//     console.log(c)
//     return c
// }

// sum(10, 12)

// console.log(c)

// This is pure because it doesn't have any side effects
function sum(a, b) {
    var c1 = a + b
    return c1
}

const result = sum(10, 12)

console.log(result)

console.log(c)
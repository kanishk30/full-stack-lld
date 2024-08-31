// Real world use case of undefined
function sum(a, b) {

    if (a == undefined || b == undefined) {
        console.log("This was an error! Please provide values")
    }
    return a + b
}

const result = sum(10, 20)
console.log(result)


// ANother way of declaring a function
// These type of functions are called anonymous function
const functionVar = function (a, b) {

    if (a == undefined || b == undefined) {
        console.log("This was an error! Please provide values")
    }
    return a + b
}

const resultFunctionVar = functionVar(10, 20)
console.log(resultFunctionVar)

// Another way of declaring a function
// This wasn't possible before ES6 / ES2015 (2015)
// Arrow functions (a, b) => is the same as function sum (a, b)
const functionVarArrow = (a, b) => {

    if (a == undefined || b == undefined) {
        console.log("This was an error! Please provide values")
    }
    return a + b
}

console.log(functionVarArrow(10, 20));


// IIFE -> Immediately Invoke Function Expression
// Define a function and immediately run this
// function log() {
//     console.log("PRint to the console")
// }
// log()

(function () {
    console.log("PRint to the console")
})()
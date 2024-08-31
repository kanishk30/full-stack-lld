// Traditional way
function sum(a, b) {
    console.log(a + b)

    // return undefined
}

sum(10, 20)


// Function Expression 1
const sumExpression = function (a, b) {
    console.log(a + b)
}
sumExpression(10, 20)


// Function Expression 2
const sumExpressionArrow = (a, b) => {
    console.log(a + b)
}
sumExpressionArrow(10, 20)
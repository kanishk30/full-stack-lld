// 1. DRY
// 2. Modular

function calculateArea(radius) {
    return Math.PI * radius * radius
}

function calculateDiameter(radius) {
    return 2 * radius
}

function calculateCircumference(radius) {
    return 2 * Math.PI * radius
}

// This is HOF
function calculate(array, processingFunc) {
    let result = []

    for (let i = 0; i < array.length; i++) {
        result.push(processingFunc(array[i]))
    }

    console.log(result)


    return result
}

const calculatedAreaOfCircle = calculate([1, 2, 3, 4, 5], calculateArea)
console.log("Areas are =>", calculatedAreaOfCircle)

const calculatedDiameterOfCircle = calculate([1, 2, 3, 4, 5], calculateDiameter)
console.log("Diameters are =>", calculatedDiameterOfCircle)
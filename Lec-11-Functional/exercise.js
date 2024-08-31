// We are given an array, which has the radius of different circles, we need to find the area, circumference and diameter for all the radiuses

let myRadiusArray = [2, 3, 4, 5, 8]

function calculateArea(array) {
    let result = []

    for (let i = 0; i < array.length; i++) {
        result.push(Math.PI * array[i] * array[i])
    }

    console.log(result)

    return result
}

const finalAreas = calculateArea(myRadiusArray)
console.log(finalAreas)


function calculateCircumference(radiusArr) {
    let result = []
    for (let i = 0; i < radiusArr.length; i++) {
        result.push(2 * Math.PI * radiusArr[i])
    }

    console.log(result)

    return result
}
let finalCircumferences = calculateCircumference(myRadiusArray)
console.log('This is Circumference array =>', finalCircumferences)



function calculateDiameter(radiusArr) {
    let result = []
    for (let i = 0; i < radiusArr.length; i++) {
        result.push(radiusArr[i] * 2)
    }

    console.log(result)

    return result
}
let finalDiameters = calculateDiameter(myRadiusArray)
console.log('This is Diameter array =>', finalDiameters)


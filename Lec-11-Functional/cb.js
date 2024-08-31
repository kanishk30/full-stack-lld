function printName(cb1, cb2, cb3) {
    console.log("Shikhar")
    cb1()
    cb2()
    cb3()
}

function printLastName() {
    console.log("Dhawan")
}

function printMiddleName() {
    console.log("Kumar")
}

function printAge() {
    console.log(34)
}

printName(printMiddleName, printLastName, printAge)

// printName(printLastName)
// printName(printMiddleName)

// function sum(a, b) {
//     console.log(a + b)
// }
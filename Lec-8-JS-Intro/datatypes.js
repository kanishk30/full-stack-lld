// let a

// console.log(a)


// let b = 100

// if (markValueofBNull == true) {
//     b = null
//     console.log(b)
// }


// if (b == null) {
//     // do something
// } else {

// }




// Real world use case of undefined
function sum(a, b) {

    if (a == undefined || b == undefined) {
        console.log("This was an error! Please provide values")
    }
    return a + b
}

const result = sum(10, 20)
console.log(result)
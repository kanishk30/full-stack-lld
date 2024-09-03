
// Promise using a promise constructor, it takes a function called as executor as its argument
// function(resolve, reject) {} ===>> EXECUTOR

let promise = new Promise(function (resolve, reject) {
    // ... 
    // resolve(value) ==>> When opearion is successful
    // reject(error) ==>> When opearion is failed.
})


// Simulate a COIN TOSS. 
// heads == i win ( success)
// tails == failed. 

// 1. CREATE A PROMISE.

let coinTossPromise = new Promise(function (resolve, reject) {
    // simulating a delay.
    setTimeout(function () {
        // 0-0.5 == tails
        //.5 - 1 == heads
        const randomValueIsHeads = Math.random() > 0.5;

        if (randomValueIsHeads) {
            resolve('Heads win')
        } else {
            reject('Tails win')
        }

    }, 500)
})

// 2. CONSUME A PROMISE

coinTossPromise
    // showloader = true;
    .then(function (result) {
        console.log('Result:', result);

    })
    .catch(function (error) {
        console.log('catch result: ', error)

    })
    .finally(function () {
        console.log('Coin toss completed.');
        // // shwloader = false
        console.log('Finally::')

    })





// coinTossPromise()

let cleanRoom = function () {

    return new Promise(function (res, rej) {
        res('Cleaned the room')
    })
}

// let removeGarbage = function (msg) {
//     // msg = Cleaned the room
//     return new Promise(function (res, rej) {
//         res(msg + ' Removed garbage')
//     })
// }
function removeGarbage(msg) {
    // msg = Cleaned the room
    return new Promise(function (res, rej) {
        res(msg + ' Removed garbage')
    })
}

let winChocolate = function (msg) {
    // only when above two are done.
    // msg =  Cleaned the room  Removed garbage
    return new Promise(function (res, rej) {
        res(msg + ' then won chocolate.')
    })
}

// CHAINING OF Promise.

cleanRoom()
    .then(function (result) {
        // result = Cleaned the room
        return removeGarbage(result)
    })
    .then(function (result2) {
        // result2 =  Cleaned the room  Removed garbage
        return winChocolate(result2)
    })
    .then(function (result) {
        console.log('Finished::  ', result)
    }
    )




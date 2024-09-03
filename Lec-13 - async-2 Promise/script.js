
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



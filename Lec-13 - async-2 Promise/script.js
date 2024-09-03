
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



function logA() { console.log('A') }
function logB() { console.log('B') }
function logC() { console.log('C') }
function logD() { console.log('D') }

logA();

setTimeout(logB, 0);

Promise.resolve().then(logC);

logD();

/*
  sync -- run first.
  async --
    -- microtask
    -- macrotask
*/
// ADCB

// what is the output of the console.log statement? 
new Promise((resolve, reject) => resolve(1))
    .then((result) => result * 2) // 2
    .then((result) => result * 3) // 2*3
    .then((result) => { // 6
        console.log(result); // 6
        return result / 2; // 6/2 = 3
    });
// answer = 6

let promise1 = new Promise(function (resolve, reject) {
    resolve("Success!");
});
promise1.then(function (value) {
    console.log(value);
});
// answer = Success!
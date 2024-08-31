// // QUESTION1 
// function task1() {
//     console.log('task1')
// }

// function heavyTask() {
//     console.log('heavy task...called');

//     const start = Date.now();
//     console.log(start);

//     while (Date.now - start < 4000) {
//         // ... waiting...

//     }

//     console.log('heavy task done');
// }

// function heavyTaskNonBlocking() {
//     console.log('heavy task non blocking starts....');
//     setTimeout(function () {
//         console.log('heavy task non block over')
//     }, 4000)
// }

// function task2() {
//     console.log('task2')
// }
// task1()
// heavyTask()
// heavyTaskNonBlocking()
// task2();


// Question 2:

console.log('strat');
console.log('strat');
console.log('strat');
console.log('strat');
console.log('strat');
console.log('strat');
console.log('strat');
console.log('strat');

setTimeout(function () {
    console.log('Hi')
}, 0)

console.log('ENd')
console.log('ENd')
console.log('ENd')
console.log('ENd')
console.log('ENd')
console.log('ENd')
console.log('ENd')
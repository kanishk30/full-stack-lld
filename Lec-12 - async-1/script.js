// console.log('start');

// function syncFun() {
//     console.log('Hi')
// }

// syncFun();

// console.log('end');
//start
// Hi
// end

// console.log('start');

// function syncFun() {
//     console.log('Hi')
// }

// console.log('end');
// syncFun();
// start
// end
// Hi


// ASYNC JS Code:

console.log('Start:', new Date())

function sayHello() {
    console.log("Timer:", new Date(), '')
    console.log('Hello');
};
function sayHello2() {
    console.log("Timer:", new Date(), '')
    console.log('Hello');
};

setTimeout(sayHello, 2000);
setTimeout(sayHello2, 1999);

console.log('End:', new Date());

/**
 * START , date
 * END: date
 * Timer
 * Hello
 */




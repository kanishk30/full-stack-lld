
async function getData() {
    return 'hello'
};

const data = getData();

// console.log(data) // Promise { 'hello' }
// console.log(typeof data) // object


async function getData2() {
    return 'hello'
};

let data2 = '';

getData2().then(function (res) {
    // console.log(res);
})


// RETURNING A PROMISE FROM ASYNC FUNCTION.

const p = new Promise(function (resolve, reject) {
    resolve('Promise resolved')
});

async function getData3() {
    return p; // promise 
}

const asyncDataPromise = getData3();
// console.log(asyncDataPromise); // Promise { <pending> }

asyncDataPromise.then(function (res) {
    // console.log(res); // Promise resolved
})

// USING AWAIT


const p2 = new Promise(function (resolve, reject) {
    resolve('Promise settled...')
});

function getData4() {
    p2.then(function (res) {
        // console.log(res); // Promise settled...
    })
}

getData4();


async function handlePromiseByAsyncAwait() {
    const value = await p2;
    console.log(value);
}
handlePromiseByAsyncAwait();

// await keyword can only be used inside async functon.






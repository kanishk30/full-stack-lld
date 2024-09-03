const fs = require('fs');

fs.readFile('f1.txt', cb)

function cb(err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log('File contents:', data)
    }
}

const allPromises = fs.promises;


let promiseReadFile1 = fs.promises.readFile('f1.txt');
let promiseReadFile2 = fs.promises.readFile('f2.txt');
let promiseReadFile3 = fs.promises.readFile('f3.txt');

function readSuccessCallback(data) {
    console.log("File data using promise::", data)
}

function handleError(err) {
    console.log('Error reading file', err)
}

promiseReadFile1.then(readSuccessCallback).catch(handleError)
promiseReadFile2.then(readSuccessCallback).catch(handleError)
promiseReadFile3.then(readSuccessCallback).catch(handleError)


// promiseReadFile1.then(function (result) {
//     console.log("File data using promise::", result)
// }).catch(function (e) {
//     console.log('Error reading file', e)
// })

// promiseReadFile2.then(function (result) {
//     console.log("File data using promise::", result)
// }).catch(function (e) {
//     console.log('Error reading file', e)
// })

// promiseReadFile3.then(function (result) {
//     console.log("File data using promise::", result)
// }).catch(function (e) {
//     console.log('Error reading file', e)
// })
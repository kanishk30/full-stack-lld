const fs = require('fs');

console.log('Before');

fs.readFile('f1.txt', function (err, data) {
    if (err) {
        console.log('Error reading file', err)
    } else {
        console.log("File1::", data)
    }
})
fs.readFile('f2.txt', function (err, data) {
    if (err) {
        console.log('Error reading file2', err)
    } else {
        console.log("File 2::", data)
    }
})
fs.readFile('f3.txt', function (err, data) {
    if (err) {
        console.log('Error reading file3', err)
    } else {
        console.log("File 3::", data)
    }
})

let data = fs.readFileSync('f4.txt');

console.log('File4:: ', data);

console.log('After');
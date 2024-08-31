const fs = require('fs');
console.log('before');

// sync way for reading file
let data1 = fs.readFileSync('f1.txt');

console.log('COntents of f1.txt', data1);


// async file.
fs.readFile('f1.txt', function (err, data) {
    if (err) {
        console.log('Error - File do not exist')
    } else {
        console.log('Contents of file::', data)
    }
})

console.log('after')

// before
// after
// Contents of file:: ....

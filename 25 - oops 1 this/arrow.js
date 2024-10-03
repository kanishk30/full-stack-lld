// traditional func.
function add1(a, b) {
    return a + b;
}

const add2 = function (a, b) {
    console.log(a, b)
    a = a + 1;
    return a + b;
}

// arrow func
// => :: fat Arrow / Big fat arrow

const addArrow = (a, b) => a + b;

const addArrow2 = (a, b) => {
    console.log(a, b);
    a = a + 1;
    return a + b;
}

// console.log(add1(1, 2))
// console.log(add2(1, 2))
// console.log(addArrow(1, 2))
// console.log(addArrow2(1, 2))


const double = function (x) {
    return x * 2;
}

const doubleArrow = (x) => x * 2;
const doubleArrow2 = x => x * 2;
const doubleArrow3 = x => {
    return x * 2;
}

console.log(double(3))
console.log(doubleArrow(3))
console.log(doubleArrow2(3))
console.log(doubleArrow3(3))


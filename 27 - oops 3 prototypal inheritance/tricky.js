// const obj = {
//     name: 'John'
// };

// // console.log(obj.toString()) // [object Object]

// obj.__proto__ = null; // 
// // setting __proto__ tp null, detaches the object from its object's prototype chain.

// // console.log(obj.toString()) // error.

// const obj1 = Object.create({})
// console.log(obj1.toString()); // works

// const obj2 = Object.create(null)
// console.log(obj1.toString()); // error


// ques 2

// function Animal() {

// }

// console.log(Animal.prototype.constructor) // [Function: Animal]


// ques 3

function Animal() {
    Animal.prototype.speak = function () {
        console.log('Speak...')
    }
}

function Dog() { };

Dog.prototype = Object.create(Animal.prototype);

const dog1 = new Dog();
Dog.prototype.constructor = Animal;
console.log(dog1.constructor); // [Function: Animal]

console.log(dog1.constructor.name); // Animal

// Dog.prototype.constructor will point to Animal. 
// bacuse Dog.prototype is explicitly set to an object created ith Animal's prototype.

// if we set as below
Dog.prototype.constructor = Dog;
console.log(dog1.constructor.name); // Dog
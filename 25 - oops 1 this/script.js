// enacpsulation. == bundling of data attrbutes & methods(functions) 
// that operate on data in a single unit or class.
'use-strict'; // strict mode of code

function Car(company, model) {
    this.company = company;
    this.model = model;
    this.displayInfo = function () {
        console.log(`Car: ${this.company} ${this.model}`)
    }
}


const myCar1 = new Car('Toyota', 'Corolla');
const myCar2 = new Car('Kia', 'Sonet');
const myCar3 = new Car('a', 'b');
const myCar4 = new Car('qw', 'sdsds');

// users of car1, car2 object - just need to know that calling displayinfo will give name & model.
myCar1.displayInfo()
myCar2.displayInfo()

//  FUNCTION CONTEXT 


function greet() {
    console.log(`Hello, I am ${this.name}`);
    // console.log('Hello, I am '  + this.name);
}

const user = { name: 'John' };
const admin = { name: 'Alice' }

// call greet() function with user context >> Hello I am John
// call greet() function with admin context >> Hello I am ALice

// this keyword..

// global context in browser >> this === window
// function == depends!!!



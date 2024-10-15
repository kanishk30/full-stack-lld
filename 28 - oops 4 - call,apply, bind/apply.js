const person1 = {
    name: 'John',
    age: 25,

    printNameAndAge: function (location, country) {
        console.log(`Name: ${this.name} , age: ${this.age} , Place: ${location} , ${country}`)
    }
}

const person2 = {
    name: 'Jill',
    age: 20
}

// person1.printNameAndAge('Mumbai')
// person2.printNameAndAge()

// person1.printNameAndAge :: function we want to invoke.
// .call(person2) :: person2 will become this.
const params = ['Delhi', 'India', 'Asia']
person1.printNameAndAge.apply(person2, params);



// Wuestion: find maximum no. in an array?

const numbers = [3, 4, 5, 6, 7, 100];

console.log(Math.max.apply(null, numbers, [1000, 2000])); // === math.max(3,4,5,6,7)

console.log(Math.max.call(null, 3, 4, 5, 6, 7, 100));

// using spread operator ( ES6 )

console.log(Math.max(...numbers))





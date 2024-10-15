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

person1.printNameAndAge('Mumbai')
// person2.printNameAndAge()

// person1.printNameAndAge :: function we want to invoke.
// .call(person2) :: person2 will become this.
person1.printNameAndAge.call(person2, 'Delhi', 'India');

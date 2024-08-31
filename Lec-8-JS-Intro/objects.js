// This is called Object literal
// If I want to freeze the keys of an object and make them immutable, then I should use Object.freeze
const person = Object.freeze({
    name: "Bruce Wayne",
    alias: "Batman",
    firstAppears: 1958,
    phone: 9877671717,
    isVillain: false,
    friends: ["Selina Kyle", "Harvey Dent"],
    sayHello: () => {
        console.log("Batman says hi")
    },
    bulter: {
        name: "Albert",
        age: 78
    }
})

console.log(person.friends)
console.log(person["friends"])

// Adding the value of a key
person.city = "Gotham"


// Modifying the value of a key
person.phone = 88888888

// Deleting the value of a key
delete person.friends

console.log(person)

console.log(person.sayHello())


// const person1 = new Object()
// const person2 = Object.create()


// This will not let me add a new key to the object
// But I can still modify the values of the keys already defined
const person2 = Object.seal({
    a: 10,
    b: 20
})

person2.a = 100
person2.c = 100
console.log(person2)
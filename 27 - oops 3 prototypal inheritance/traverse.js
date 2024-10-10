const animal = {
    eats: true,
    sleep: true,
    walk() {
        console.log('the animal is walking...')
    }
    // __proto__ : [[Prototype] : Object
}

const herbivore = {
    eatsMeat: 'NO meat',
    __proto__: animal
}

const carnivore = {
    eatsMeat: 'Yes love meat..',
    __proto__: animal
}


const rabbit = {
    canJump: true,
    __proto__: herbivore
}

const tiger = {
    canKill: true,
    sleep: 'no sleep, only hunt',
    __proto__: carnivore
}

// Object.keys() == returns all the keys in an object.
// Object.values() == returns all the values in an object.

console.log(Object.keys(rabbit))
// object.keys return oits own keys only. ( not inherited )


// for..in loop returns both self & inherited properties
for (let key in rabbit) {
    if (rabbit.hasOwnProperty(key)) {
        console.log("Own property: ", key)
    } else {
        console.log("Inherited property: ", key)
    }
}

// hasOwnProperty
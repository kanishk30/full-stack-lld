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

// console.log(tiger.eatsMeat)
// console.log(tiger.sleep)

// PROTOTYPE CHAINING
console.log(tiger.__proto__)
console.log(tiger.__proto__.__proto__)
console.log(tiger.__proto__.__proto__.__proto__)
console.log(tiger.__proto__.__proto__.__proto__.__proto__)
/**
{ eatsMeat: 'Yes love meat..' }
{ eats: true, sleep: true, walk: [Function: walk] }
[Object: null prototype] {}
null
 */

// herbivore, carnivore ===> animal
// rabbit ===> herbivore
// tiger ==> carnivore



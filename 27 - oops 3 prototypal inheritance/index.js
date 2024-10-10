const animal = {
    eats: true,
    sleep: true,
    walk() {
        console.log('the animal is walking...')
    }
}

console.log(animal)

const rabbit = {
    areCute: true
}

rabbit.__proto__ = animal;

console.log(rabbit)
console.log(rabbit.walk())
console.log(rabbit.eats)


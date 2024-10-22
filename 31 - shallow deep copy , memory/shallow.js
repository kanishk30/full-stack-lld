let zoo = {
    name: 'Fun Zoo for kids',
    location: 'Bangalore',
    ticketCost: 1000,
    animals: [
        {
            species: 'Tiger',
            favouriteFood: 'Meat'
        },
        {
            species: 'Elephant',
            favouriteFood: 'Banana'
        },
    ]
};

let shallowZoo1 = Object.assign({}, zoo);
let shallowZoo2 = { ...zoo }; // spread opeartor syntax

shallowZoo2.location = 'Delhi';
// console.log(zoo); // not affected
// console.log(shallowZoo2) // changed.

shallowZoo2.animals[0].favouriteFood = 'Other animals...';
console.log("zoo", zoo.animals[0].favouriteFood)
console.log("shallow zoo", shallowZoo2.animals[0].favouriteFood)
// both affected...

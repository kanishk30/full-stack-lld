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
// JSON.stringify && JSON.parse.

let zooString = JSON.stringify(zoo);
let deepCopyZoo = JSON.parse(zooString);

deepCopyZoo.animals[0].favouriteFood = 'other animals..'
console.log("zoo", zoo.animals[0].favouriteFood); // zoo Meat
console.log("deepCopyZoo", deepCopyZoo.animals[0].favouriteFood) // deepCopyZoo other animals..


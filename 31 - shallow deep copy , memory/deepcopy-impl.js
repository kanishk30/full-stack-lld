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
    ],
    details: {
        founded: 1990,
        area: {
            locality: 'Civil lines',
        }
    },
    greet() {
        console.log('Hello and welcome to', this.name)
    }
};

// deep clone.
function deepClone(param) {
    // return copy of this param.
    // handle this for arrays, function, object
    // 4steps - RECURSION.
    // 1. base case
    // 2. array
    // 3. function
    // 4. object
    if (param == null || typeof param !== 'object') {
        return param;
    }
    // if(Array.isArray(param))
    // param = [1,2,3, function(){..}, {a: 1, b: {c:100, d:200, e: {1: 'hello}}, f: [1,2,3,{a:1000}]}, true]
    if (param instanceof Array) {
        let copy = [];
        // [1,2,3, [4,5,6]]
        for (let i = 0; i < param.length; i++) {
            copy[i] = deepClone(param[i]); // 1 ; copy[0] = 1, copy[1] = 2, ..
        }
        return copy;
    }
    if (param instanceof Function) {
        const newFunc = param.bind({});
        return newFunc;
    }
    if (param instanceof Object) {
        let copy = {};
        for (let key in param) {
            if (param.hasOwnProperty(key)) {
                copy[key] = deepClone(param[key])
            }
        }
        return copy;
    }
}

const clonedObj = deepClone(zoo);

clonedObj.name = 'John';
clonedObj.ticketCost = 'no ticket'
clonedObj.details.founded = 2024
clonedObj.details.area.locality = 'KOramangala'
clonedObj.animals[0].favouriteFood = 'others animals like deer'

console.log(zoo)


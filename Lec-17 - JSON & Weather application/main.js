// Define toys in a JS object way.
var toys = {
    toy1: {
        name: 'Teddy bear',
        color: "Brown",
        price: 2000
    },
    toy2: {
        name: 'Race car',
        color: "Blue",
        price: 200
    },
    toy3: {
        name: 'Barbie Doll',
        color: "Pink",
        price: 400
    },
};

// converted object to JSON string.
var toysToString = JSON.stringify(toys);
// {"toy1":{"name":"Teddy bear","color":"Brown","price":2000},"toy2":{"name":"Race car","color":"Blue","price":200},"toy3":{"name":"Barbie Doll","color":"Pink","price":400}}


// console.log("Packed toys:", toysToString);

console.log(toys.toy1.name) // { name: 'Teddy bear', color: 'Brown', price: 2000 }
console.log(toysToString.toy1) // undefined

// let str = "abc"
// str.name; // undefined

// let str1 = "{name: hello}";
// console.log("str1.name", str1.name) // undefined

var unpackedtoys = JSON.parse(toysToString);
console.log("Unpaced toys in obj", unpackedtoys)
console.log("Toy1.name", unpackedtoys.toy1.name)



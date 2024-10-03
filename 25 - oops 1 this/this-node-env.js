// this behaviour in """"""""nodeJS"""""""".

// Scenario 1 
console.log('Scenario 1: ')
console.log(this); // Output : {}
// Explantaion -- in global context, this refers to empty object

// Scenario 2

console.log('Scenario 2:');
function fnGlobal() {
    console.log(this); // global object 
}
fnGlobal();
// exaplnation - inside a regular function, this refers to global object

// Scenario 3

console.log('Scenario 3:')
var obj = {
    fn: function () {
        console.log(this); // object itself - { fn: [Function: fn] }
    }
}
obj.fn();
// explanation - inside an object method, this refers to the object itself.

console.log('Scenario 4 :')

var obj2 = {
    fn: function () {
        console.log(this); // object itself - { fn: [Function: fn] }
        var nestedFn = function () {
            console.log(this); // global object
        }
        nestedFn()
    }
}
obj2.fn();
// output : nestedFn = global object 
// explanation - inside a nested function, this reverts back to global object.


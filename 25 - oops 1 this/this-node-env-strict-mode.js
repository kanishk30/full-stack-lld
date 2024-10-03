// this behaviour in """"""""nodeJS"""""""" strict mode.

'use strict'

// Scenario 1 
console.log('Scenario 1: ')
console.log(this); // Output : {}
// Explantaion -- in global context, this refers to empty object


// Scenario 2

console.log('Scenario 2:');
function fnGlobal() {
    console.log(this); // undefined
}
fnGlobal();
// exaplnation - in strict mode, when u call a function without specifying its contxt(this)
// it is set to undefined.
// since, change prevents function from unintentially modifying the global object. to avoid security issues.

// Scenario 3

console.log('Scenario 3:')
var obj = {
    prop: 'Property',
    fn: function () {
        console.log(this); // object itself - { fn: [Function: fn] }
        console.log(this.prop); // Property
    }
}
obj.fn();
// explanation - inside an object method, this refers to the object itself.

console.log('Scenario 4 :')

var obj2 = {
    fn: function () {
        console.log(this); // object itself - { fn: [Function: fn] }
        var nestedFn = function () {
            console.log(this); // undefined
        }
        nestedFn()
    }
}
obj2.fn();
// output : nestedFn = global object 
// explanation - inside a nested function, this reverts back to global object.


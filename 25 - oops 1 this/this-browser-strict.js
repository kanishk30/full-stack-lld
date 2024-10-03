'use strict';
// scenarios1 
console.log('Scenario 1: ')
console.log(this)
// VM195:2 Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

// scenario 2

console.log('Scenario 2: ')
function fnGlobal() {
    console.log(this);
}
fnGlobal();
// undefined

// scenario 3
console.log('Scenario 3: ')
var obj = {
    prop: 'Some property',
    fn: function () {
        console.log(this);
        console.log(this.prop);
    }
}
obj.fn()
//VM369:4 {prop: 'Some property', fn: ƒ}fn: ƒ ()prop: "Some property"[[Prototype]]: Object
// VM369:5 Some property

// Scenatrio 4
console.log('Scenario 4: ')
var obj2 = {
    prop2: 'Some property2',
    fn: function () {
        console.log('this outside', this);
        var nestedFn = function () {
            console.log('this in nested fn', this);
            console.log('prop value in nested function:', this.prop2);
        }
        nestedFn()
    }
}
obj2.fn();
// #34 this outside {prop2: 'Some property2', fn: ƒ}
// line 36 undefined
// Uncaught TypeError: Cannot read properties of undefined (reading 'prop2')
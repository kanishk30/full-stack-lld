// scenarios1 
console.log(this)
// VM195:2 Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

// scenario 2

function fnGlobal() {
    console.log(this);
}
fnGlobal();
// VM238:2 Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

// scenario 3

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
// VM616:4 this outside {prop2: 'Some property2', fn: ƒ}
// VM616:6 this in nested fn Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
// VM616:7 prop value in nested function: undefined
// classes in JS.
// ES6 ( ECMAScript 2015)
// inheritance in JS.

class MyClass {
    constructor() {
        // initialisation of properties
    }
    static myStaticMthod() {
        // ...
    }
    static name = 'hello';

    method1() {
        // method ( function ) implementation
        console.log('dsd')
    }

    method2() {

    }
}

// console.log(MyClass.name)

const className = new MyClass()
// console.log(className.method1())


class Pizza {
    constructor(toppings, size, crustType) {
        this.toppings = toppings;
        this.size = size;
        this.crustType = crustType;
    }

    describe() {
        console.log(`I had ${this.size} ${this.crustType} pizza with ${this.toppings.join(', ')}.`)
    }
}

const ravisOrder = new Pizza(['Cheese', 'Pepperoni'], 'Small', 'thin');
const vinaysOrder = new Pizza(['Cheese', 'Veggies'], 'Large', 'thick');

ravisOrder.describe()
vinaysOrder.describe()






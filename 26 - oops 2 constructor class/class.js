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
    static totalPizzasMade = 0;

    #toppings; // private property.
    #size; // private property.
    #crustType; // private property.


    constructor(toppings, size, crustType) {
        this.#toppings = toppings;
        this.#size = size;
        this.#crustType = crustType;
        Pizza.totalPizzasMade++; // increment the count each time a new pizza is made.
    }

    describe() {
        console.log(`I had ${this.#size} ${this.#crustType} pizza with ${this.#toppings.join(', ')}.`)
    }

    static calculatePizzasMade() {
        console.log('Total pizzas: ', Pizza.totalPizzasMade)
    }
}

const ravisOrder = new Pizza(['Cheese', 'Pepperoni'], 'Small', 'thin');
const vinaysOrder = new Pizza(['Cheese', 'Veggies'], 'Large', 'thick');

// ravisOrder.describe()
// vinaysOrder.describe()


class StuffedCrustPizza extends Pizza {
    #stuffingType; // private property

    constructor(toppings, size, crustType, stuffingType) {
        super(toppings, size, crustType); // Call the parent constrcutor with super.
        this.#stuffingType = stuffingType;
    }

    describeStuffing() {
        console.log(`This pizza has ${this.#stuffingType} stuffing in it.`)
    }

    describe() {
        super.describe(); // Call the describe method from the parent's class.
    }
}

const specialOrder = new StuffedCrustPizza(['Cheese', 'Mushrooms'], 'medium', 'wheat', 'corn and cheese')

specialOrder.describe();
specialOrder.describeStuffing();

console.log(specialOrder.toppings); // undefined , as toppings is private.
// console.log(specialOrder.#toppings); // SyntaxError: Private field '#toppings' must be declared in an enclosing class

Pizza.calculatePizzasMade() // 3





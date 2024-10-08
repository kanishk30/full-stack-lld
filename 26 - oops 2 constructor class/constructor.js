// defining pizza constrcutor function.
function Pizza(toppings, size, crustType) {
    this.toppings = toppings;
    this.size = size;
    this.crustType = crustType;

    this.describe = function () {
        console.log(`I had ${this.size} ${this.crustType} pizza with ${this.toppings.join(', ')}.`)
    }

}

const ravisOrder = new Pizza(['Cheese', 'Pepperoni'], 'Small', 'thin');
const vinaysOrder = new Pizza(['Cheese', 'Veggies'], 'Large', 'thick');

ravisOrder.describe()
vinaysOrder.describe()

let car = {
    name: 'ferrari',
    color: 'red'
};

function buyCar(price, country) {
    console.log(`I bought ${this.color} ${this.name} of ${price} rupees ${country}.`)
}

// Intuitin

// ...args == rest parameter.= collets all reamining arguments passed into an array.
Function.prototype.myCall = function (context = {}, ...args) {

    if (typeof this !== 'function') {
        throw new Error(this, 'is not a a function')
    }


    // console.log(this); // [Function: buyCar]
    // console.log(context); // { name: 'ferrari', color: 'red' }
    console.log('args', args)
    context.myFunc = this;
    // { name: 'ferrari', color: 'red', 
    // myFunc:  console.log(`I bought ${this.color} ${this.name} of ${price} rupees.`)  }

    context.myFunc(...args);

    // let func = this;
    // func(...args)
}


buyCar.myCall(car, 3000000, 'made in india');

// '1212'.myCall(car, 3093984934);
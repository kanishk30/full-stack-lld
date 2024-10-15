
Function.prototype.myOwnApply = function (context = {}, argsArray = []) {
    if (typeof this !== 'function') {
        throw new Error(this, 'is not a function.')
    }

    if (!Array.isArray(argsArray)) {
        throw new Error(this, argsArray, 'need array in arguments')
    }
    context.myFunc = this;
    context.myFunc(...argsArray);
}


let car = {
    name: 'ferrari',
    color: 'red'
};

function buyCar(price, country) {
    console.log(`I bought ${this.color} ${this.name} of ${price} rupees ${country}.`)
}
buyCar.myOwnApply(car, ['300000', 'made in india']);
buyCar.apply(car, ['300000', 'made in india']);
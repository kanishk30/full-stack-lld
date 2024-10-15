// not invoke function immediately. we return a function.

Function.prototype.myBind = function (context, ...bindArgs) {
    if (typeof this !== 'function') {
        throw new Error(this, 'is not a function.')
    }
    const targetFunc = this;
    return function (...args2) {
        targetFunc.call(context, ...bindArgs, ...args2);

        // targetFunc.apply(context, [...bindArgs, ...args2])
    }
    // return func; func shpuld be able to take args2 also.
}

let user = {
    name: 'John',
    age: 25,
    greet: function (city, country, continent) {
        console.log(`Hi, I am ${this.name} and ${this.age} years old 
        from ${city}, ${country}, ${continent}.`)
    }
}

let user2 = {
    name: 'Jill',
    age: 20
}

let boundGreetFunc = user.greet.myBind(user, 'delhi', 'india');
let boundGreetFunc2 = user.greet.myBind(user2, 'goa', 'india');

boundGreetFunc('asia')
boundGreetFunc2('africa')
let user = {
    name: 'John',
    age: 25,
    greet: function () {
        console.log(`Hi, I am ${this.name} and ${this.age} years old.`)
    }
}

let user2 = {
    name: 'Jill',
    age: 20
}

// boundGreetFunc will always use "user" object as its context;
let boundGreetFunc = user.greet.bind(user);
let boundGreetFunc2 = user.greet.bind(user2);

boundGreetFunc()
boundGreetFunc2()
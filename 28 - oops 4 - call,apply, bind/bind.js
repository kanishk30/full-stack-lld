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

// boundGreetFunc will always use "user" object as its context;
let boundGreetFunc = user.greet.bind(user, 'delhi', 'india');
let boundGreetFunc2 = user.greet.bind(user2, 'goa', 'india');

boundGreetFunc('asia')
boundGreetFunc2('africa')
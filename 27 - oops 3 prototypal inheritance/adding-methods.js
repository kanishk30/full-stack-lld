function User(name) {
    this.name = name;
    this.msg = function () {
        console.log(`hello ${this.name}`)
    }
}

const user1 = new User('Kohli');
const user2 = new User('Dhoni');
console.log(user1)
console.log(user1.name)
console.log(user2.name)

console.log(user1.msg === user2.msg); // false
// since each objct is created wth separate copy
// so memory waste in here.







function BetterUser(name) {
    this.name = name;
}

BetterUser.prototype.msg = function () {
    console.log(`Hello ${this.name}`)
}

const user3 = new BetterUser('Shubman')
const user4 = new BetterUser('SKY')

console.log(user3.name)
console.log(user4.name)
console.log(user3.msg === user4.msg); // true
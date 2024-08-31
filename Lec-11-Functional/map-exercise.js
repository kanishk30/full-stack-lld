
// You are given a transaction array treat the transaction amount in rupees, and convert those amounts into dollars and conversion rate is also provided to us.
const transactions = [1000, 3000, 4000, 2000, - 898, 3800, - 4500];
const inrtToUsd = 80;


function process(item) {
    return item / inrtToUsd
}

// Shortcut if you are using arrow function and there's a single statement which is a return statement
// Then you can remove the curly braces and return keyword
// But if you use curly braces, you can't remove return keyword
// const result = transactions.map((item) => item / inrtToUsd )
const result = transactions.map((item) => { return item / inrtToUsd })
console.log(result)









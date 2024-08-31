// We are given an array of numbers that contains both even and odd numbers and we need an array which only contains the even numbers of the input array.

const arr = [1, 2, 3, 4, 5, 6, 7, 8]


const result = arr.filter((item) => item % 2 == 0)

console.log(result)

// You are given a transaction array, and use a filter to find the positive transaction amounts

const transactions = [0, 1000, 3000, 4000, 2000, - 898, 3800, - 4500];

const positives = transactions.filter((item) => item >= 0)
console.log(positives)

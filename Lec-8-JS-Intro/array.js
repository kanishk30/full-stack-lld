const a = [1, 2, 3, 4, 5]
console.log(a)
// const b = ["10", true, 100, function (a) { return a + b }]

console.log(a[2])
console.log(a[100])

// This is not possible because a is const
// a = [4, 5, 6]

a[2] = "10"
console.log(a)

// Add a new element 
// At the beginning
a.unshift(200)
console.log(a)
// At the end
a.push(100)
console.log(a)


// Remove an element
// At the beginning
a.shift()
console.log(a)
// At the end
a.pop()
console.log(a)

// Reference
const oldArray = [1, 2, 3, 4, 5]
const newArray = oldArray

oldArray.push(100)
console.log(newArray)
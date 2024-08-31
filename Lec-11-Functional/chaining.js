// Map over each element and square it, then filter the elemnts
// to get the even ones

const array = [1, 2, 3, 4, 5]

const mappedValues = array.map((item) => item * item)
const filteredValues = mappedValues.filter((item) => item % 2 == 0)


const finalResult = array.map((item) => item * item).filter((item) => item % 2 == 0)

console.log(finalResult)
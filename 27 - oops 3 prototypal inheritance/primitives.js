// primitives = are not objects

let s = 'hello';
let s2 = 'jdjkfjdk';
// console.log(s.toUpperCase())

// Ques: given a string, add # after each character in the string. custom method on string.
// ip - hello ; o/p - h#e#l#l#o#
// s.addHash()

String.prototype.addPattern = function (pattern) {
    const str = this;
    const brokenStringInArray = str.split('')
    // console.log(brokenStringInArray);
    const result = brokenStringInArray.join(pattern)
    return result
}

console.log(s.addPattern('#'))
console.log(s2.addPattern('*'))

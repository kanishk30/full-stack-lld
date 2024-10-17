const arr = [1, 2, 3, 4, 5, 6, 7];

// if (!Array.prototype.filter) {
Array.prototype.myFilter = function (callback, thisArg) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a a ufnction.')

    var result = [];
    // var context = thisArg ? thisArg : this;
    var context = thisArg || this;

    for (var i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this)) {
            result.push(this[i])
        }
    }
    return result;
}
// }

const res = [1, 2, 3, , , null, undefined, 4, 5].myFilter(el => el % 2 === 0);
const res2 = [1, 2, 3, , , null, undefined, 4, 5].filter(el => el % 2 === 0);
console.log('myfilter', res)
console.log('filter', res2)

function isEven(num) {
    return num % 2 === 0
}
const res3 = [1, 2, 3, , , null, undefined, 4, 5].myFilter(isEven);
console.log(res3)

const myEven = num => num % 2 === 0;

const res4 = [1, 2, 3, , , null, undefined, 4, 5].myFilter(myEven);
console.log(res4)
const arr = [1, 2, 3];
const result1 = arr.map((item) => item * item);
// map returns a new array && do not modify original array.
// console.log(result1);

const res2 = arr.map(function (el, index, origArr) {
    // console.log(index, origArr)
    // console.log(this)
    return { [index]: el }
})

// (method) Array<number>.map<number>(callbackfn: (value: number, index: number, array: number[]) => number, thisArg?: any): number[]
// console.log(res2);

// if(!Array.prototype.map) {
//     Array.prototype.map = function()
// }

// thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
Array.prototype.myMap = function (callbackfn, thisArg) {
    if (typeof callbackfn !== 'function') {
        throw new TypeError(callbackfn + ' should be a function.')
    }
    if (!Array.isArray(this)) throw new TypeError(this + ' should be an array')
    // initialising a new result array
    const arr = new Array(this.length); // make a new array of length of "this" original array.

    for (let i = 0; i < arr.length; i++) {
        // handle sparse array.
        if (i in this) {
            var context = thisArg ? thisArg : this;
            const mappedValue = callbackfn.call(context, this[i], i, this);
            arr[i] = mappedValue
        }
    }
    return arr;
}


const result3 = [1, 2, , 3].myMap((item) => item * item);
const result4 = [1, 2, , 3].map((item) => item * item);
// console.log(result3);
// console.log(result4);

const myArg = { multiplier: 3 };

const ans = [1, 2, 3].myMap(function (el) {
    return el * this.multiplier
}, myArg)

console.log(ans)



